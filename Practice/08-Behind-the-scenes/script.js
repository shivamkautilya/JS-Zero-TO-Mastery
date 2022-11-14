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
console.log(ageCalculator(2005));

//lecture 94
// console.log(namePlease);
// const namePlease = "shivam";

//lecture 96: Using this keyword
console.log(this); //return window from global object
const createFullName = {
  fullName: function () {
    return `Your full name is ${this.firstName} ${this.lastName}.`;
  },
};

const person = {
  firstName: prompt("Enter your first name."),
  lastName: prompt("Enter your last name."),
};

console.log(createFullName.fullName.call(person));
