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
console.log("Counting completed!");

for (var number = 5; number >= 1; number--) {
  console.log(number);
}
console.log("Countdown finished!");

