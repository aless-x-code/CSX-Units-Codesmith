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
// sort and return


function addN(arr, n) {
  // ADD CODE HERE

  for (let i = 0; i < arr.length; i++) {
    arr[i] += n;
  }
  return arr;
}

// Uncomment these to check your work!
console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]
