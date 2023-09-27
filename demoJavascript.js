console.log("Our opening times are between 9 AM and 5 PM");
//checking if current time is between 9 AM and 5 PM
var currentTime = 800;
if (currentTime > 899 && currentTime < 1700)
  console.log("We are currently open!");
else console.log("We are currently closed.");

// Logical && operator
var score = 8;
console.log("Mid-level skills:", score > 0 && score < 10);

// Logical || operator
var timeRemaining = 0;
var energy = 10;
console.log("Game over:", timeRemaining == 0 || energy == 0);

//Modulus operator %
var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

// {let example = "sample text"}
// console.log(example)

var example = "sample text 1";
{
  let example = "sample text 2";
  console.log(example);
}
console.log(example);

// Where do you get your money from
var age = 10;
if (age >= 65) {
  console.log("You get your income from your pension");
} else if ((age < 65, age > 18)) {
  console.log("Each month you get a salary");
} else if (age < 18) {
  console.log("You get an allowance");
} else {
  console.log("The value of the age variable is not numerical");
}

var day = "Sunday";
switch (day) {
  case "Monday":
    console.log("Do something");
    break;
  case "Tuesday":
    console.log("Do something");
    break;
  case "Wednesday":
    console.log("Do something");
    break;
  case "Thursday":
    console.log("Do something");
    break;
  case "Friday":
    console.log("Do something");
    break;
  case "Saturday":
    console.log("Do something");
    break;
  case "Sunday":
    console.log("Rest day");
    break;
  default:
    console.log("There is no such day");
}

// for and while loops
for (var number = 1; number <= 5; number++) {
  console.log(number);
}
console.log("For counting completed!");

for (number = 5; number >= 1; number--) {
  console.log(number);
}
console.log("For countdown finished!");

number = 1;
while (number <= 5) {
  console.log(number);
  number++;
}
console.log("While counting completed!");

number = 5;
while (number >= 1) {
  console.log(number);
  number--;
}
console.log("While countdown finished!");

var year = 2018;
while (year <= 2022) {
  console.log(year);
  year++;
}

for (var i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log("Gold medal");
  } else if (i == 2) {
    console.log("Silver medal");
  } else if (i == 3) {
    console.log("Bronze medal");
  } else console.log(i);
}

for (var i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log("Gold medal");
      break;
    case 2:
      console.log("Silver medal");
      break;
    case 3:
      console.log("Bronze medal");
      break;
    default:
      console.log(i);
  }
}

// Functions, Objects and Arrays
// function addTwoNums(a, b) {
//   var c = a + b;
//   console.log(c);
// }
// addTwoNums(20, 40);

var liverpoolPlayers = [
  "0",
  "Alisson Becker",
  "Joe Gomez",
  "3",
  "Virgil Van Dijk",
  "Ibrahima Konte",
];
console.log(liverpoolPlayers[5]);

function letterFinder(word, match) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log("Found the", match, "at", i);
    } else console.log("---No match found at", i);
  }
}
letterFinder("test", "t");

// Exercise: Defensive programming
function letterFinder(word, match) {
  var condition1 = typeof word == "string" && word.length >= 2;
  var condition2 = typeof match == "string" && match.length == 1;
  if (condition1 && condition2 == true) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] == match) {
        console.log("Found the", match, "at", i);
      } else console.log("---No match found at", i);
    }
  } else console.log("Please pass correct arguments to the function.");
}
letterFinder(20, 10);
letterFinder("cat", "c");

var a380 = {
  engines: 4,
  decks: 2,
};
// console.log(a380)
// console.log(a380.decks)

for (i = 3; i >= 0; i--) {
  if (i == 0) {
    console.log("GO!");
  } else console.log(i);
}
var letters = ["A", "B", "C", "D"];
for (i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

// .concat
var greeting = "Hello".concat(" there.");
if (greeting == "Hello there.") {
  console.log(greeting);
  console.log("General Kenobi.");
}

// Storing clothing inside objects
var clothes = [];
clothes.push("Shoes", "Tie", "Jacket", "Watch", "Shirt");
clothes.pop();
clothes.push("Belt");
console.log(clothes[2]);
var favCar = {};
favCar.color = "Red";
favCar.covertible = false;
console.log(favCar);

// Functions inside objects
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function () {
  console.log("The engine is running");
};
console.log(car);

// Adding two numbers function
function addTwoNums(a, b) {
  try {
    if (typeof a != "number") {
      throw new ReferenceError("the first argument is not a number");
    } else if (typeof b != "number") {
      throw new ReferenceError("the second argument is not a number");
    } else {
      console.log(a + b);
    }
  } catch (err01) {
    console.log("Error!", err01);
  }
}
addTwoNums(5, "5");
console.log("It still works");

// OOP and Classes
class Sports {
  performingSport() {
    console.log("Playing sports 💓");
  }
}
class Football extends Sports {
  performingSport() {
    console.log("Playing Football ⚽️");
  }
}
class Running extends Sports {
  performingSport() {
    console.log("On a run 🏃");
  }
}
class Swimming extends Sports {
  performingSport() {
    console.log("Taking a swim 🏊");
  }
}
var footballMidfield = new Football();
var runningJogging = new Running();

footballMidfield.performingSport();
runningJogging.performingSport();

// Constructors
console.log(new Date());
var powerOf = Math.pow(2, 5);
console.log(powerOf);
