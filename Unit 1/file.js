/* 

Modern web architecture is comprised of three key ingredients: HTML, CSS, and JavaScript.

Let’s say someone named Brandon visited our website and entered his name into the an HTML text field. With the power of JavaScript we can read his entry and create interactive content that is unique to him! Now, whenever Brandon visits our website again we will be able to display a greeting, such as, ‘Welcome back, Brandon!’

JS allows us to dynamically manipulate html and css elements 


*/

//________________________________________________________________
// variable countdown

let countDown = 10; // number

for (let i = 1; i <= 10; i++) {
  // let i=1, while i<=10, i++
  countDown -= 1; // substract 1 from number, i=2, substract 1 from number, i=3, execute, i=10, execute 1-1=0, i=11, stop executing
  console.log(i); // 1, 2, 3, ... 11
  console.log(countDown); // 10, 9, 8, ... 0
  // the only function running is number - 1
}

console.log(countDown); // -> should print 0;

//________________________________________________________________
// create greet and console log it

const synonyms = ["fantastic", "wonderful", "great"];
const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array.
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
for (let i = 0; i < synonyms.length; i++) {
  greetings.push("Have a " + synonyms[i] + " day!"); // iterating through synonyms, and pushing it with a greeting to a new array
}
console.log(greetings);

// 2.
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE

for (let i = 0; i < greetings.length; i++) {
  console.log(greetings[i]); // console.logging greetings (0-2)
}

//________________________________________________________________
// print bio

const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];

const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

for (let i = 0; i < 3; i++) {
  // iterating through 0 1 2 indexes
  bios.push(
    "My name is " +
      firstNames[i] +
      " " +
      lastNames[i] +
      " and I am from " +
      places[i]
  ); // bio. pushing string w/ firstName, lastName, place indexes
}

console.log(bios);

//________________________________________________________________
// increase element by 2

const increaseByTwo = [1, 2, 3, 4, 5];
// ADD CODE HERE

for (let i = 0; i < increaseByTwo.length; i++) {
  increaseByTwo[i] += 2; // grab index and index=index+2
}

// Uncomment the line below to check your work!
console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];

//________________________________________________________________
// add 2 to count until it is 8

let count = 2;

while (count <= 6) {
  count += 2;
  // 4, 6, 8
}

console.log(count);

//________________________________________________________________
// while loop

let addThis = 0;
let sum = 0;

while (addThis < 10) {
  // while addThis is less than 10
  sum += addThis; // sum = sum+addThis
  addThis += 1; // addThis = addThis+1
}

// Uncomment the line below to check your work!
console.log(sum);

//________________________________________________________________
// if statement

const num = 40;
let final;

if (num > 100) {
  final = null;
} else {
  final = num * 2; // 80
}

// Log final to the console below to check your work
console.log(final);
// 80

//________________________________________________________________
// fizzbuss challenge

const fb = [];

for (let i = 1; i <= 16; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    // if divisible by 3 and 5, push string
    fb.push("fizzbuzz");
  } else if (i % 5 == 0) {
    fb.push("buzz");
  } else if (i % 3 == 0) {
    fb.push("fizz");
  } else {
    fb.push(i);
  }
}

// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]

console.log(fb);

//________________________________________________________________
// multiple by 10 wiuth condition

const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
// ADD CODE HERE

for (let i = 0; i < timesTenIfOverFive.length; i++) {
  if (timesTenIfOverFive[i] >= 5) {
    timesTenIfOverFive[i] *= 10;
  }
}

console.log(timesTenIfOverFive);

//________________________________________________________________
// object condition and modify

const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18,
};

let found = 1;

for (const key in checkObj) {
  // iterating through keys in object
  if (key == "foundNum") {
    // if key == string
    checkObj[key] = found; // that key == found variable
  }
}

console.log(checkObj["foundNum"]);
// 1

//________________________________________________________________
// push object key with condition

const checkObj2 = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18,
};

const objToArray = [];
// ADD CODE HERE

for (const key in checkObj) {
  // iterate through object keys
  if (checkObj2[key] >= 2) {
    // if key is greate or equal to 2
    objToArray.push(checkObj2[key]); // push into new array
  }
}

console.log(objToArray);

//________________________________________________________________
// iterate through values and return based on condition

const checkObj3 = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18,
};

const objToArray2 = Object.values(checkObj); // Object.values(object) = return object values

let divBy6 = false;

for (let i = 0; i < objToArray.length; i++) {
  if (objToArray[i] % 6 == 0) {
    divBy6 = true;
  }
}

console.log(divBy6);

//________________________________________________________________
// iteration + customed text

const nestedArr = [];

for (let i = 0; i < 5; i++) {
  nestedArr.push([].concat("loop" + i, i)); // push an array with "loop(i)", i
}

console.log(nestedArr);
// [['loop0', 0], ['loop1', 1], ['loop2', 2], ['loop3', 3], ['loop4', 4]]

//________________________________________________________________
// for loop, adding properties to objects

const possibleIterable = [4, 3, 9, 6, 23]; // array
const divByThree = {}; // empty object

for (let i = 0; i < possibleIterable.length; i++) {
  // iterate through array
  if (possibleIterable[i] % 3 == 0) {
    // if array item is divisible by 3
    divByThree[possibleIterable[i]] = i; // create object pair = number: index
  }
}

console.log(divByThree);
//  { 3: 1, 6: 3, 9: 2 }

//________________________________________________________________
// type of for...in iteration

const sumMe = {
  hello: "there",
  you: 8,
  are: 7,
  almost: "10",
  done: "!",
};

let total = 0;

for (const key in sumMe) {
  // iterate through keys
  if (typeof sumMe[key] === "number") {
    // if number => (typeof x = x) = T/F
    total += sumMe[key]; // add it to total
  }
}

//console.log = 15

//________________________________________________________________
// 


