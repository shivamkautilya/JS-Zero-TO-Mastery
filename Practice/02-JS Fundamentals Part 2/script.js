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
/*var myDetails = {
  //example of object
  firstName: "Shivam",
  lastName: "Kautilya",
  age: 2022 - 2006,
  job: "Student",
  friends: ["Monu", "Rishabh", "Harsh", "Priiyanshu"],
};
*/
//LECTURE: Dot vs. Bracket Notation
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas.'last' + nameKey)
/*
const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}
*/
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);
//CHALLENGE IN VIDEO
console.log(
  `${jonas.firstName} has ${[
    jonas.friends.length,
  ]} friends, and his bestfriend is ${[jonas.friends[0]]}.`
);