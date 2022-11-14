"use strict";

function ageCalculator(birthYear) {
  if (birthYear < currentYear && birthYear > 1900) {
    const myName = firstName;
    const age = currentYear - birthYear;
    return `${myName} your age is ${age}.`;
  } else if (birthYear < 1900) {
    console.log("Enter real birth year,1900 below not possible.");
  } else {
    alert("Please enter year less than current year.");
  }
}

const firstName = "Shivam";
const currentYear = new Date().getFullYear();
console.log(ageCalculator(1890));
