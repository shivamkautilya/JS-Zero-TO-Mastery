"use strict";
/*
// LECTURE 71 AND 72
console.log(document.querySelector(".message").textContent);
displayMessage(); " Correct Number !!";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 17;
document.querySelector(".guess").value = 24;
console.log(
  document.querySelector(".number").textContent,
  document.querySelector(".score").textContent
  // document.querySelector(".guess").value;
);
console.log(document.querySelector(".guess").value);
*/

//LECTURE 73: HANDLING CLICK EVENTS
//functions
let numberGenerator = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
//function to display Element TextContent
function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}
function displayScore(score) {
  document.querySelector(".score").textContent = score;
}
function displayNumber(number) {
  document.querySelector(".number").textContent = number;
}
function setBgColor(color) {
  document.body.style.backgroundColor = color;
}
function displayGuess(guess) {
  document.querySelector(".guess").value = guess;
}
//function for again button
function clickAgain() {
  numberGenerator();
  computerGuess = numberGenerator();
  userScore = 20;
  console.log("Correct Answer = ", computerGuess);
  document.body.style.backgroundColor = "#222";
  displayMessage("Start Guessing...");
  displayScore(20);
  document.querySelector(".score").value = 20;
  displayNumber("?");
  displayGuess(0);
}
//funtion for game logic
const clickCheck = function () {
  guessInput = document.querySelector(".guess").value;
  guessInput = parseInt(guessInput);
  console.log("User guessed number = ", guessInput, typeof guessInput);
  // displayMessage("Correct Number");
  if (guessInput > 20 || guessInput === 0) {
    displayMessage("Guess number between 1-20");
    ("Guess number between 1-20");
    console.log("Guess number between 1-20");
  } else if (guessInput !== computerGuess) {
    // console.log("if statement executed");
    if (userScore === 1) {
      setBgColor("#d30f0f");
      displayMessage("You Lost 🥲");
      displayScore(0);
    } else if (userScore > 1) {
      userScore--;
      displayScore(userScore);
      console.log("User Score = ", userScore);
      if (guessInput < computerGuess) {
        displayMessage("Too low!!! Guess higher number.");
      } else if (guessInput > computerGuess) {
        displayMessage("Too high!!! Guess lower number.");
      } else if (!guessInput) {
        displayMessage("Please enter valid Number!");
      } else {
        console.log("Unknown Error!!");
      }
    }
  } else if (guessInput === computerGuess) {
    displayMessage("🎉 Correct Answer!!!!");
    // document.querySelector(".highscore").textContent = userScore;
    displayNumber(guessInput);
    setBgColor("#19a447");
    console.log("Correct Guess!!!", "User Score = ", userScore);
    if (userScore > highScore) {
      highScore = userScore;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else {
    console.log("Unknown Error");
  }
};
//
let computerGuess = numberGenerator();
let userScore = document.querySelector(".score").textContent;
userScore = Number.parseInt(userScore);
let guessInput = 0;
let highScore = 0;
console.log("Correct Answer = ", computerGuess);
//Store input of check class
document.querySelector(".check").addEventListener("click", clickCheck);
//add functionality in again button
document.querySelector(".again").addEventListener("click", clickAgain);
