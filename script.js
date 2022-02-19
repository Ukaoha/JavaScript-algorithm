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
*/

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
