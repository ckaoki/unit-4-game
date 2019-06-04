// TODO: generate random number from 19-120 to match 
function genRandomNum(){
    return Math.floor((Math.random()*102))+19;
}

// TODO: generate random numbers from 1-12 for four crystals
var allImages = $( "img" );
function genCrystalsRandomNums(){
    
    var crystalIDs = $('img.imgCrystal');
    for(var i=0; i<crystalIDs.length; i++){
        var randomNum = Math.ceil(Math.random()*12);
        $(crystalIDs[i]).attr({value: randomNum});
    }
        //TODO: Delete this
        //   $("img.imgCrystal").find(allImages);
        //   console.log($("img").attr("value"));
        // const crystalValues = $('img.imgCrystal').map((i, el) => el.getAttribute('value')).get();
        // const ids = $('img.imgCrystal').map((i, el) => el.getAttribute('id'));
        // console.log(crystalValues);
        // console.log(crystalValues[3]);
        // console.log(ids2[1].attr({value: 99}));
        // $(crystalIDs[1]).attr({value: 99});
        // console.log(ids2[2].getAttribute("value"));
        // $("#crystal_1").attr({value: 7});      
    }


function myAlert(currentCrystal){
    $(currentCrystal).attr("value");
    console.log(genRandomNum());


}

$(document).ready(function(){
    genCrystalsRandomNums();
    $(".imgCrystal").click(function(){
        myAlert(this);
    });

// var newentry = $("<div>");
// newentry = "abcd";
// $("body").append(newentry);
});
