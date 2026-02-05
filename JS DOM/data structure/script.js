"use strict";

//bonus- iterables - arrays, strings, maps, sets

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

//DESTRUCTURING ARRAYS
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //order: function () {
  //  return this.starterMenu;
  //},

  //enhancing method- object literal
  order(firstMeal, secondMeal) {
    return [this.starterMenu[firstMeal], this.mainMenu[secondMeal]];
  },

  //destructuring objects in parameters
  orderDelivery: function ({ time, address, firstMeal, secondMeal }) {
    console.log(
      `order received! ${this.starterMenu[firstMeal]} and ${this.mainMenu[secondMeal]} will be delivered to ${address} at ${time}`
    );
  },

  //enhanced object literal
  openingHours,
};

//
//
//======= destructuring array ==========
let [main, secondary] = restaurant.categories;
console.log(main, secondary);

//swapping array indexes- can't use const for this
[main, secondary] = [secondary, main];
console.log(main, secondary);

//destructuring startermenu
//const [a, , d] = restaurant.order();
//console.log(a, d);
const [a, d] = restaurant.order(1, 0); //indexes- 1, 0
console.log(a, d);

//nested array
const nestedArr = [30, 19, [2, 5]];
const [x, , [i, ii]] = nestedArr;

console.log(x, i, ii);

//unknown array length-default setting
const arrLength = [4, 6, 7];
const [s, b, c, f = 0] = arrLength;
console.log(s, b, c, f);

//
//
//======== DESTRUCTURING OBJECTS ==========
//part-1
const {
  openingHours: {
    thu: { close: closed },
    fri: { open },
  },
} = restaurant;
console.log(closed, open);

//variable mutation
let q = 100;
let g = 34;
const obj = { q: 23, g: 67 };
({ q, g } = obj);
console.log(q, g);

//object as arguments- destructure it in parameter
restaurant.orderDelivery({
  time: "22:30",
  address: ` N0.12 chukwuebuka, street`,
  firstMeal: 1,
  secondMeal: 2,
});

//part-2
const user = {
  name: "john",
  age: 25,
  color: "yellow",
  address: { city: "awka", site: "ifite" },
};

//renaming, destructuring by property name not order/index, adding defaults
const { name: username, color, nationality = "Nigeria", age } = user;
console.log(
  `${username} is ${color} in complexion and he is from ${nationality}`
);

//nested objects
const {
  address: { city: town, site },
} = user;
console.log(site, town);

//
//
//======= SPREAD OPERATOR - iterables (ARRRAYS, STRING, MAPS, SETS), OBJECTS =======
//Arrays breaking
const permanent = ["steve", 23, "student"];
console.log(...permanent);

//arrays copying and adding
const copy = [...permanent, "of NAU"];
console.log(...copy);

//merging arrays with spread operator
const stan = [1, 2];
const ley = [3, 4];
console.log(...stan, ...ley);

//OBJECTS - COPYING, ADDING AND MERGING
const nans = { name: "alex", age: 25 };
const newNans = { ...nans, town: "okija" };
console.log({ ...nans, ...newNans }); //newnans with town property was merged to nans here or you can simply log newnans

//overriding property
const updatedNans = { ...nans, age: 26 };
console.log(updatedNans);

//SPREAD OPERATOR IN FUNCTION
//PASSING ARRAY VALUES AS ARGUMENT
const arrForm = (a, b, c) => a + b + c;
const arr = [2, 4, 8];
console.log(arrForm(...arr));

//SPREAD OPERATORS IN STRINGS
const str = "Tobechukwu";
console.log(...str); //you can turn it into an array

//
//
//======= REST - FOR PACKING MULTIPLE VALUES, ALSO IN DESTRUCTING ========
//you can name it anything aside rest or others but it must be done on the left.
const numbers = [10, 20, 30, 40];
const [, second, ...rest] = numbers;
console.log(second, ...rest);

//rest in objects
const userObj = {
  name: "emeka",
  age: 25,
  role: "admin",
  active: true,
};

const { name, ...others } = userObj;
console.log({ name, ...others });

//rest in functions- functions normally ignore extra parameters when a fixed number of argument is set.
const sum = (...role) => console.log(role);
sum(1, 2, 4, 5);

//eg-2
const add = function (...numbers) {
  let num = 0;
  for (let n = 0; n < numbers.length; n++) {
    num += numbers[n];
  }
  return num;
};
console.log(add(2, 3, 5, 12, 6)); //similiar to number =[2,3,5,12,6]

//eg-3
const orderPizza = function (mainIngredients, ...otherIngredients) {
  console.log(mainIngredients, otherIngredients);
};
orderPizza("fufu", "garri", "semo");

//
//
//=====SHORT CIRCUITING && AND || - remember falsy values, also they can use any data type aside booleans=====

//|| returns the first true value and the last falsy value
const shorty3 = true || "hello world";
const shorty4 = false || "hello world";
const shorty6 = "" || null;
console.log(shorty3, shorty4, shorty6);
console.log("" || undefined || 0 || "rattaliou" || null);

//used for setting default values, conditions etc
const shorty5 = user.name || "guest";
console.log(shorty5);

//opposite of || - returns the first falsy and the last true value
const shorty = true && "hello world";
const shorty2 = false && "hello world";
console.log("rum" && "" && 21 && undefined);
console.log(shorty, shorty2);

//bonus - in OR(||) operand, once one is true, that one will be returned and the rest is ignored or shortcircuited but if all is false, the last one will be returned.  in AND (&&) operand, it will evaluate one by one and once one of dem is falsy, it will be returned and the rest ignored but if all are evaluated and are true, the last one will be returned.

//
//
//======== NULLISH COALESCING OPERATOR (??) -it only rejects NULL AND UNDEFINED but any other falsy value will be treated as a true value=======
let count = 0;
const countResult = count ?? 20;
console.log(countResult);

//
//
//======== CHALLENGE #1 =======
//part-1
const rest1 = {
  name: "Capri",
  //numGuests: 29,
  numGuests: 0,
};
const rest2 = {
  name: "La Pizza",
  owner: "De Lou",
};

//rest2.numGuests = rest2.numGuests || 10;
//rest1.numGuests = rest1.numGuests || 10;

rest1.numGuests ??= 10;
rest2.numGuests ||= 10;
console.log(rest1);
console.log(rest2);

//part-2
const game = {
  team1: "Bayern Munich",
  team2: "Borussia Dortmund",
  players: [
    [
      "Nuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      " Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Now 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1 - create/take (one) player array for each team (variables to use : 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);

//2 -the first player is the keeper and the rest are field players, for team1 create a variable (gk) with the goalkeeper's name and one array (field players) with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3 - create an array (allPlayers) containing all players of both teams
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4- during game, team1 used 3 substitues- create new array (players1Final) containing all the original team1 players plus 'thiago', coutinho, perisic
const players1Final = [...players1, "Thiago", "courtinho", "Perisic"];
console.log(players1Final);

//5- Based on game.odds object, create one variable for each odd (called 'team1', 'draw', and 'team2')
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//6 -using the players (Davies, Muller, Lewandowski, Kimmich) write a function ('printGoals') that receives an arbitray number of the players names (NOT an array), then call the function again with players from game.scored
const printGoals = function (...print) {
  console.log(`${print.length} goals were scored`);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

//7- the team with the lower odd is more likely to win, print to the console which team is more likely to win, WITHOUT using if/else statement or the ternary operator.
const winnerTeam1 = team1 < team2 && `team-1 wins`;
const winnerTeam2 = team1 > team2 && `team-2 wins`;
console.log(winnerTeam1, winnerTeam2);

//
//
//======== LOOPING ARRAYS & STRINGS- THE FOR- OF LOOP ======= it works directly on values not indexes, also for displaying, reading and processing data. clean codes
const numbersArr = [10, 20, "star", 40];
//old ways - n is an indexof not a value
//for (let n = 0; n < numbersArr.length; n++) {
//  console.log(numbersArr[n]);
//}

//new ways with for -of
for (let n of numbersArr) {
  console.log(n);
}

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//for (const items of menu) console.log(items);
for (const items of menu.entries()) console.log(items);
for (const [i, el] of menu.entries()) {
  // .entries creates an array of menu and i is for the index and el is for the menus
  console.log(`${i + 1}: ${el}`);
}

//
//
//======== LOOPING OBJECTS- THE FOR- IN LOOP VS OBJECT.KEY/VALUES/ENTRIES ====== used to iterate object properties and also their values
const loopObj = {
  name: "ujunwa",
  isAdmin: true,
};

for (let prop in loopObj) {
  console.log(prop); //for props/keys
  console.log(loopObj[prop]); //for values
}

//object.key usage
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days: `;

for (let day of properties) {
  console.log(day); //days took the keys of openingHours which was stored in properties variable
  openStr += ` ${day},`;
}
console.log(openStr);

//object.values usage
const valuesObj = Object.values(openingHours);
console.log(valuesObj);

//object.entries - for both keys and values
const entries = Object.entries(openingHours);
console.log(entries);

for (let [day, { open, close }] of entries) {
  //destructure the arrays(entries) and its objects that (x) is taking values from.
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
}

//bonus - using for- in in arrays will give u the index numbers not the values, so its bad

//
//
//======== UNDERSTANDING FOR AND WHILE LOOP =======
//A loop is a controlled structure that repeats a block of codes until a condition is no longer true............

//FOR loop is used when you know the no. of iterations to loop and also looping through indexs especially arrays *** parts of a FOR loop -- (initialization, comdition, update)

//initialization---- let i = 0, i means index..runs only once.
// condition----- if true, run loop (log to the console), else stop loop.
// update ------ runs after each successful loop/iteration and increases or decrease index like (0, 0 + 1, 1+1, 1 + 2) = index 0, 1, 2, 3 until condition is false .

//ARRAY TIP ------ const fruit = ["apple", "banana"];
//console.log(fruit[0]);

//while loop is used when you don't know how many times, the loop should run and also the loop ends when something happens not when a number or index is reached.

//let password = "";
//while (password !== "Web3metrol") {
//  password = prompt("Enter password");
//}

//
//
//======== OPTIONAL CHAINING ?.======== it allows you to safely access properties, methods or array elements of a value that might be null, or undefined without throwing a runtime error.
const userNull = null;
//console.log(user.name);
console.log(userNull?.name); // since user is null or does not exist, ?. stops evaluation and will give undefined

if (user && user.profile && user.profile.email) {
  console.log(user?.profile?.email);
}

const student = [{ name: "jules", email: "tochukwufab@gmail.com" }];
console.log(student?.[1]?.name); //if student exists, check index 1 , if index 1 does not exists, return undefined. name won't be checked at all

console.log(openingHours?.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (let day of days) {
  const open = openingHours[day]?.open ?? "closed";
  console.log(`on ${day}, we open at ${open}`);
}

//for method
console.log(restaurant.order?.(0, 1)) ?? "method does not exist";
//bonus && stops on any falsy value and return it but ?. stops on null or undefined and returns undefined.

//
//
// ======= CODING CHALLENGE #2 =========
//Continue from the previous challenge

//1- LOOP over the game.scored array and print each players name to the console, along with the goal number (e.g. 'Goal 1: LEWANDOWSKI)... bonus: create an object for each player and their number of goals.
const goal = [...game.scored];
console.log(goal);

for (let [numGoal, player] of goal.entries()) {
  //console.log(numGoal, player);
  console.log(`Goal ${numGoal + 1}: ${player}`);
}

//2- Use a loop to calculate the average odd and log it to the console.
let average = 0;
const odd = Object.values(game.odds);
for (let t of odd) {
  average += t / odd.length;
}
console.log(average);

//3- print the 3 odds in a nice way e.g. odd of victory Bayern Munich: 1.33, odd of draw:3.25, odd of victory Borussia Dortmund: 6.5.... get the teams from the game object except for draw.
for (const [teams, odds] of Object.entries(game.odds)) {
  const teamStr = teams === "x" ? "draw" : `victory ${game[teams]}`;
  console.log(`odd of ${teamStr}: ${odds}`);
}
