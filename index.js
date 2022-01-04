/*
var images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var dicePlayer1 = document.querySelector(".player1Dice");
var dicePlayer2 = document.querySelector(".player2Dice");
var title = document.querySelector("h1");

function rollDice1(randomNumber1) {
    dicePlayer1.setAttribute("src", images[randomNumber1 - 1]);
    dicePlayer1.setAttribute("alt", "dice rolled " + randomNumber1);
}

function rollDice2(randomNumber2) {
    dicePlayer2.setAttribute("src", images[randomNumber2 - 1]);
    dicePlayer2.setAttribute("alt", "dice rolled " + randomNumber2);
}

function showResult(randomNumber1, randomNumber2) {
  if (randomNumber1 > randomNumber2) {
    title.innerHTML = "Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    title.innerHTML = "Player 2 wins!";
  } else {
    title.innerHTML = "Draw!";
  }
}

rollDice1(randomNumber1);
rollDice2(randomNumber2);
showResult(randomNumber1, randomNumber2);
*/

//Solução da professora
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

// document.querySelector(".player1Dice").setAttribute("alt", "dice rolled " + randomNumber1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// document.querySelector(".player2Dice").setAttribute("alt", "dice rolled " + randomNumber2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
