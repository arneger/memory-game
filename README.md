# memory-game
This is a website where you can play a concentration memory card game.

### How to play
##### 1. 
Go to https://arneger.github.io/memory-game/ and click on the "Play Game" button.
##### 2. 
12 cards will be displayed on the screen. When you click on a card, the timer above
the cards will start.
##### 3. 
If the first pair of cards you click on displays for instance a dog you will get one point 
and the two cards will disappear from the screen.
##### 4. 
If the pair of cards you click on is not the same you'll get one minus point, but
if your total points is 0 you'll not lose points.
##### 5. 
The timer will stop when you've found all the card pairs.
##### 6. 
A score will be displayed on the screen, this score is calculated by
multiplying your points with 1000 divided by the time you used.
If your points are 6 and the time used is 00:32 the score will be (6*1000)/32.
Your score will be heavily affected if you use 1 minute or more. 1 minute will equal
100, which means your score will be (points*1000)/100.

index.html is the first page you'll see when you go to https://arneger.github.io/memory-game/ .
Here you'll be able to click on a button "Play Game".
When you click on the button you'll be sent to memoryGame.html where 
the rest of the game is controlled by the JavaScript (script.js).

### JavaScript:
The cards (png files) are inside the variable "cards" and all of them will be shuffled
with the function "shuffleCards(cards)" each time memoryGame.html is loaded.
the card dictionary object "cardDictionary" uses the img id's from memoryGame.html as key
and a card from "cards" as value. This way we will know where each card is added.

#### Functions:
cardsClick(clicked_id) is the function that's activated after clicking a card.
This function determies what will happen after each user action and basically controls 
the game.

countTimer() controls the timer in the game. It start when the user clicks his/hers first
card.

calculateScore() calculates the score when the user have finished a game.
It converts minutes + seconds to a number. Multiplies points with
1000 and divides it with the time number and returns it as a score.
Score = (Points*1000)/Time.

resetImgsAndIDsList() Empties the twoImgs and twoIds arrays.
This function is used when the user have picked a pair of cards.

faceDownCard() replaces the card that's faceup with the faceDown card.
This function is used when the user picks a pair of cards that are not the same cards.

removeCards() i used when the user have picked a pair of cards that are the same.
This function changes the css of those two images to make it look like they disappeared 
on screen. It also does so the hidden cards can't be clicked by making onclick false.

decideCardPush() decides when to push id and imgs to the twoImgs and twoIds arrays.
This makes it so a card's img id isn't pushed twice to the twoIds array.

handler(e) freezes the possibility of clicking a card. Is used while the cardClick(clicked_id)
checks a pair of cards. This way the user can't click on other cards when the code checks
if a pair of cards is the same. 

shuffleCards(cards) shuffles the png files in the "cards" array.
