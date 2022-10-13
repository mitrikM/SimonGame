var userClickedPattern= [];
var gamePattern = [];
const colorAray = ["yellow", "red", "blue", "green"];

getColor();
$(document).click(function (event){
   var userChosenColor=event.target.id;
   userClickedPattern.push(userChosenColor);
});


function getColor(){
    var randomColor = colorAray[nextSequence()];
    $("#"+randomColor).fadeOut(200).fadeIn(200);

    gamePattern.push(randomColor);

}
function nextSequence(){
    return Math.floor(Math.random()*4);
}

function playSound(name) {
    audio = new Audio("sounds/"+name+".mp3")
    audio.play();
}
