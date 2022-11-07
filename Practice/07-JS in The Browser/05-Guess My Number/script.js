"use strict";
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
