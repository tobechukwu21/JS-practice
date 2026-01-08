"use strict";
/*
// function
function log() {
  console.log("my name is tobe");
}

// invoking functions/re-using
log();

// function declaration
function fruit(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const redJuice = fruit(10, 0);
console.log(redJuice);

// function calcAge1(birthYear) {
//   return 2025 - birthYear;
// }
// const age1 = calcAge1(2001);
// console.log(age1);

// function expression- function as a value
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};

const age2 = calcAge2(2001);
console.log(age2);

// bonus- in function declaration, you can invoke before the function but that won't work in function expression

// arrow function works for one paramter
const calcAge3 = (birthYear) => 2025 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

// but with more than 1 paramters u av to use {} and return
const retire = (birthYear, middleName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${middleName} retires in ${retirement}`;
};

const retired = retire(2001, "Anthony");
console.log(retired);
*/

/*
// function inside function
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruit(apples, oranges) {
  const applePieces = cutFruitPieces(apples); 
  const orangePieces = cutFruitPieces(oranges);

  const juice = `juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
  return juice;
}

console.log(fruit(2, 3));

// example 2
// const calcAge = function (birthYear) {
//   return 2025 - birthYear;
// };

// const yearUntilRetirement = function (birthYear, middleName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${middleName} retires in ${retirement}years`);
//     return retirement;
//   } else {
//     console.log(`${middleName} has already retired`);
//     return -1;
//   }
// };

// console.log(yearUntilRetirement(2001, "Tobenna"));
// console.log(yearUntilRetirement(2000, "Mike"));

// challenge #1
const calcAverage = (a, b, c) => (a + b + c) / 3;
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avDolpins, avKoalas) {
  if (avDolpins >= 2 * avKoalas) {
    console.log(` Dolphins wins (${scoreDolphins} vs ${scoreKoalas})`);
  } else if (avKoalas >= 2 * avDolpins) {
    console.log(` koalas wins (${scoreKoalas} vs ${scoreDolphins})`);
  } else {
    console.log(`No team wins....`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);



// arrays- just like remote repository
// without arrays
const friend1 = `michael`;
const friend2 = `kelvin`;
const friend3 = `john`;

// with arrays
const friends = ["michael", "kelvin", "peter"];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 2]); //[]- to call it out just like git push and friends.length - 3, then 3-1 = 2 (which is peter)

friends[2] = "jayjay"; //[] can also be used to replace values.. array mutation overrides const
console.log(friends);

const firstName = "jonas";
const jonas = new Array(firstName, "veronica", 2025 - 2001, "teacher", friends);
console.log(jonas);
console.log(jonas.length);
console.log(jonas[3]);
console.log(jonas[jonas.length - 1]);

//arrays inside function
const calcAge = function (birthYear) {
  return 2025 - birthYear;
};

const yearsOld = [2001, 2000, 1999, 1998, 1997];
const ages = calcAge(yearsOld[2]);
console.log(ages);

// function inside arrays
const aged = [calcAge(yearsOld[3])];
console.log(aged);

// push array- adds element to the end
const family = ["mabel", "stone", "josh"];
const newLength = family.push("anthony");
console.log(family);
console.log(newLength);

// unshift- adds element to the beginning
family.unshift("solomon");
console.log(family);

// pop- opposite of push
family.pop();
const popped = family.pop();
console.log(popped);
console.log(family);

// shift- opposite of unshift
family.shift();
console.log(family);

// indexof- tells the length nummber
console.log(family.indexOf("mabel"));

// includes(returns Boolean values)- tells whether the element is in the arrays
console.log(family.includes("mabel"));
console.log(family.includes("emeka"));
*/

/*
// challenge #2
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

// console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips, bills);

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(total);


// OBJECTS
// firstName, surname, age etc are called property and always remember the (,)
const objects = {
  firstName: "Tochukwu",
  surName: "Ewulum",
  age: 2025 - 2001,
  job: "programmer",
  friends: [`obi`, `ada`],
};
console.log(objects);

// dot notation - used to get property from objects
console.log(objects.age);

// brackets notation
console.log(objects["age"]);

const nameKey = "Name";
console.log(objects["first" + nameKey]);
console.log(objects["sur" + nameKey]);

const interested = prompt(
  "what do you want to know about tochukwu ? choose between firstname, surname, age, job, and friends"
);
// console.log(objects[interested]);

if (objects[interested]) {
  console.log(objects[interested]);
} else {
  console.log("wrong request !");
}

// dot and bracket- also for adding props and values
objects.location = "Nigeria";
objects["whatsapp"] = "08109164383";
console.log(objects);

// coding challenge
const trial = `${objects.firstName} has ${objects.friends.length} friends, and his best friends is called ${objects.friends[0]}`;
console.log(trial);

// functions to objects

//any function that is attached to an object is called a "method" e.g calcAge
// to use functions inside objects, you must use function expression only so that the function can then pass as a value.
const emeka = {
  birthYear: 1991,
  job: "student",
  hasDriversLicense: true,
  // you can equally use "this" keyword to point to the one calling the method
  // calcAge: function () {
  //   return 2025 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },

  // calcAge: function (birthYear) {
  //   return 2025 - birthYear;
  // },
};

// console.log(emeka.calcAge());

console.log(emeka.age);

// console.log(emeka.calcAge(emeka["birthYear"]));


// coding challenge
const setExample = {
  commonName: "jonas",
  checkAge: 2007,
  occupation: "Teacher",
  hasDriversLicense: true,
  age: function () {
    return 2025 - this.checkAge;
  },

  getSummary: function () {
    return `${this.commonName} is a ${this.age()}-year old ${
      setExample.occupation
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(setExample.getSummary());
// console.log(
//   `${setExample.commonName} is a ${setExample.age()} year old ${
//     setExample.occupation
//   }, and he has a ${setExample.hasDriversLicense} `
// );

// challenge #3
const mark = {
  name: "mark" + " " + "miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  name: "john" + " " + "smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.name}'s bmi (${mark.bmi}) is higher than ${john.name}'s (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.name}'s bmi( ${john.bmi}) is higher than ${mark.name}'s (${mark.bmi})`
  );
}

// bonus : an array is equally an object 
*/

//loop- used to automate repetitive tasks
// console.log("lifting weights repetition 1 🏋️‍♂️");
// console.log("lifting weights repetition 2 🏋️‍♂️");
// console.log("lifting weights repetition 4 🏋️‍♂️");
// console.log("lifting weights repetition 5 🏋️‍♂️");

/*
// for loop- keeps running while condition is true (rep<=5)
 for (let rep = 1; rep <= 5; rep++) {
   console.log(`lifting weights repetition ${rep} 🏋️‍♂️`);
}

// loop through arrays
const foreign = [
  "kenneth",
  2026 - 2000,
  "teacher",
  ["michael", "kelvin", "john"],
  true,
];

// filling from foreign array
const types = [];

for (let i = 0; i < foreign.length; i++) {
  console.log(foreign[i], typeof foreign[i]);

  // types[i] = typeof foreign[i];

  types.push(typeof foreign[i]);
}
console.log(types);


// example 2
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2025 - years[i]);
}
console.log(ages);


// continue statement for loops- perfect for strings
console.log(`---- ONLY STRINGS ----`);
for (let i = 0; i < foreign.length; i++) {
  if (typeof foreign[i] !== "string") continue;

  console.log(foreign[i], typeof foreign[i]);
}

// break statement completely terminate the loop
console.log(`---- BREAK AFTER NUMBER ----`);
for (let i = 0; i < foreign.length; i++) {
  if (typeof foreign[i] === "number") break;

  console.log(foreign[i], typeof foreign[i]);
}
*/

/*
// looping backwards
const foreign = [
  "kenneth",
  2026 - 2000,
  "teacher",
  ["michael", "kelvin", "john"],
  true,
];

for (let i = foreign.length - 1; i >= 0; i--) {
  console.log(foreign[i]);
}

// loop inside a loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`exercise ${exercise}: lifting weight repetition  ${rep} 🤸‍♀️`);
  }
}
*/


// the while loop- it does not really need a counter(let rep =1)
// for (let rep = 1; rep <= 5; rep++) {
//   console.log(`lifting weights repetition ${rep} 🏋️‍♂️`);
// }

/*
let rep = 1;
while (rep <= 5) {
  // console.log(`WHILE: lifting weights repetition ${rep} 🏋️‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`loop is about to end`);
}
*/

// challenge #4
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let q = 0; q < bills.length; q++) {
  const tip = calcTip(bills[q]);
  tips.push(tip);
  total.push(tip + bills[q]);
}

console.log(bills, tips, total);

const calcAverage = function (arr) {
  let sum = 0;
  for (let q = 0; q < arr.length; q++) {
    // sum = sum + arr[q]
    sum += arr[q];
  }
  // console.log(sum);
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(total));
console.log(calcAverage(tips));
