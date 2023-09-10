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
