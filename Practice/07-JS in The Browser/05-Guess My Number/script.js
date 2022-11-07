"use strict";
/*
// LECTURE 71 AND 72
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = " Correct Number !!";

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
const clickCheck = function () {
  let guessInput = document.querySelector(".guess").value;
  // guessInput = parseInt(guessInput);
  console.log(guessInput);
  // document.querySelector(".message").textContent = "Correct Number";
};
document.querySelector(".check").addEventListener("click", clickCheck);
