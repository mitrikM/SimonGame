var userClickedPattern= [];
var gamePattern = [];
const colorAray = ["yellow", "red", "blue", "green"];
var level = -1;
var gameStarted = false;
var currentLevel = 0;
$(document).keypress(function (event){
    var key = event.key;
    if(key === "a" && !gameStarted && level===-1){
        nextSequence();
        gameStarted=true;
    }
    else if(level>-1){
        startOver();
    }
})


$(document).click(function (event){
    if (gameStarted){
        var userChosenColor=event.target.id;
        playSound(userChosenColor);
        animatePress(userChosenColor);
        userClickedPattern.push(userChosenColor);
        checkForAnswer(currentLevel);
        if(currentLevel===level && gameStarted){
            setTimeout(nextSequence,1000);
            currentLevel=0;
            userClickedPattern=[]
        }
        else{
            currentLevel++;
        }
    }
    });







function nextSequence(){
    var num = Math.floor(Math.random()*4);
    var randomColor = colorAray[num];
    $("#"+randomColor).fadeOut(200).fadeIn(200);
    playSound(randomColor);
    gamePattern.push(randomColor);
    level++;
    $("h1").text("Level "+level);
}

function playSound(name) {
    audio = new Audio("sounds/"+name+".mp3")
    audio.play();
}
function animatePress(currentColor) {
    $("#"+currentColor).addClass("pressed");
    setTimeout(function (){
        $("#"+currentColor).removeClass("pressed");
    },100);
}
function checkForAnswer(level){
    if(userClickedPattern[level] === gamePattern[level]){
        console.log("good")
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function (){
            $("body").removeClass("game-over");
        },200);
        console.log("bad");
        gameStarted=false;
        $("h1").text("Game Over, press any key to restart!")
    }


}

function startOver(){
    level = -1;
    currentLevel = 0;
    gamePattern=[];
    userClickedPattern=[];
    gameStarted=true;
    nextSequence();
}