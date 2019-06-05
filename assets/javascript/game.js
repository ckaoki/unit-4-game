var targetNumber = 0;
var score = 0;
var wins = 0;
var losses = 0;
var crystalValues = [];
const numCrystals = 4;

function init(){
    // initialize GUI
    score=0;
    $("#score").text(0);
    genRandomTargetNum();
    genRandomCrystalNums();
}

// generate random number from 19-120 to match 
function genRandomTargetNum(){
    targetNumber = Math.floor((Math.random()*102))+19;
    $("#targetNumber").text(targetNumber);
}

// generate random numbers from 1-12 for four crystals
function genRandomCrystalNums(){       
    for(var i=0; i<numCrystals; i++){
        crystalValues[i] = Math.ceil(Math.random()*12);
    }
    console.log(crystalValues);
}

// crystal was clicked, play game.
function playGame(crystalIndex){
    // add crystal value to score
    score += crystalValues[crystalIndex];
    $("#score").text(score);

    // verify score
    if (score === targetNumber){
        // you win
        wins++;
        $("#wins").text(wins);
        $("#gameResult").css({"color":"green", "font-weight": "bold", "font-size": "24pt"});
        $("#gameResult").text("You Won!")
        init();
    }
    else if (score > targetNumber){
        //you lose
        losses++;
        $("#losses").text(losses);
        $("#gameResult").text("You Lost!")
        $("#gameResult").css({"color":"red", "font-weight": "bold", "font-size": "24pt"});
        init();
    }
    else{
        // still going.  Clear results
        $("#gameResult").text("");
    }
}


$(document).ready(function(){
    init();

    $(".crystalImg").click(function(){
       playGame($(this).attr("index"));
    });
});