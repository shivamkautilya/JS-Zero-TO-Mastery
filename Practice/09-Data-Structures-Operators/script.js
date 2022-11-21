"use strict";

// Data needed for a later efirstercise
const flights =
  "_Delayed_Departure;fao93766109;tfirstl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekDays[3]]: {
    //you can put expression instead of property name.
    open: 12,
    close: 22,
  },
  [weekDays[5]]: {
    open: 11,
    close: 23,
  },
  [weekDays[6]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Chowmein", "Paneer Chilli", "Chicken 65", "Salad"],
  mainMenu: ["Pizza", "Pasta", "Dosa"],

  order(starterOrder, mainOrder) {
    return [this.starterMenu[starterOrder], this.mainMenu[mainOrder]];
  },
  openingHours,
  // creating function to destructure objects
  orderDelivery(starterOrder, mainOrder, address, time) {
    return console.log(
      `Wohhooo!! Your Order is received.\n${this.starterMenu[starterOrder]} and ${this.mainMenu[mainOrder]} will be delivered at ${address} at ${time}.`
    );
  },
};

//Lecture 113: Optional Chaining (?.)
console.log(restaurant?.name);
console.log(
  restaurant.openingHours?.[[weekDays[3]]] ?? "Poperty doesn't exist."
);
//In Methods
console.log(restaurant.order(0, 0));
//Advice: Always use Nullish Collescing (??) operator while using optional chaining.
//In Array
const users = [
  {
    name: "Shivam",
    age: 16,
  },
  {
    name: "Monu",
    age: 17,
  },
];
console.log(users[0]?.name, users[0]?.age ?? "Doesn't exist.");
console.log(users[9]?.name ?? "Doesn't exist.");
/*
//Lecture 105: The Spread Operator
//Note: All Iterables can use Spread Operator.NOT OBJECT till ES2017
// from ES2018 we can use for objects also.
//make shallow copy of arrays
let mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy, restaurant.mainMenu);
//adding values inside array
let array = [3, 4, 5, 6];
console.log(array);
array = [1, 2, ...array];
console.log(array);
restaurant.mainMenu = [
  ...restaurant.mainMenu,
  "Panner Butter Masala",
  "Chicken Kadhai",
];
console.log(mainMenuCopy, restaurant.mainMenu);
//convert string into letter by letter
const nameMine = "Shivam";
const spellNameMine = [...nameMine];
console.log(...nameMine);
//joining 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
// OBJECTS  (Use less bcz ES2018 and Above required.)
//make shallow copy of object
let restaurantCopy = { ...restaurant }; //smarter way to copy objects but ES2018+ required
restaurantCopy.name = "Videshi Zaika";
restaurantCopy = {
  foundedIn: "2009",
  founder: "Shivam Kautilya",
  ...restaurant,
};
console.log(restaurantCopy, restaurant);
*/
/*
//Lecture 104: Destructuring Objects
const order1 = restaurant.orderDelivery({
  starterOrder: 1,
  mainOrder: 2,
  address: "Lalpur,Ranchi",
  time: "21:00",
});

const { name: restaurantName = "Unable to fetch;\n", openingHours } =
  restaurant;
console.log(
  "Restaurant Name: ",
  restaurantName,
  "\nOpening Time: ",
  openingHours
);
//changing name of object while destructuring objects
let { starterMenu: starters, mainMenu: mainCourse } = restaurant;
console.log(starters, mainCourse);
//mutating variables in objects
let aa = 100;
let cc = 300;
const randomObj = {
  aa: 1,
  bb: 2,
  cc: 3,
};
({ aa, cc } = randomObj);
console.log(aa, cc);
*/
/*
// Lecture 103: Destructuring arrays
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
*/
