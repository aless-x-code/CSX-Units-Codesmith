/*

code are words that are sent to an application (JS) that then interprets those words as instructions telling it what to do

Thread of execution:
- Parsing line by line, top to bottom (synchronous)
- Single threaded, one thing at a time, not running two function at the same time
- JS never leaves any execution not done
- This is why errors will stop running the whole page

Live Memory:
- Store stuff in memory
- stores functions

Execution context: 
- Thread of execution (going line by line) + Memory (storing stuff)
- We have the global execution context (whole application) 
- We have local context

- We think that when a function is called, we go up the code line and grab it. No, in actuality we go to the live memory and acces it there

Function: 
- wrapping up a code of instruction to be run later, strored in a label, refered later

Execution context encounters a function call:
- function multiplyBy2(n) {
    const result = n*2;
    return result
}
- const output = multiplyBy2(4)

1. function stored in memory = multiplyBy2()
2. memory stores output = evaluated result of multiplyBy2, we don't yet don't what will be stored there
3. execution thread need to solve the problem (single threaded)
    - activated by the argument
    - look into memory multiplyBy2
    - runned with 4
4. Before execution, assign undefined value for time being
5. Run, function level 
    -Local execution context
    = thread of execution + memory
    1. Memory
        n=4 (argument, the actual value give)
        Result=8
        Return output=8 (to the global context) (return is the key work to exit to global) (or exit to the latest execution context)
    2. Thread of execution
        - execrute 4*2



Call stack:
- here is where we store our execution contexts

Call stack
______________
|____________| 
|____________|
|____________|
|____________|
|____________|
|____________|
|____________|
|____________|
|____________|
|____________|

- The bottom stack will always be "global"
- encounter function, add on top "multiplyBy2(4)" (technically called "push")
- return, "multiplyBy2(4)" call removed (technically called "pop")

- and so on with each call 
- stack overflow:  the call stack pointer exceeds the stack bound

*/

//_______________________________________________________
// write a function

function addTwo(n) {
  return n + 2;
}

console.log(typeof addTwo); // "function"
console.log(addTwo(10));

// console: 12

//_______________________________________________________
// return last letter of a string

function lastLetter(word) {
  return word[word.length - 1];
}

// Uncomment the lines below to test your code
console.log(lastLetter("hello")); //=> "o"
console.log(lastLetter("goodbye!")); //=> "!"
console.log(lastLetter("ZeltoiD")); //=> "D"
console.log(lastLetter("I love Javascript")); //=> "t"

//_______________________________________________________
// Passing arguments

// execution thread (line by line)
// memory stored
const x = 3;

function isX1(num) {
  const x = 5; // local
  return num === x; // local reference
}

function isX2(num) {
  return num === x; // global reference
}

const one = isX1(5);
const two = isX2(3);

console.log(one); // should log: true
console.log(two); // should log: true

// console: true, true

//_______________________________________________________
// Invoking functions

// Execution enviorment =  global
//Exectution thread (line by line, not leaving anything undone) / Memory

let calls = ""; // memory = [calls:" "]

function jerry(str) {
  // not called, stored in memory
  return "Jerry" + kramer(); // run function, added to call stack: return (exit to global) => mememory update [calls="Jerry" + ("undefined(kramer())")] // added to stack, fun function
}

function george(str) {
  return "George" + elaine();
}

function elaine(str) {
  return "Elaine";
}

function kramer(str) {
  return "Kramer" + george();
}

calls = jerry(calls); // update memory [calls="undefined"] => fun function
console.log(calls); // console 'JerryKramerGeorgeElaine' // console.log(calls) <= memory

//_______________________________________________________
// makePlans based on condition

let friendsAvailable = true;

function makePlans(name) {
  return callFriend(friendsAvailable, name); // invoking callFriend(given friendsAvailable, its name)
}

function callFriend(bool, name) {
  if (bool == true) {
    return "Plans made with " + name + " this weekend"; // if friend is available, retunr string
  } else {
    // if friend not available, return string
    return "Everyone is busy this weekend";
  }
}

console.log(makePlans("Mary")); // console: "Plans made with Mary this weekend'
friendsAvailable = false;
console.log(makePlans("James")); // console: "Everyone is busy this weekend."

//_______________________________________________________
// console log the contents of the function

function add20(num) {
  return num + 20;
}

// CREATE YOUR CONSOLE.LOG BELOW

console.log(add20);
//function add20 (num){ return num + 20 }

//________________________________________________________
// sort and return

// return remainder => largeNum % smallNum

function getRemainder(num1, num2) {
  let step = [num1, num2];
  step.sort((a, b) => (a === b ? 0 : a > b ? 1 : -1));
  // step = // [small, big]
  return step[1] % step[0];
}

// sorting function
step.sort((a, b) => (a === b ? 0 : a > b ? 1 : -1));

//________________________________________________________
// forEach loop

function droids(arr) {
  let result = "";
  arr.forEach((item) =>
    item == "Droids" ? (result = "Found Droids!") : (result = "no")
  );

  return result;
}

const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"];
const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"];
console.log(droids(starWars)); //  log: "Found Droids!"
console.log(droids(thrones)); // log: "These are not the droids you're looking for."

//________________________________________________________
// return the each element of the array summed with the n

function addN(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += n;
    // return arr // if you returned at this point, the function will add arr[0]+1 and immeditaly exit
  }
  return arr; // return at this point, allows for loop to iterate through each element, then exit once completed
}

// Uncomment these to check your work!
console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]

//________________________________________________________
// add all array elements

function getTheSum(arr) {
  // ADD CODE HERE
  let arrTot = 0; // intialize at 0

  for (let i = 0; i < arr.length; i++) {
    arrTot += arr[i]; // add each iteration to 0
  }

  return arrTot; // after all runned, exit/return
}

console.log(getTheSum([3, 6, 9])); // expected log 18
console.log(getTheSum([10, 11, 12])); // expected log 33

//________________________________________________________
// multiply all arguments by each other

function multiplyAll() {
  let multiplication = arguments[0]; // initialize multiplication at argument[0], not 0, 0*any number is 0

  // we access arguments with keyword "arguments"
  // iterate thru arguments, initiated at index 1, since default is index 0
  for (let i = 1; i < arguments.length; i++) {
    // multiplication equals multiplication*argument[i]
    multiplication *= arguments[i];
  }

  // after iteration fully done, we exit
  return multiplication;
}

console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)); // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)); // should log: 375

//________________________________________________________
// sum corresponsding elemnts of array

function mergingElements(array1, array2) {
  // ADD CODE HERE

  let sum = []; // set array

  for (let i = 0; i < array1.length; i++) {
    // operate index 0 and index 0, and then push to new array => repeat
    sum.push(array1[i] + array2[i]);
  }
  // complete iteration, then exit/return
  return sum;
}

// Uncomment these to check your work!
console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]

//________________________________________________________
// given 2 arrays, return a new one based on conditions

function mergingTripletsAndQuints(array1, array2) {
  // ADD CODE HERE

  // return new array, replacing numbers in array1 if divisible by 3 or 5
  // number should be replaced with (itself + corresponding index of array2)
  // [1, 2, 3, 4, 5][1, 1, 1, 1, 1] == [1, 2, 4, 6]

  // empty array
  let merge = [];
  // iterate thru array1
  for (let i = 0; i < array1.length; i++) {
    // if element divisible by 3 or 5
    if ((array1[i] % 3 == 0) | (array1[i] % 5 === 0)) {
      // push that element + array2 at same index
      merge.push(array1[i] + array2[i]);
      // if nothing applies, just push it to array
    } else {
      merge.push(array1[i]);
    }
  }

  return merge;
}

// Uncomment these to check your work!
console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]

//________________________________________________________
// countdown + reaction

function imAboutToExplodeWithExcitement(n) {
  // ADD CODE HERE

  // write a while loop that countdowns from n
  let countdown = [];
  while (n > 0) {
    n -= 1;
    // when countdown reaches 5, print 'Oh wow, I can't handle the anticipation!'
    if (n == 5) {
      countdown.push(n, "Oh wow, I can't handle the anticipation!");
    } // when countdown reaches 3, print 'I'm about to explode with excitement!'
    else if (n == 3) {
      countdown.push(n, "I'm about to explode with excitement!");
    } // when countdown finishes, print 'That was kind of a let down'
    else if (n == 0) {
      countdown.push("That was kind of a let down");
    } else {
      countdown.push(n);
    }
  }

  return countdown;
}

// Uncomment the line below to check your work!
console.log(imAboutToExplodeWithExcitement(10)); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'

//________________________________________________________
// given random number, find which argument is closest

function closestToTheMark(player1, player2) {
  // random number
  const theMark = Math.floor(Math.random() * 100);
  console.log(`If theMark is ${theMark}...`);

  console.log(Math.abs(theMark - player1));
  console.log(Math.abs(theMark - player2));

  //  if (distance between player1 and theMark) is lower (than distance of player2 and the Mark), then player1 is closest (p.n. Math.abs = absolute value, no negatives)
  if (Math.abs(player1 - theMark) < Math.abs(player2 - theMark)) {
    return "Player 1 is closest";
  } // otherwise, player2 is closest
  else {
    return "Player 2 is closest";
  }
}

// Uncomment the line below to check your work!
console.log(closestToTheMark(25, 75));

////////////////////////////////////////////////////////////////////////////
//// adding all the weirdstuff
////////////////////////////////////////////////////////////////////////////

function addingAllTheWeirdStuff(array1, array2) {
  // sum of the odd numbers of Array2
  let oddSumArray2 = 0;
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 != 0) {
      oddSumArray2 += array2[i];
    }
  }

  // sum of the even numbers of Array2
  let evenSumArray2 = 0;
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 == 0) {
      evenSumArray2 += array2[i];
    }
  }

  for (let i = 0; i < array1.length; i++) {
    // if array1 element under 10, add oddSumArray2
    if (array1[i] < 10) {
      array1[i] += oddSumArray2;
      // if array1 element over 10, add evenSumArray2
    } else {
      array1[i] += evenSumArray2;
    }
  }

  // if any array2 element is over 20...
  let detectOver20 = false;
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] > 20) {
      detectOver20 = true;
    }
  }
  // add +1 to each element in array1
  if (detectOver20 == true) {
    for (let i = 0; i < array1.length; i++) {
      array1[i] += 1;
    }
  }
  return array1;
}

// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]

////////////////////////////////////////////////////////////////////////////
/////
////////////////////////////////////////////////////////////////////////////
