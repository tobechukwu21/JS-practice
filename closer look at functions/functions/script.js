"use strict";
/* DEFAULT PARAMETERS allow you to asiign fallback values to function parameters when no argument or undefined is provided.

bonus- falsy values like null, 0, '', false do not trigger defaults and they are evaluated from L to R.
 */
// Basic syntax
function greet(name = "Guest", age = 25) {
  console.log(name, age);
}
greet();
greet("Tobechukwu", 18);
greet(undefined);
greet(null);

const createBooking = function (
  flightNum,
  numPassenger = 20,
  price = numPassenger * 30
) {
  //numPassenger = numPassenger || 20; //20 as default value- odd ways of doing it.
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
};
createBooking("LH123", undefined, undefined); //undefined is used to skip reassignment or first parameter count.

// first parameter counts
function multiply(a, b = a * 5) {
  return b;
}
console.log(multiply(5));

//How passing arguments works vs reference
const flight = "LH234";
const Tobe = {
  name: "Tobechukwu Anthony",
  passport: 34758302758,
};
const checkIn = function (flightNum, passenger) {
  flightNum = "LH455";
  passenger.name = "Mr " + passenger.name;
};
checkIn(flight, Tobe);
console.log(flight, Tobe);

//first class and high order functions --- js treats functions as first class citizens  and they are simply values and another type of object. They also have methods just like arrays and objects.

/*High - order functions ----(1) a function that receives another function as argument, that returns a new function or both.  e.g. addEventListener

const great = () => console.log("Hello world");
document.querySelector("buy").addEventListener("click", 
great);  //great is the call back function

(2) functions that returns new function
function count (){
let counter = 0
return function ({
  counter ++
}) 
}
*/
//generic functions
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase(); //removes all the spaces
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`); //name of the call back function
};
transformer("Javascript is fun", upperFirstWord);
transformer("Javascript is fun", oneWord);

const high5 = function () {
  console.log("👋");
};
document.body.addEventListener("click", high5);

//function returning a function

//const forum = function (Greeting) {
//  return function (name) {
//    console.log(`${Greeting} ${name}`);
//  };
//};
//const hey = forum("Hey");  //the generic fn
//hey("Steven");  //the returned functions
//hey("Peter");

//more clean
const forum = (Greeting) => (name) => console.log(`${Greeting} ${name}`);
forum("Hey")("Steven");

//call method
const persons1 = { name: "Michael" };
const persons2 = { name: "John" };
const persons3 = { name: "Robins" };

function names(Greeting) {
  return `${Greeting}  ${this.name}`;
}
console.log(names.call(persons2, "Hello"));

//e,g 2
const lufthansa = {
  airline: "Lufthansa",
  iatacode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a sit on ${this.airline} ${this.iatacode}${flightNum}`
    );
    lufthansa.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
    console.log(this.bookings);
  },
};
lufthansa.book(239, "Peter Quil");

const eurowing = {
  // this object will be called to the book method.
  airline: "Eurowings",
  iatacode: "EW",
  bookings: [],
};

const book = lufthansa.book; //first bring the book method of the lufthansa object to a regular function.

book.call(eurowing, 24, "Addams will"); //call the function and use the call key....(the choosen first and then what to add(flightNum and name-- just like in the book paramter))
console.log(eurowing);

const swiss = {
  airline: "Swiss Air Lines",
  iatacode: "LX",
  bookings: [],
};

book.call(swiss, 682, "Mary poppins");

//bonus- you must use the same property name and the same length. CALL keyword allows us to assign the 'this' keyword to any object... ORDER matters a lot in function.

//Apply method
const flightMode = [590, "George poppins"];
book.apply(swiss, flightMode);

//using the call method
book.call(swiss, ...flightMode); //similar to book.call(swiss, 590, "George poppins");

//Bind method- it returns a new function where the 'this' keyword is bound
const bookEW = book.bind(eurowing);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(25, "Steph"); //just like in call key...

const bookEW23 = book.bind(eurowing, 23); //this new regular function binds the 'this' key to eurowing object and then set the flightNum to 23 for any function calls (this is called "partial applications")
bookEW23("Arya");
bookEW23("Doughlas");

//e.g 2 - with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
//lufthansa.buyPlane();
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//partial application
//const addTax = (rate, value) => value + value * rate;
//console.log(addTax(0.1, 200));

//const addVAT = addTax.bind(null, 0.23);
//console.log(addVAT(12));

const addTax = (rate) => (value) => value + value * rate;
const addVat2 = addTax(0.23);
console.log(addVat2(100));
console.log(addVat2(44));

//CODING CHALLENGE #1
/* A pool has a question, an array of options from which people can choose, and an array with the number of replies for each options stored in object below.

1.Create a method called 'registerNewAnswer' on the 'poll' object. This method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected options, the prompt should look like this:
    What is your favourite programming language?
    0: Javascript
    1: Python
    2: Rust
    3: C++
      (Write option number)

  1.2 Based on the input number, update the answers arrays, for example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 would'nt make sense right?)

2. Call this method whenever the user clicks the 'Answer poll' button

3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, 'using console.log(). This should be the default option. if type is string, display a string like 'poll results are 13, 2, 4, 1'.

4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: use the 'displayResults' method to display the 2 arrays  in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! so what should the this key look like in this situation?

BONUS TEST DATA 1: [5, 2,3 ]
BONUS TEST DATA 1: [1, 5, 3, 9, 6, 1]
 */

//const poll = {
//  question: "What is your favourite programming language?",
//  options: [" 0: Javascript", "1: Python", "2: Rust", "3: C++"],
//  //this generates [0,0,0,0]
//  answers: new Array((4), fill(0))
//};

//1
const poll = {
  question: "What is your favourite programming language?",
  options: [" 0: Javascript", "1: Python", "2: Rust", "3: C++"],

  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write options number)`
      )
    );
    console.log(answer);
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
    //console.log(this.answers);
    this.displayResults("string"); //type now string
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(`${this.answers}`);
    } else console.log(`pool results are ${this.answers.join(",")}`);
  },
};

console.log(poll.answers);

//2 Call this method whenever the user clicks the 'Answer poll' button
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");

//
// ========== IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
/* IIFE- you define a fn, call it immediately and do not use it later.... its a function expression that is executed immediately at the point where it is defined.
 */
//Basic syntax () --- this forces js to treat the fn as an expression NOT declaration and also used for invoking the fn.

(function () {})();

(function (name) {
  console.log(`Hello ${name}`);
})("Anthony");

//Bonus - IIFE prevents name collisions, helps contain code so it not accessed outside(scope isolation)

//BLOCK SCOPE REPLACES MOST IIFE
{
  const secret = 456;
  console.log(secret);
}

//
//========== closures =========== a closure helps a fn remember all the variables that exists at the function parents
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
console.dir(booker);

//e.g 2
let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

const w = function () {
  const b = 20;

  f = function () {
    console.log(b * 2);
  };
};

g();
f();

//re-assigning f function
w();
f();

//eg.3
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`There are 3 groups each with ${perGroup}`);
  }, wait * 1000);

  console.log(`will start boarding in ${wait}`);
};

boardPassengers(180, 2);

//exercise - Take IIFE below and at the end of the functions, attach an event listener that changes the color of the selected h1 element('header') to blue, each time the BODY element is clicked.  do not select the h1 element again!

//EXPLAIN HOW IT WORKED

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  //answer
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
