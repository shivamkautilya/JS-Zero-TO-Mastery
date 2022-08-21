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
