"use strict";

// Data needed for a later efirstercise
const flights =
  "_Delayed_Departure;fao93766109;tfirstl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterOrder, mainOrder) {
    return [this.starterMenu[starterOrder], this.mainMenu[mainOrder]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Destructuring arrays
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// //switching variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 1));
// let [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

//nested array destructuring
const nestedArray = [1, 2, 3, [4, 5, 6]];
// console.log(nestedArray);

const [a, , b, [, c, d]] = nestedArray;
console.log(a, b, c, d); //output = 1,3,5,6

//using default values if input is lower than expected values of array
const [p, q, r = "No input"] = [2, 5];
console.log(p, q, r);
