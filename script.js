// variable naming convention
/*let country = "Nigeria";
let continent = "Africa";
let population = "1 million";

console.log(country);
console.log(continent);
console.log(population);

let javaScript = true;
console.log(javaScript);

console.log(typeof javaScript);
console.log(typeof 24);
console.log(typeof "tobe");

javaScript = "no";
console.log(typeof javaScript);

let year;
console.log(year);
console.log(typeof year);

year = 2025;
console.log(year);

console.log(typeof null);*/

// const birthYear = 2001;
// console.log(birthYear);

// var color = "blue";
// color = "red";
// console.log(color);

// mathematical operators
// const now = 2025;
// const ageTobe = now - 2001;
// const ageCj = now - 1999;
// console.log(ageTobe, ageCj);

// console.log(ageTobe * 2, ageCj / 2, 2 ** 3);

// const firstName = "tobe";
// const lastName = "anthony";
// console.log(firstName + " " + lastName);

// assignment operators
// let x = 10 + 5;
// x += 10; //x= x+10
// x *= 4; //x= x*4
// x++; // x= x+1
// x--; //x = x-1
// console.log(x);

// comparison operators for boolean values(true/false)
// console.log(ageTobe > ageCj); //<, >, >=, <= ==, !=, ===, !==
// console.log(ageCj >= 18);
// console.log(ageTobe !== ageCj);

//js was able to do the math operator before the comparison operator but why? because they operate in order..

// console.log(now - 2001 > now - 1999);

// operators precendence(order) and direction(l-r or r-l)
/*let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const now = 2025;
const ageCj = now - 2000;
const ageTobe = now - 2001;
const averageAge = (ageCj + ageTobe) / 2;

console.log(averageAge);
*/

/*
//    coding challenge #1
// const massMark = 78;
// const massJohn = 92;
// const heightMark = 1.69;
// const heightJohn = 1.95;

// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;

// const markHigerBmi = bmiMark > bmiJohn;
// console.log(bmiMark, bmiJohn, markHigerBmi);
*/

/*
// template literal
const firstName = "tobe";
const job = "student";
const birthYear = 2001;
const year = 2025;

// without template literal
const tobe =
  "i'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(tobe);

// with template strings/literal
const tobeNew = `i'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(tobeNew);

// you can also use backticks for strings instead of quotation mark
const surNames = `Ewulum, Nnaji`;
console.log(surNames);

// multiple lines
console.log(
  "string with \n\
multiple \n\
lines"
);

// creating multi line strings with template literal
console.log(`string
multiple
lines`);


// decision- if/else control structure (block codes that are only accesible in the if unless defined outside)
const ageSarah = 15;

if (ageSarah >= 18) {
  console.log(`sarah can start driving licence 🚗`);
} else {
  const yearsLeft = 18 - ageSarah;
  console.log(`sarah is too young, wait another ${yearsLeft} years :`);
}

const normalYear = 2001;

let century;
if (normalYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);


// coding challenge #2
const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

if (bmiMark > bmiJohn) {
  console.log(`mark's BMI is higher than john's !`);
} else {
  console.log(`john's BMI is higher than mark's !`);
}

// you can log this instead into the if condition
const highestBMI = `john's BMI (${bmiJohn}) is higher than mark's BMI (${bmiMark})!`;
console.log(highestBMI);
*/

/*
// strings to numbers and vice versa (Datatype conversion)
const inputYear = "2001";
// console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(String(2034));

// type coercion- 24 is a number that js coercised into a string using the + operator but in other maths operators, its the opposite.
console.log("i'm " + 24 + " years old");
console.log("23" - "10" + " years old");
console.log("23" * "10");
console.log("23" / "10");

// bonus.. js can only use + operator to turn stuffs into string if the values directly before/after the + operator is a string..
let n = 2 + 3 + "5";
console.log(n);

// falsey values don't need to be converted to boolean- 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("tobe"));
console.log(Boolean({}));
console.log(Boolean(""));

// eg  0
let money = 0;
if (money) {
  console.log(`Don't spend it all !`);
} else {
  console.log(`you should get a job !`);
}

// double equal performs coerce while triple does not
const age = 18;
if (age === 18) console.log("you should rest !");

console.log("14" == 14);

// prompt always returns a string
// let favourite = prompt("what's your favourite color?");
// console.log(typeof favourite);

// if (favourite === "purple") {
//   console.log("color is amazing");
// } else {
//   console.log("nice choice !");
// }

// let num = Number(prompt("what's your favourite number?"));
// console.log(typeof num);

// if (num === 7) {
//   console.log("number is amazing");
// } else if (num === 10) {
//   console.log(`you're a 10 !`);
// } else {
//   console.log("nice choice !");
// }

// if (num !== 4) console.log("why not 4");

// boolean logic operators- AND, OR, & NOT
const hasDriversLicense = true;
const hasGoodVision = false;
const isTired = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasGoodVision);

if ((hasDriversLicense && !hasGoodVision) || isTired) {
  console.log("sarah can drive");
} else {
  console.log(`sarah should'nt drive`);
}
*/

// coding challenge #3
// let averageDolphins = (96 + 108 + 89) / 3;
// let averageKoalas = (88 + 91 + 110) / 3;
// let minimumScore = 100;

// console.log(averageDolphins, averageKoalas);

// if (averageDolphins > averageKoalas) {
//   console.log("Dolphins are greater 😁");
// } else if (averageDolphins === averageKoalas) {
//   console.log("they are not the same");
// } else {
//   console.log("koalas are greater 😎");
// }

// let averageDolphins = (97 + 112 + 81) / 3;
// let averageKoalas = (109 + 95 + 86) / 3;

// console.log(averageDolphins, averageKoalas);

// if (averageDolphins > averageKoalas && averageDolphins >= 100) {
//   console.log("dolphins wins");
// } else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
//   console.log("koalas also wins");
// } else if (
//   averageDolphins === averageKoalas &&
//   averageDolphins >= 100 &&
//   averageKoalas >= 100
// ) {
//   console.log("both wins");
// } else {
//   console.log("both team lose😩");
// }

// switch statement- you can use else if with logic operators if you don't want the switch statement style

const day = "wednesday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("plan course structure");
    console.log(" go to coding meetup");
    break;
  case "tuesday":
    console.log("prepare a meal ");
    break;
  case "wednesday":
    console.log("go to market");
    break;
  case " thursday":
  case " friday":
    console.log("write codes");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy life");
    break;
  default:
    console.log("not a valid day !");
}

// expression- a code that produces values 2, 2+3, true
// statements do not produce values by themselves if, else etc
if (23 > 10) {
  const str = "23 is large";
}

// condition/ternary operator replaces if/ else statement also like switch statement
const stressLevel = 20;
// stressLevel >= 18 //the condition
//   ? console.log("i like to drink") // if
//   : console.log("i like to smoke"); // else

// shortcut
const drink = stressLevel >= 18 ? "you can drink wine 🍷" : "not up to age !";
console.log(drink);

// without condition operator
let drink2;
if (stressLevel >= 18) {
  drink2 = "you can drink win 🍷";
} else {
  drink2 = "not up to age ! ";
}
console.log(drink2);

// bonus- you can use condition short cut in a template literal (``)
console.log(`i like to drink ${stressLevel >= 18 ? "wine 🍷" : "water 💧 !"}`);

// coding challenge #4
const bill = 273;
const tip =
  (0.15 * (bill >= 50) && 0.15 * (bill <= 300)) || 0.2 * (bill > 300)
    ? "steven should tip"
    : "steven should'nt tip";
console.log(tip);

console.log(
  `the bill was ${bill}, the tip was ${0.15 * bill}, and the total value was ${
    bill + 0.15 * bill
  }  `
);
