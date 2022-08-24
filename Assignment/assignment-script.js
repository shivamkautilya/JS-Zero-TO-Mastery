/*
//SECTION 2 FUNDAMENTALS OF JAVASCRIPT PART 1
//Lecture: Variables and Values
*/
const country = "India";
const continent = "Asia";
let population = 1350;
const language = "Hindi";
/*
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
*/

//SECTION 3 - FUNDAMENTALS OF JAVASCRIPT PART 2
//population store in const
const worldPopulation = 7900;
const populationChina = 1441;
const populationIndia = 1350;
const populationFinland = 9;
const populationUSA = 332;
const capitalIndia = "New Delhi";
//LECTURE Functions
function describeCountry(country, population, capitalCity) {
  const countryDescription = `${country} has ${population} million population and it's capital city is ${capitalCity}.`;
  return countryDescription;
  console.log(countryDescription);
}

const describeIndia = describeCountry("India", populationIndia, capitalIndia);
const desribeFinland = describeCountry(
  "Finland",
  populationFinland,
  "Helsinki"
);
const describeUSA = describeCountry(
  "United States of America",
  800,
  "Washington DC"
);
console.log(describeIndia);
console.log(desribeFinland);
console.log(describeUSA);

//LECTURE: Function Declarations vs. Expressions
/*
// function declaration
function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

let percentagePopulationIndia = percentageOfWorld1(populationIndia);
let percentagePopulatinChina = percentageOfWorld1(populationChina);
let percentagePopulationFinland = percentageOfWorld1(populationFinland);
// INDIA,CHINA,FINLAND
console.log(
  `China has population about ${percentagePopulatinChina} percentage of world's population.`
);
console.log(
  `India has population about ${percentagePopulationIndia} percentage of world's population.`
);
console.log(
  `Finland has population about ${percentagePopulationFinland} percentage of world's population.`
);

// function expression
const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};
percentagePopulationIndia = percentageOfWorld2(populationIndia);
percentagePopulatinChina = percentageOfWorld2(populationChina);
percentagePopulationFinland = percentageOfWorld2(populationFinland);
// INDIA,CHINA,FINLAND
console.log(
  `China has population about ${percentagePopulatinChina} percentage of world's population.`
);
console.log(
  `India has population about ${percentagePopulationIndia} percentage of world's population.`
);
console.log(
  `Finland has population about ${percentagePopulationFinland} percentage of world's population.`
);
*/
//LECTURE: Arrow Functions
const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;
percentagePopulationIndia = percentageOfWorld3(populationIndia);
percentagePopulatinChina = percentageOfWorld3(populationChina);
percentagePopulationFinland = percentageOfWorld3(populationFinland);
// INDIA,CHINA,FINLAND
console.log(
  `China has population about ${percentagePopulatinChina} percentage of world's population.`
);
console.log(
  `India has population about ${percentagePopulationIndia} percentage of world's population.`
);
console.log(
  `Finland has population about ${percentagePopulationFinland} percentage of world's population.`
);
// LECTURE: Functions Calling Other Functions
const describePopulation = function (country, population) {
  const calcPopulationPercentage = percentageOfWorld3(population);
  return `${country} has ${population} million population,which is about ${calcPopulationPercentage} % of world's population.`;
};

const describePopulationIndia = describePopulation("India", populationIndia);
const describePopulationChina = describePopulation("China", populationChina);
const describePopulationFinland = describePopulation(
  "Finland",
  populationFinland
);
console.log(describePopulationChina);
console.log(describePopulationIndia);
console.log(describePopulationFinland);

//LECTURE: Introduction to Arrays
const populations = new Array(
  populationChina,
  populationIndia,
  populationFinland,
  populationUSA
);
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld3(populations[0]),
  percentageOfWorld3(populations[1]),
  percentageOfWorld3(populations[2]),
  percentageOfWorld3(populations[3]),
];
console.log(percentages);

// LECTURE: Basic Array Operations (Methods)
const neighboursIndia = ["China", "Pakistan", "Sri Lanka", "Nepal"];
console.log(neighboursIndia.push("Utopia"));
console.log(neighboursIndia);
neighboursIndia.pop();
console.log(neighboursIndia);
// console.log(neighboursIndia.includes("Germany"));
if (!neighboursIndia.includes("Germany")) {
  console.log("Probably not your neighbouring country.");
}

neighboursIndia[neighboursIndia.indexOf("China")] = "Republic of China";
console.log(neighboursIndia);
//LECTURE: Introduction to Objects
const myCountry = {
  country: country,
  capital: capitalIndia,
  language: language,
  continent: continent,
  population: populationIndia,
  neighbours: neighboursIndia,
};
console.log(myCountry);
console.log(
  `${myCountry.country} has 
  ${myCountry.population} 
  million people.It's official language is ${myCountry.language},
  ${[myCountry.neighbours.length]}
  neighbouring countries
  and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
myCountry["population"] -= 2;

console.log(myCountry.population);
console.log(myCountry);
