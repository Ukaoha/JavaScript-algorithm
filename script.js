"use strict";
// JavaScript function to check if an input is a string
const str = function (input) {
  if (Object.prototype.toString.call(input) === "[object String]") return true;
  else return false;
};
console.log(str("boy"));
console.log(str(12));

//  using typeof
const myStr = function (input) {
  if (typeof input === "string") return true;
  else return false;
};
console.log(myStr("zoba"));
console.log(myStr(16));

// Write a javaScript function to check if a string is blank or not
const strLent = function (val) {
  if (val.length === 0) {
    console.log("the input is empty");
  } else {
    console.log("the input is full");
  }
};

console.log(strLent("boy"));
console.log(strLent(""));

// write a javaScript function to spilt a string into an array of words
const spiltStr = function (input) {
  return input.split();
};
console.log(spiltStr("booy  girl"));

//Fix capitalization in names
const capitalNames = function (input) {
  const lowerCase = input.toLowerCase();
  return lowerCase[0].toUpperCase() + lowerCase.slice(1);
};
console.log(capitalNames("ukaoha chizoba"));

// compare emails
const emailComaprison = function (email, loginEmail) {
  const convertLowercase = loginEmail.toLowerCase().trim();
  if (convertLowercase === email) {
    return convertLowercase;
  } else {
    return "email does not match";
  }
};
console.log(emailComaprison("ukaoha@gmail.com", "ukaoha@gmail.com"));

/* 
Write a program that receives a list of variable names written in
 underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM,
 and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

// answrs
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
document.querySelector("button").addEventListener("click", function () {
  const textInput = document.querySelector("textarea").value;
  const rows = textInput.split("\n");
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
    //   console.log(textInput);
    //   console.log(rows);
  }
});
*/
// write a javascript funtion that reverses a string
const reverseStr = function (str) {
  const spiltStr = str.split("").reverse("").join("");
  // const spiltStr = str.split('')
  return spiltStr;
};
console.log(reverseStr("grace"));

// reverse an interger
const reverseInteger = function (num) {
  const nums = num.toString().split("").reverse("").join("");
  return Math.sign(num) * parseInt(nums);
};
console.log(reverseInteger(1233455));

/*Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: "what is your favorite programming language?",
  options: ["0: javaScript ", "1: python ", " 2: C++", " 3: Rust "],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const prompWind = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(write an option number)`
      )
    );
    console.log(prompWind);
    typeof prompWind === "number" &&
      prompWind <= this.answers.length &&
      this.answers[prompWind]++;
    // console.log(this.answers);
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`poll results are ${this.answers.join(",")}`);
    }
  },
};

document
  .querySelector(".btn")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
// poll.registerNewAnswer();

// learning closures
const bookings = function () {
  let passengerBooking = 0;
  return function () {
    passengerBooking++;
    console.log(`let passenger booking ${passengerBooking}`);
  };
};
const establishClosures = bookings();
establishClosures();
establishClosures();
// console.dir(establishClosures)

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

// Array methods
//  slice method : it doesnt mutate / change , the end isn't included ,
// returns selected elements in an array as a new array
const namesOfGirls = ['chizoba', 'grace','chioma','kamso'];
console.log(namesOfGirls.slice(1,3));

// splice changes the array by removing or adding 
const nameOfBoys = ['obi','igwe','Francis'];
console.log(nameOfBoys.splice(1,3));

// reverse reverses an array

const nameOfpeople = ['obi','igwe','Francis'];
console.log(nameOfpeople.reverse());









