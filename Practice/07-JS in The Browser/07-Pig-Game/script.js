"use strict";
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");

//setting default values to 0
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");

//New Game reset button
