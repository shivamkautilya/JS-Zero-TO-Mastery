//Lecture: Variables and Values
const country = "India";
const continent = "Asia";
let population = 1350;
console.log("Country =", country);
console.log("Continent =", continent);
console.log("Population =", population, "Million");

//Lecture: Data Types
const isIsland = false;
let language;
console.log("Is Island? =", isIsland);
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//Lecture: let,const, and var
language = "Hindi";

//Lecture: Basic Operators
console.log(
  "If your country split in half, and each half would contain half the population, then how many people would live in each half? =",
  population / 2,
  "Million"
);
//2 Increase the population of your country by 1 Million
// population++;
// console.log(population);

const finlandPopulation = 6;
console.log(
  "Finland has a population of 6 million. Does your country have more people than Finland?",
  population > finlandPopulation
);

const avgPopulation = 33;
console.log(
  "The average population of a country is 33 million people.Does your country have population less than average population? = ",
  population < avgPopulation
);

// let description =
//   "India is in Asia,and its current population is 1350 million.It's national language is Hindi.";

// console.log(description);

// LECTURE: Strings and Template Literals
let description = `${country} is in ${continent}, and its current population is ${population} million. It's national language is ${language}.`;
console.log(description);

// LECTURE: Taking Decisions: if / else Statements
if (population > avgPopulation) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(`${country}'s population is ${population} below average.`);
}

// LECTURE: Equality Operators: == vs. ===
let numNeighbours = 8;
if (numNeighbours === 1) {
  console.log(`${country} share it's border with one country.`);
} else if (numNeighbours > 1) {
  console.log(`${country} share it's border with more than one country.`);
} else if (numNeighbours < 0) {
  console.log(`Number of borders can't be less than 0.`);
} else {
  console.log(`${country} has 0 borders.`);
}

//LECTURE:The switch statement.
let languageLowerCase = language.toLowerCase();

switch (languageLowerCase) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place in terms of most speaking language.");
    break;
  case "hindi":
    console.log("3rd place in terms of most speaking language.");
    break;
  case "arab":
  case "arabic":
    console.log("5th place in terms of most speaking language.");
    break;
  default:
    console.log("Great language too!!!!");
    break;
}

// LECTURE: The Conditional (Ternary) Operator

const isAvgPopulation = population >= 33 ? "above average" : "below average";
console.log(`${country}'s population is ${isAvgPopulation}.`);
