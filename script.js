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
const namesOfGirls = ["chizoba", "grace", "chioma", "kamso"];
console.log(namesOfGirls.slice(1, 3));

// splice changes the array by removing or adding
const nameOfBoys = ["obi", "igwe", "Francis"];
console.log(nameOfBoys.splice(1, 3));

// reverse reverses an array

const nameOfpeople = ["obi", "igwe", "Francis"];
console.log(nameOfpeople.reverse());

// Looping over arrays
// for loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (let i = 0; i < movements.length; i++) console.log(movements[i]);

// for of
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`you deposited money ${i + 1}: movement${movement}`);
  } else {
    console.log(`you withdrawl money ${i + 1}: movement${Math.abs(movement)}`);
  }
}

// forEach
movements.forEach(function (movement, i, ary) {
  if (movement > 0) {
    console.log(`you moved${i++} : ${Math.abs(movement)}`);
  } else {
    console.log(`do not move${i++} : ${Math.abs(movement)}`);
  }
});
// forEach on maps
const country = new Map([
  ["Nigeria", "naira"],
  ["USA", "Dollars"],
  ["British", "pounds"],
]);
country.forEach(function (value, key, map) {
  console.log(`${key} ${value}`);
});

// forEach on sets
const countrySide = new Set([
  "Nigeria",
  "naira",
  "USA",
  "Dollars",
  "British",
  "pounds",
]);
countrySide.forEach(function (value, _, Set) {
  console.log(`${value} ${_}`);
});

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/

/*const checkDogs = function(dogsJulia,dogsKate) {
  JuliaData.splice(0,5,'dog2','dog3')
console.log(JuliaData);
if(dogsJulia => 3) {
  console.log('Dog is an adult' ); 
} else {
  console.log('dog is a puupy');
}
}
checkDogs();*/

const checkDogs = function (dogsJulia, dogsKate) {
  const juliaDataCorreted = dogsJulia.slice();
  juliaDataCorreted.splice(0, 1);
  juliaDataCorreted.splice(-2);
  console.log(juliaDataCorreted);

  const dogs = juliaDataCorreted.concat(dogsKate);
  console.log(dogs);
  dogs.forEach(function (dogs, i) {
    if (dogs >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dogs} years old`);
    } else {
      console.log(`"Dog number ${i + 1} is still a puppy 🐶"`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// using array methods ': maps,filter and reduce
// map retuns a new array as a result of all operations on orignal array element
const account1 = {
  owner: "chizoba Ukaoha",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
};
const account2 = {
  owner: "Stanly Ibe",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};
const account3 = {
  owner: "Grace Johnson",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};
const account4 = {
  owner: "Aka Favor",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
};
const accounts = [account1, account2, account3, account4];
// filter
const deposit = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposit);

const naira = 500;
const UsdTonaira = movements.map(function (mov) {
  return naira * mov;
});
console.log(UsdTonaira);

const withdrawal = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawal);

console.log(movements);

// reduce method
const balance = movements.reduce(function (accmulator, current) {
  console.log(`iteration ${accmulator}`);

  return accmulator + current;
}, 0);
console.log(balance);

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and 
calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. 
If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old 
(which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(function (age) {
    return age <= 2 ? 2 * age : 16 + age * 4;
  });
  console.log(humanAge);
  const adultdogAge = humanAge.filter(function (age) {
    return age >= 18;
  });
  console.log(adultdogAge);
  const aveHumanAge = adultdogAge.reduce(function (accmulator, age, i, arr) {
    return accmulator + age / arr.length;
  }, 0);
  console.log(aveHumanAge);
  return aveHumanAge;
};
const ave1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const ave2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(ave1, ave2);

// using arrow function
const calcAverageHumanAge2 = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((accumulator, age, i, arr) => accumulator + age / arr.length);
const ave3 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
const ave4 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);
console.log(ave3, ave4);

const displaySummary = function (movements) {
  const income = movements
    .filter(function (mov) {
      return mov > 0;
    })
    .reduce(function (accumulator, mov) {
      return accumulator + mov;
    }, 0);
  console.log(income);
};
displaySummary(account1.movements);

// the find method retrieves onl one element of an array that is true to the condition given
const findMethod = movements.find(function (mov) {
  return mov < 0;
});
console.log(movements);
console.log(findMethod);
console.log(accounts);

const account = accounts.find(function (acc) {
  return acc.owner === "chizoba Ukaoha";
});
console.log(account);

// incluedes()check for equlity
const checkInclude = movements.includes(-130);
console.log(checkInclude);

//some() checks for a condition
const checkSome = movements.some((mov) => mov >= 0);
console.log(checkSome);
//flat method
const flatMethod = [[1, 2, 3, 4], [1, 2, 3, 4, 5], 1, 2, 3];
console.log(flatMethod.flat());

//  A function that returns all the overall balance of all the movements of all the accounts
const accountMovements = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((accumulator, acc) => accumulator + acc, 0);
console.log(accountMovements);
// flatMap() used to go only one level deep

// sorting coverts everthing to string then sorts itself
// descending and ascending order depending on the condition
const owners = movements.sort((a, b) => {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});
console.log(owners);

const sumDeposit = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov >= 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(sumDeposit);

const numDeposit1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);
console.log(numDeposit1000);

const arr = [1, 2, 3, 4, 5, 6, 7];
const x = new Array(7).fill(1);
console.log(x);
arr.fill(23, 2, 6);
console.log(arr);

// use case of objects in reduce methods

const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sum, curr) => {
      sum[curr > 0 ? "deposits" : "withdrawals"] += curr;
      return sum;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

// A function that capitalizes titleCase
const capitalizeTitle = function (title) {
  const exceptions = [
    "a",
    "and",
    "of",
    "be",
    "the",
    "but",
    "or",
    "on",
    "in",
    "with",
  ];
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");

  return capitalize(titleCase);
};
console.log(capitalizeTitle("This is a nice title"));

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to
 the object as a new property. Do NOT create a new array, simply loop over the array.
 Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little.
 HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, 
 and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// dogs.forEach((dog) => (dog.recommendedFood = dog.weight ** 0.75 * 28));
// weight ** 0.75 * 28.
// console.log(dogs);
// 1
const recommendedFood = dogs.forEach(function (dog) {
  return (dog.recFood = `${Math.trunc(dog.weight ** 0.75 * 28)}`);
});
console.log(dogs);
// 2
const SahraDog = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(SahraDog);
console.log(
  `Sarah dog is eating too  ${
    SahraDog.curFood > SahraDog.recFood ? "much" : "little"
  }`
);
// 3
const ownerEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownerEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);

console.log(ownersEatTooLittle);

// 4  "Matilda and Alice and Bob's dogs eat too much!"
console.log(`${ownerEatTooMuch.join(" ,")} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" ,")}dogs eat too little!`);
// 5
const ExactlyFood = dogs.some((dog) => dog.curFood === dog.recFood);
console.log(ExactlyFood);
// 6
// 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
// current > (recommended * 0.90) && current < (recommended * 1.10)
const okays = dogs.some(
  (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
);
console.log(okays);
// 7
const okayFill = dogs.filter(
  (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
);
console.log(okayFill);
//  8
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

/* working with numbers 
javaScript uses floating numbers , base 10 i.e 0-9, base 2 ,0-1 , 64bit for storage 
coversion*/
console.log(Number("23"));
console.log(+"23");

// parsing a string to a number
console.log(Number.parseInt("21px", 10));
console.log(Number.parseFloat("21.4rem"));
console.log(Number.isNaN("234"));
console.log(Number.isNaN(234));
console.log(Number.isNaN(+"234x"));
console.log(Number.isNaN(23 / 0));

// always use isFinite() to check if a value is a number or not
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite("20px"));
console.log(Number.isFinite(20 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.8));

// dealing with Math
// sqare2 and cubib root
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));
// max value and min
console.log(Math.max(1, 2, 3, 45, 6));
console.log(Math.max(1, 2, 3, "45", 6)); //supports cohesion does not support parseInt
console.log(Math.max(1, 2, 3, "45rem", 6));
console.log(Math.min(1, 2, 3, 45, 6));
// raduis of a cicle
console.log(Math.PI * Number.parseFloat("10px") ** 2);
// ramdom numbers
console.log(Math.trunc(Math.random() * 6)) + 1;
const randomInts = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min; //generating random numbers
console.log(randomInts(10, 20));
// rounding integer
console.log(Math.trunc(23.3));
console.log(Math.floor(23.3)); //same with trunc when dealing with positive numbers but not negative
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

console.log(Math.ceil(23.9));
console.log(Math.ceil(23.2));

//rounding decimal
console.log(+(2.8).toFixed(2));
// remainder operator
console.log(8 % 3);
// to check even number
console.log(6 % 2);
const isEven = function (n) {
  return n % 2 === 0;
};
console.log(isEven(8));
console.log(isEven(7));

// numeric seprators
const diameter = 287_460_000_000;
console.log(diameter);
const fee = 15_00;
console.log(fee);

const fees = 1_500;
console.log(fees);

const ok = +"15_000";
console.log(ok);

// working with BigInt
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
//using BigInt you can use any amount of number you want but you cant use bigint with other numbers
console.log(4445896808776655543332244555666666n);
const huge = 4445896808776655543332244555666666n;
const num = 345;
// console.log(huge + num);
console.log(20n === 20);

// Dates and time
// create a date
const now = new Date();
console.log(now);
// parsing through string
console.log(new Date("2022-03-05T22:26:13.007Z"));
console.log(new Date("March 5, 2022"));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(0)); //unix time
console.log(new Date(3 * 24 * 60 * 60 * 1000));

const futures = new Date(2037, 10, 19, 15, 23);
console.log(futures);
console.log(futures.getFullYear());
console.log(futures.getMonth());
console.log(futures.getDate());
console.log(futures.getDay());
console.log(futures.getHours());
console.log(futures.getMinutes());
console.log(futures.getSeconds());
console.log(futures.getMilliseconds());
console.log(futures.toISOString());
console.log(futures.getTime());

// current time stamp
console.log(Date.now());
futures.setFullYear(2050);
console.log(futures);

const calcDaysPassed = (date1, date2) =>
  Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);

// set time out
const ingridiantes = ["olive", "spinach"];
const pizzer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  5000, 
  ...ingridiantes
);
console.log("waiting");
if(ingridiantes.includes('olive')) clearTimeout(pizzer);


setInterval(() => {
  const now = new Date();
  console.log(now);
}, 3000);

// Advanced DOM Manipulation 
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

console.log(document.querySelector('.header'));
console.log(document.getElementById());
console.log(document.getElementsByClassName);
console.log(document.getElementsByTagName);
console.log(document.createElement);


// scrolling an object
  /*window.scrollTo(s1coords.left  + window.pageXOffset, s1coords.top + window.pageYOffset)
  window.scrollTo({
    left: s1coords + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth'*/

// types of events and event handlers
// check mdn javascript events
// Event propagation : Bubbling and capturing

/* intersection observer API 
 allows our code to basically observe changes to the way that a certain target element intersects another element or
 the way it intersects the view port*/ 

//  const observer =  new IntersectionObserver();
//  observer.observe(features)


// Dom Life cycle : right from the momment a page is accessesd untill the user leaves the page 
// DomContentLoaded :fired as soon as the html is completely parsed to the Dom tree 

document.addEventListener('DOMContentedLoaded',function(e) {
  console.log('HTML PARSED AND DOM TREE BUILT', e);
})
// load is parsed as soon as the complete message loads
window.addEventListener('click', function(e) {
  console.log('page fully loaded', e);
})
// Before unload created as soon as a user wants to leave the site 
window.addEventListener('beforeunload', function(e){
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});


