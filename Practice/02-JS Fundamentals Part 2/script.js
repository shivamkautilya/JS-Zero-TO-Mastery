"use strict";
/*
//LECTURE: Introduction to Arrays

const testBirthYear = new Array(2006, 2007, 2001, 1976, 1987);
console.log(testBirthYear);
const calcAge = (birthYear) => 2022 - birthYear;
const ageShivam = calcAge(testBirthYear[0]);
const ageMonu = calcAge(testBirthYear[1]);
const ageJonas = calcAge(testBirthYear[2]);
const ageBob = calcAge(testBirthYear[3]);
const ageGenelia = calcAge(testBirthYear[4]);

const calculatedAge = [ageShivam, ageMonu, ageJonas, ageBob, ageGenelia];
console.log(calculatedAge);
console.log(`Length of Array is ${calculatedAge.length}.`);

// LECTURE: Introduction to Objects
var myDetails = {
  //example of object
  firstName: "Shivam",
  lastName: "Kautilya",
  age: 2022 - 2006,
  job: "Student",
  friends: ["Monu", "Rishabh", "Harsh", "Priiyanshu"],
};

//LECTURE: Dot vs. Bracket Notation
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,

  getSummary: function () {
    return `${this.firstName} is a ${this.age}-years old and has ${
      this.hasDriverLicense ? "a" : "no"
    } driver's license.`;
  },
};
console.log(jonas);

console.log(jonas.lastName); //Dot Notation
console.log(jonas["lastName"]); //Bracket Notation

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas.'last' + nameKey)
const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);
//CHALLENGE IN VIDEO
console.log(
  `${jonas.firstName} has ${[
    jonas.friends.length,
  ]} friends, and his bestfriend is ${[jonas.friends[0]]}.`
  );
  //LECTURE: Object Methods
  console.log(jonas.getSummary());
  */
/*
/Lecture 46: Iteration of the Loops
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repitition ${rep} 🏋🏻`);
}
//Lecture 47: Looping Arrays, breaking and continuing
const shivamArray = new Array("Shivam", "Kautilya", 2005, "Male", "Student");
let typeOfShivamArray = [];
for (let i = 0; i < shivamArray.length; i++) {
  console.log(shivamArray[i], typeof shivamArray[i]);
  //first method
  // typeOfShivamArray[i] = typeof shivamArray[i];
  //second method - Push Method
  typeOfShivamArray.push(typeof shivamArray[i]);
}
*/
// console.log(typeOfShivamArray);
/*
//continue and break in loop
console.log("--- Print strings only ---");
for (let i = 0; i < shivamArray.length; i++) {
  if (typeof shivamArray[i] !== "string") continue; //example of continue in a loop
  console.log(shivamArray[i], typeof shivamArray[i]);
}

console.log("--- Break loop if number found ---");
for (let i = 0; i < shivamArray.length; i++) {
  if (typeof shivamArray[i] === "number") break; //example of break in a loop
  console.log(shivamArray[i], typeof shivamArray[i]);
}
*/
/*
//Lecture 48: Looping Backwards and Loop inside loop
console.log("--- Looping Backwards ---");
const shivamArrayBackwards = [];
for (let i = shivamArray.length - 1; i >= 0; i--) {
  // console.log(i, shivamArray[i]);
  //store this loop in const shivamArrayBackwards
  shivamArrayBackwards.push(shivamArray[i]);
}

console.log(shivamArrayBackwards);

//loop inside a loop
//We will do 3 times exercise with repetition of 5 pushups each time
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`--- Exercise repetition ${exercise} ---`);
  for (let pushups = 1; pushups <= 5; pushups++) {
    console.log(`Do push ups,push up repetition ${pushups}`);
  }
}
*/
