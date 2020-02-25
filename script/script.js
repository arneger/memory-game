var cards = ["cards/koala.png", "cards/dog.png", "cards/monkey.png", "cards/panda.png", "cards/hamster.png", "cards/rabbit.png", "cards/koala.png", "cards/dog.png", "cards/monkey.png", "cards/panda.png", "cards/hamster.png", "cards/rabbit.png",];
shuffleCards(cards);

// Dictionary that assign each img id a card
var cardDictionary = {
    "1" : cards[0],
    "2" : cards[1],
    "3" : cards[2],
    "4" : cards[3],
    "5" : cards[4],
    "6" : cards[5],
    "7" : cards[6],
    "8" : cards[7],
    "9" : cards[8],
    "10" : cards[9],
    "11" : cards[10],
    "12" : cards[11]
}

// Shuffles the cards
function shuffleCards(cards) {
    cards.sort(() => Math.random() -0.5);
}

// Freeze the possibility of clicking on element
function handler(e){ //makes it so you cant change elements or change elements
    e.stopPropagation();
    e.preventDefault();
}

// Decides when to push id and imgs to twoImgs and twoIds
function decideCardPush(clicked_id){
    if (twoIds.includes(clicked_id)){
    }
    else {
        twoImgs.push(cardDictionary[clicked_id]);
        twoIds.push(clicked_id);
    }
}

// Makes it look like the cards disappear on screen
function removeCards(){
    document.getElementById(twoIds[0]).style.cursor = "auto";
    document.getElementById(twoIds[0]).style.opacity = "0";
    document.getElementById(twoIds[0]).onclick = false;
    document.getElementById(twoIds[1]).style.cursor = "auto";
    document.getElementById(twoIds[1]).style.opacity = "0";
    document.getElementById(twoIds[1]).onclick = false;
}

// Replaces faceup card with facedown card
function faceDownCard(){
    document.getElementById(twoIds[0]).src = "cards/faceDown.png";
    document.getElementById(twoIds[1]).src = "cards/faceDown.png";
}

// Empties twoImgs and twoIds
function resetImgsAndIDsList(){
    twoImgs = [];
    twoIds = [];
}

var currentTime;
var timeCounter;
var totalSeconds = 0;

// Counts the time (Starts after the user clicks on a card)
function countTimer() {
    ++totalSeconds;
    var hour = Math.floor(totalSeconds /3600);
    var minute = Math.floor((totalSeconds - hour*3600)/60);
    var seconds = totalSeconds - (hour*3600 + minute*60);
    if(minute < 10)
        minute = "0"+minute;
    if(seconds < 10)
        seconds = "0"+seconds;
    document.getElementById("timeCount").innerHTML = minute + ":" + seconds;
    currentTime = minute + ":" + seconds;
}

// Calculates the score. Converts minutes + seconds to a number. Multiplies points with
// 1000 and divides it with the time number and returns it as a score.
function calculateScore() {
    var timeNumber = Number(currentTime[0]+currentTime[1]+currentTime[3]+currentTime[4]);
    var score = Math.floor((points*1000)/timeNumber);
    return score;
}

var streaks = 0;
var timesClicked = 0;
var points = 0;
var counter = 0;
var twoImgs = [];
var twoIds = [];

// Function that executes after each card-click. Controls the actions.
function cardClick(clicked_id){
    if (timesClicked === 0) {
        timeCounter = setInterval(countTimer, 1000);
    }
    ++timesClicked;
    document.getElementById(clicked_id).src = cardDictionary[clicked_id];
    decideCardPush(clicked_id);
    if (twoImgs.length === 2){
        document.addEventListener("click",handler,true);
        setTimeout(function(){
            document.removeEventListener("click",handler,true);
            if (twoImgs[0] === twoImgs[1]){
                removeCards();
                resetImgsAndIDsList();
                ++counter;
                points += 1 + streaks;
                ++streaks;
                document.getElementById("points").innerHTML = "Points: " + points + "/21";
                if (counter === 6){
                    clearInterval(timeCounter);
                    document.getElementById("timeCount").innerHTML = "Time: " + currentTime;
                    document.getElementById("score").innerHTML = "Score: " + calculateScore();
                    document.getElementById("playAgainButton").innerHTML = '<button class="button" title="Play Again" onclick="window.location.reload();">Play Again</button>'
                }
            }
            else {
                if (points === 0) {
                }
                else{
                    points -= 1
                }
                streaks = 0;
                faceDownCard();
                resetImgsAndIDsList();
                document.getElementById("points").innerHTML = "Points: " + points + "/10";
            }
        }, 800)
    }
}
