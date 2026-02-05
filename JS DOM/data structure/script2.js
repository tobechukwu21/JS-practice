"use strict";
//
//
// ======== SETS ======== A set is a data structure that stores unique values only(value appear once only)
const emptySet = new Set();
const numbers = new Set([1, 2, 3, 4, 4]); //duplicate was ignored.
console.log(emptySet, numbers);

//bonus- sets displays like an object and uses SameValueZero comparison e.g. 1 and 1 = same, '1' and 1= different, {} and {} = different memory reference
const s = new Set();
s.add({});
s.add({});

console.log(s);

//.ADD() in set- if value exists, nothing happens and return no error else add it.
//numbers.add(2);
//numbers.add(5);

// CHAINING IS POSSIBLE BUT LIMITED
numbers.add(2).add(9);
console.log(numbers);

//.HAS()
console.log(numbers.has(20));

//.DELETE()
numbers.delete(4);
console.log(numbers); //4 was deleted and then numbers was logged to see the new sets.
console.log(numbers.delete(1)); //1 was deleted and so js returned true

//.CLEAR()
numbers.clear();
console.log(numbers);

//.SIZE - equivalent to array.length
console.log(numbers.size);

//LOOPING THROUGH A SET- sets are iterable
const loopSet = new Set(["tree", "house", "church"]);

//1.0 FOR- OF LOOP
for (let value of loopSet) console.log(value);

//1.1 FOR- EACH LOOP
loopSet.forEach((value) => {
  console.log(value);
});

//ARRAYS - SETS,,,,,, SETS - ARRAYS ,,,,,,
const arrs = ["tochukwu", "anthony", 25];
const arrToSet = new Set(arrs);
console.log(arrToSet);

const newArr = [...arrToSet];
console.log(newArr);

// To know the size of the array
console.log(new Set(newArr).size);

//SETS NEW METHODS
const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);
const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

//2.0 INTERSECTION
const commonFoods = mexicanFoods.intersection(italianFoods);
console.log(commonFoods); //in sets, order doesn't matter except in DIFFERENCE
console.log([...commonFoods]); //into an array
console.log(...commonFoods); //just spread

// 2.1 UNION
const italianMexican = italianFoods.union(mexicanFoods);
console.log(italianMexican); // remember no duplicates
console.log([...italianFoods, ...mexicanFoods]); //duplicates included

// 2.2 DIFFERNCE  --- here order matters
const uniqueItalian = italianFoods.difference(mexicanFoods);
console.log(uniqueItalian); //for italianFood- only the unique ones
const uniqueMexician = mexicanFoods.difference(italianFoods);
console.log(uniqueMexician);

// 2.3 SYMMETRIC-DIFFERENCE  -- only the unique ones in both of them
const uniqueItalianMexicanFood = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianMexicanFood);

// 2.4- IS-SUBSET-OF, IS-SUPER-SET-OF, IS-DISJOINT-FROM
console.log(italianFoods.isDisjointFrom(mexicanFoods)); //isdisjointfrom checks whether italianfood has a value that is not on mexicanfood

//bONUS- Sets do not give index number, only the values
//uses of sets- validation, logged-in-users, unique IDs, seen/visited items, selected options, lookup tables etc

//
//
// ====== MAPS FUNDAMENTALS ======== A data structure used to store key-value pairs where the key is any data type. its designed for frequent lookups, insertion and deletion.
const map = new Map();

//3.0 .SET - adds or updates the map
map.set("country", "Nigeria"); //key, value
map.set("clothes", 30);
console.log(map);

//3.1 .GET(key) - for retriving values of a particular key
console.log(map.get("country"));

//3.2 .HAS(KEY)
console.log(map.has("country"));

//3.3 .DELETE(KEY) - deletes a key
//3.4 .CLEAR() - Clears everything
//3.5 .SIZE -
console.log(map.size);

//3.6 MAPS ARE EASY TO ITERATE
// LOOPING OBJECTS  AND OBJECT.ENTRIES VS LOOPING MAPS AND OBJECT.ENTRIES
//A
const b = { school: "NAU", state: "Anambra" };
const keys = Object.entries(b);
for (let [k, c] of keys) {
  console.log(k, c);
}

//B
const bs = new Map();
bs.set("sex", "male");
bs.set("program", "@12pm");

for (let [key, value] of bs) {
  console.log(`${key}: ${value}`);
}

//CONVERTING OBJECTS INTO MAPS
const bMaps = new Map(Object.entries(b));
console.log(bMaps);

//Exercise
const queston = new Map([
  ["question", "What is the best programming language in the world ?"],
  [1, "C++"],
  [2, "Java"],
  [3, "Javascript"],
  [4, "Python"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Wrong ❌"],
]);

console.log(queston.get("question"));

for (let [keys, values] of queston) {
  if (typeof keys === "number") console.log(`${keys}: ${values}`);
}
//const answer = Number(prompt("Your answer"));

//long process - if/else statement
//if (answer === queston.get("correct")) {
//  console.log(queston.get(true));
//} else if (answer !== queston.get("correct")) {
//  console.log(queston.get(false));
//}

//using the power of .get
//console.log(queston.get(queston.get("correct") === answer));

//CONVERTING MAPS INTO ARRAY -- just like in sets
const newArrMaps = [...queston];
console.log(newArrMaps);

//bonus - you can equally use .entries,.values and .keys in maps because it gives data output just like objects
console.log(queston.entries());
console.log(...queston.keys()); //remember spread works on maps cause they are iterable
console.log(queston.values());

//3.7 CHAINING IN MAPS
bs.set("categories", ["italian", "pizzeria", "vegetarian", "organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, `we are open`)
  .set(false, "we are closed");
console.log(bs);
console.log(bs.get(true));

const time = 21;
console.log(bs.get(time > bs.get("open") && time < bs.get("close"))); //first check for true or false before getting it from bs

const mapsArr = [2, 7];
bs.set(mapsArr, "Trouble");
console.log(bs);

bs.set(document.querySelector("h1"), "Heading");
console.log(bs);

//bonus - maps do what objects could not as long as we need data e.g. objects takes only strings or symbols as keys while maps takes any, maps are easily iterable, maps are used for large data.

//
// ======== CODING CHALLENGE #1 ========
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "♋ Substitution"],
  [47, "⚽ GOAL"],
  [61, "♋ Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥 Red card"],
  [70, "♋ Substitution"],
  [72, "♋ Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 Yellow card"],
]);

//1- create an array 'events' of the different gameEvents that happened (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);

//2- After the game, it was found that the yellow card from mins 64 was unfair, so remove this event from the game events log and create an array 'deleted' for the new gameEvents.
const deleted = [...gameEvents.values(gameEvents.delete(64))];
console.log(deleted);

//3- Print the following string to the console: 'An event happened, on average, every 9 minutes' (keep in mind that a game has 90 minutes but include the extra mins (92))
let fullTime = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${fullTime / gameEvents.size} minutes` // 90mins/10 events (new gameEvents)
);

//4- Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 mins) of the game, like this : [FIRST HALF] 17: ⚽ GOAL
let timing = 45;
for (const [time, events] of gameEvents) {
  //no need for .entries, this is a map
  if (time <= timing) console.log(`[FIRST HALF] ${time}: ${events}`);
  else console.log(`[SECOND HALF] ${time}: ${events}`);
}

//
//
// ========   WORKING WITH STRINGS ======== just like in arrays
const airline = "TAP Air Portugal";
const plane = "A3d0";

console.log(Number(plane[1]));
console.log(plane[0]);

console.log("28CS"[2]);
console.log("28CS".length - 1);

// STRINGS METHODS - Also similar to arrays
//A INDEXOF
console.log(plane.indexOf("d"));

console.log(airline.lastIndexOf("r")); // r in portugal not in air is the last index of r

console.log(airline.indexOf("Portugal")); //8 indexes are in portugal.. case sensitive

//B SLICE METHOD - slice is used to extract a portion of a string and return it as a new string without modifying the original string. it works using indexes

//1.0 starting at index() and goes to the end automatically
console.log(airline.slice(5)); //the space counts

//1.1 startIndex, endIndex
console.log(airline.slice(8, 12)); //endIndex - stops before 12.. also 4 characters printed (8-12)
console.log(airline.slice(0, 3));

//1.2 negative indexes (starts from the end (-1))
console.log(airline.slice(-5));

//bonus startIndex and endIndex can still take in (+,-) and (-,-) indexes
console.log("Diva is awesome".slice(5, -8));

//MORE EXAMPLES WITH SLICE
const email = "tochukwufab@gmail.com"; //get tochukwufab(user) only without hard-coding the indexes
const sliced = email.slice(email.indexOf("t"), email.indexOf("@"));
console.log(sliced);

const file = "photo.png"; //get png only
console.log(file.slice(file.lastIndexOf("p"))); //or
console.log(file.slice(-3));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const seats = seat.slice(-1);
  if (seats === "B" || seats === "E") console.log(`You got the middle seat`);
  else console.log(`You got lucky`);
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

// C- CASING
//1.0 TOLOWERCASE() AND TOUPPERCASE()
console.log(email.toLowerCase());
console.log(email.toUpperCase());

//1.1 Capitalizing
const capitalized = email[0].toUpperCase() + email.slice(1, email.indexOf("@"));
console.log(capitalized);

// comparing
const email1 = "hello@jonas.io";
const loginEmail = " hello@Jonas.io ";

console.log(email1 === loginEmail);

//D. TRIM - removes spaces, TRIMSTART AND TRIMEND
const trimmedEmail = loginEmail.toLowerCase().trim();
console.log(trimmedEmail);
console.log(email1 === trimmedEmail);

//E. REPLACE(ONE-TO-REPLACE, REPLACE-WITH)
const priceNG = "288,97#";
const priceUS = priceNG.replace("#", "$").replace(",", ".");
console.log(priceUS);

const announcement = `All passengers come to boarding door 23. Boarding door 23!`;
console.log(announcement.replaceAll("door", "gate"));

//F BOOLEANS - STARTSWITH,ENDSWITH, INCLUDES
const planeA = "A320neo";
console.log(planeA.includes("A32"));
console.log(planeA.startsWith("A3"));
console.log(planeA.endsWith("neo"));

//Exercise
const checkBaggage = function (items) {
  const itemsInPlane = items.toLowerCase();
  if (itemsInPlane.includes("knife") || itemsInPlane.includes("gun")) {
    console.log(`Cannot board plane due to illegal items found!`);
  } else console.log(`Welcome on board!`);
};
checkBaggage(`i have a laptop, some Food and a pocket Knife`);
checkBaggage(`socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);

//G SPLIT - converts strings to arrays and start splitting from area(s) specified.
console.log("a+very+nice+string".split("+"));
console.log("Tochukwu Anthony".split(" "));

const [firtname, secondname] = "Tochukwu Anthony".split(" ");
console.log(firtname);

//H - JOIN - opposite of split...
const newName = ["mr.", firtname, secondname.toUpperCase()];
console.log(newName.join(" "));

//Exercise - create a function that receives multiple(2) strings and capitalize them like this.(a)Jessica Ann Smith Davis, (b)Tochukwu Anthony.               (tough exercise)

const capitalizeName = function (name) {
  const names = name.split(" ");
  //return console.log(names);
  const namesToUpper = [];
  for (let n of names) {
    //namesToUpper.push(n[0].toUpperCase() + n.slice(1));
    namesToUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesToUpper.join(" "));
};
capitalizeName("jessica ann smith davis");
capitalizeName("tochukwu anthony");

/* bonus- i. turns name(strings) into an array
  ii. turns each value of the array into a loop (n)-now all the values.
  iii. convert first letters of each value into uppercase and add the rest or replace only the first letters of the values.
  iv. create an empty array and push the names array into it
  v. log the new array into the console outside the loop and remove the array
*/

// I -PADDING (length-of-string, value-to-add) --- PADSTART(l,v) AND PADEND(l,v)
console.log("john".padStart(10, "#"));
console.log("mr. johnson".padEnd(12, "!"));

//Exercise -----without hard-coding (length of string) print $Mr Johnson!
const Johnson = "mr.Johnson";
console.log(
  Johnson.replace("m", "M")
    .replace(".", " ")
    .padEnd(Johnson.length + 1, "!")
    .padStart(Johnson.length + 2, "$")
);

//Exercise 2
const maskCreditCard = function (numbers) {
  const str = String(numbers);
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(23488853567590));
console.log(maskCreditCard(85274727));
console.log(maskCreditCard(23488853567590847592914647));

//J - REPEAT(no.of-time-to-repeat)
const message1 = "Bad weather.. All departues Delayed...";
console.log(message1.repeat(2));

const planesInLine = function (n) {
  console.log(`there are ${n} planes in line ${"✈".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(2);

//bonus - to get more string methods... browse just one in mozilla or any site, you should see others

//
// ========= CODING CHALLENGE #2 ==========
/* Write a program that receives a list of vriable names written in underscore_case and convert them to camelCase.

the input will come from a textarea inserted into the DOM (See code below), and conversion will happpen when the button is pressed.

THIS TEST DATA (passed to textarea)
underscore_case            ✅
  first_name               ✅✅
same_variable              ✅✅✅
    calculate_AGE          ✅✅✅✅
delayed_departure          ✅✅✅✅✅

SHOULD PRODUCE THIS OUTPUT (5 seperate console.log outputs)
underscoreCase    
firstName
someVariable
calculateAge
delayedDeparture

HINT 1: Remember which character defines a new line in the textarea 💨💨
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working.
 */

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const text = document.querySelector("textarea").value;

//solution and end of data structure
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  const newRows = [];
  for (const [i, n] of rows.entries()) {
    const [first, second] = n.trim().toLowerCase().split("_");
    const output = `${first} ${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)} ${"✅".repeat(i + 1)}`);
  }
});

/* 
underscore_case
first_name
same_variable
calculate_AGE
delayed_departure
*/

const flight =
  "_Delayed_Departure;fa093766109;txl12133758440;11:25 +_Arrival;br0943384722;fao93766109;11:45 +_Delayed_Arrival;hel7439299980;fao93766109;12:05 +_Departure;fao93766109;lis2323639855;12:30";
//console.log(flight.split("+"));

const destination = (FromTo) => FromTo.slice(0, 3).toUpperCase();

for (const n of flight.split("+")) {
  const [type, from, to, time] = n.split(";");
  const output = `${type.startsWith("_Delayed") ? "⭕" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${destination(from)} to ${destination(to)}  ( ${time.replace(
    ":",
    "h"
  )})`;
  console.log(output.padStart(36));
}
