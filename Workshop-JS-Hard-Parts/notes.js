///////////////////////////////////
/// Creating a quiz game
///////////////////////////////////
// with users, scores, function

// oop = it is fine to modify outside values
const user1 = {
  name: "Will",
  score: 3,
  // method = function inside object
  increcement: function () {
    user1.score++;
  },
};

user1.increcement(); // execute function

//__________________________
// creating an object

const user2 = {};
// dot notation to add properties

// update or assign
user2.name = "Alex";
user2.score = 6;
user2.increment = function () {
  user2.score++;
};

//__________________________
// creating an object

const user3 = Object.create(null)

user3.name = "Mike";
user3.score = 1;
user3.increment = function () {
  user3.score++;
};


//__________________________
// DRY =  don't repeat yourself

function userCreator(name, score) {
    const newUser = {};
    newUser.name = name
    newUser.score = score;
    newUser.increment = function() {
        newUser.score++
    }
    return newUser;
}

//__________________________
// prototype chain



// fast track admission code:

// expires tomorrow by 11:59pm
/*

Fast Track Application Codes:
Full-Time Software Engineering Immersive: https://app.codesmith.io/apply/kmwr
Part-Time Software Engineering Immersive: https://app.codesmith.io/apply/9ow2 
CSPrep: https://app.codesmith.io/apply/9g3w

*/


