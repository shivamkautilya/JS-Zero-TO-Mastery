"use strict";

//variable/constant declarations
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");
const diceClassEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
let currentScore = 0;
let activePlayer = 0;
let notActivePlayer = 1;

let scores = [0, 0];

//FUNCTIONS
const rollDice = function () {
  //1. Generate dice number between 1-6
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(diceNumber);
  //2.Display Dice Image in center
  diceClassEl.classList.remove("hidden");
  diceClassEl.src = `images/dice-${diceNumber}.png`;

  //3. Show and add current score if dice != 1
  if (diceNumber != 1) {
    currentScore += diceNumber;
    // currentScore0El.textContent = currentScore;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    notActivePlayer = notActivePlayer === 1 ? 0 : 1;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--active");
    document
      .querySelector(`.player--${notActivePlayer}`)
      .classList.remove("player--active");
  }
};

const newGame = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  diceClassEl.classList.add("hidden");
};

//setting default values to 0
score0El.textContent = 0;
score1El.textContent = 0;
diceClassEl.classList.add("hidden");

//New Game reset button
// function newGame() {
//   score0.textContent = 0;
//   score1.textContent = 0;
//   dice.classList.add("hidden");
// }
btnRoll.addEventListener("click", rollDice);
btnNew.addEventListener("click", newGame);
// btnHold.addEventListener("click");
