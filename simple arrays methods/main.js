"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: "Premium",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: "Premium",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: "Standard",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: "Basic",
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

////////////// BANKIST APP /////////////////
const displayMovments = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (move, i) {
    const type = move > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${move}</div>
    </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
//displayMovments(account1.movements);
//console.log(containerMovements.innerHTML);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, value) => acc + value, 0);
  labelBalance.textContent = `${acc.balance}  USD`;
};
//calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}$`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}$`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}$`;
};
//calcDisplaySummary(account1.movements);

const creatUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name.at(0))
      .join("");
  });
};
creatUsername(accounts);
console.log(accounts);
//for (const value of username) {
//  const values = value.replace(
//    value.slice(0, 1),
//    value.slice(0, 1).toUpperCase(),
//  );
//  console.log(values);
//}

const updateUI = function (acc) {
  //display movements
  displayMovments(acc.movements);

  //display balance
  calcDisplayBalance(acc);

  //display summary
  calcDisplaySummary(acc);
};

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciever = accounts.find(
    (acc) => acc.username === inputTransferTo.value,
  );
  inputTransferAmount.value = inputTransferTo.value = "";
  //console.log(amount, reciever);

  if (
    amount > 0 &&
    reciever &&
    currentAccount.balance >= amount &&
    reciever?.username !== currentAccount.username
  ) {
    //doing transfer
    currentAccount.movements.push(-amount);
    reciever.movements.push(amount);

    //update UI
    updateUI(currentAccount);
  }
});

/////////////////////////////////////////////////
// LECTURES
/////////////////////////////////////////////////

///////// SLICE //////////
// slice takes values from the main one and create a new array. we have start and end too just like in strings. NO MUTATION
let arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2)); //starts from -2 to slice
console.log(arr.slice(2, -1)); //start from 2 and slice out -1
console.log(arr.slice()); //creates a shallow copy just like spread operator.

///////// SPLICE //////////
//splice is similar to slice but it MUTATES the array
console.log(arr.splice(2)); // deletion mutation occurs here.
console.log(arr);

///////// REVERSE /////////
const arr2 = ["r", "e", "h", "t", "a", "f"];
console.log(arr2.reverse()); //can also cause MUTATION
console.log(arr2); //mutated

//////// CONCAT /////////
const letters = arr.concat(arr2); //joining arr and arr2. NO MUTATION
console.log(letters);
console.log([...arr, ...arr2]); //remember similar pattern

//////// JOIN ///////////
console.log(letters.join(""));

//ETC PUSH, POP, UNSHIFT, INDEXOF, INCLUDES ETC.

///////// AT /////////
const arrT = [23, 79, 10];
console.log(arrT.at(1)); //similar to arrT[1]

console.log(Number(arrT.slice(-1).join(""))); //too complex
console.log(arrT[arrT.length - 1]); //old ways
console.log(arrT.slice(-1)[0]); //good
console.log(arrT.at(-1)); //better and neat

//bonus-- at method also works on strings

/////////////// FOREACH LOOP ////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [index, movement] of movements.entries()) {
  //entries to get index and values
  if (movement > 0) {
    console.log(`movement ${index + 1}: you deposited ${movement}`);
  } else {
    console.log(`movement ${index + 1}: you withdrew ${Math.abs(movement)}`); //math.abs removes the - sign
  }
}

console.log(`-----------FOREACH--------------`);

//forEach is a higher order function that requires a callback like others
movements.forEach(function (movement, index) {
  //here value first before index and array
  if (movement > 0) {
    console.log(`movement ${index + 1}: you deposited ${movement}`);
  } else {
    console.log(`movement ${index + 1}: you withdrew ${Math.abs(movement)}`); //math.abs removes the - sign
  }
});

///////////////// FOREACH WITH MAPS AND SETS ////////////////
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
//console.log(currencies);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
//console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//CODING CHALLENGE #1
const checkDogs = function (dogJulia, dogKate) {
  const dogsJuliaCopy = dogJulia.slice();

  dogsJuliaCopy.splice(0, 1);
  dogsJuliaCopy.splice(-2);

  const dogs = dogsJuliaCopy.concat(dogKate);
  console.log(dogs);

  dogs.forEach(function (value, index) {
    if (value >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult and is ${value} years old`,
      );
    } else {
      console.log(`Dog number ${index + 1} is still a puppy`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 5, 8, 3]);

///////////////////// DATA TRANSFORMATION: MAP,,, FILTER,,, REDUCE ////////////////////

////////////// MAP ///////////// ~ Similar to forEach loop but it creates a branch new array.

const euroToUsd = 1.1;

const movementUSD = movements.map((move) => move * euroToUsd);
console.log(movementUSD);
//console.log(movements);

const mapping = movements.map((move, i, arr) => {
  if (move > 0) {
    return `movement ${i + 1}: you deposited ${move}`;
  } else {
    return `movement ${i + 1}: you withdrew ${Math.abs(move)}`; //math.abs removes the - sign
  }
});
console.log(mapping);

///////////// FILTER //////////// ~ it returns a new array containing the array elements that passed a specified test condition.
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const withdraws = movements.filter((movie) => movie < 0);
console.log(withdraws);

///////////// REDUCE ///////////// ~ used to reduce all array elements down to one single value (e.g. adding all elements together).. it needs an accumulator.
const balance = movements.reduce(function (acc, value, index, array) {
  return acc + value;
}, 0); //the first parameter is called an accumulator
console.log(balance);

//Maximum value
const max = movements.reduce(
  (acc, value) => (acc > value ? acc : value),
  movements[0],
);
console.log(max);

//CODING CHALLENGE #2 - 161
const calcAverageHumanAge = function (ages) {
  const dogAgeInHumanAge = ages.map((dog) =>
    dog <= 2 ? dog * 2 : 16 + dog * 4,
  );
  console.log(dogAgeInHumanAge);

  const agesExclusion = dogAgeInHumanAge.filter((dog) => dog >= 18);
  console.log(agesExclusion);

  const average = agesExclusion.reduce(
    (acc, value, i, arr) => acc + value / arr.length,
    0,
  );
  console.log(average);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

//Magic of chaining method
const calcAverageHumanAge2 = (ages) =>
  ages
    .map((dog, index) => (dog <= 2 ? dog * 2 : 16 + dog * 4))
    .filter((dog) => dog >= 18)
    .reduce((acc, value, i, arr) => acc + value / arr.length, 0);
const avg1 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1);

const interest = movements
  .filter((mov) => mov > 0)
  .map((deposit) => (deposit * 1.2) / 100)
  .filter((int, i, arr) => {
    return int >= 1;
  })
  .reduce((acc, int) => acc + int, 0);
labelSumInterest.textContent = `${interest}$`;
//labelDisplaySummary(account1.movements);

///////////// FIND METHOD /////////////// Like the filter method, it returns a boolean but returns only the first element of the array that matches the condition as a number while filter returns all values in new array that passes the condition.
const firstWithdrawal = movements.find((move) => move < 0);
console.log(movements);
console.log(firstWithdrawal);

//other use cases ~ getting a specific acc
console.log(accounts);
const account = accounts.find((acc) => acc.owner === "Sarah Smith");
console.log(account);

for (const acc of accounts) {
  if (acc.owner === "Jessica Davis") {
    console.log(acc);
  }
}

// BANKIST LOGIN
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  //supposed to prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value,
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`;

    containerApp.style.opacity = 100;
    //containerApp.classList.remove("app");

    //clear inputField
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    //updateUI
    updateUI(currentAccount);
  }
});

////////////// FINDINDEX METHOD ////////////////
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username,
    );

    //delete account
    accounts.splice(index, 1);

    //hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

////////////// FINDLAST AND FINDLASTINDEX METHOD////////////////

const lastWithdrawal = movements.findLast((mov) => mov < 0);
console.log(lastWithdrawal); //findlast starts from the last

const lastestLargeMovement = movements.findLastIndex(
  (mov) => Math.abs(mov) > 1000,
);
console.log(lastestLargeMovement);
console.log(
  `Your latest large movement was ${movements.length - lastestLargeMovement} moments ago`,
);

///////////// SOME AND EVERY METHODS /////////////////
const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits); //similar to includes but this doesn't need any condition

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    //add movement
    currentAccount.movements.push(amount);

    //update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

//every--- only returns true if element passes the condition
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));

//////////////// FLAT AND FLATMAP METHOD ////////////////////
const arring = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arring.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat().flat()); //2 deep
console.log(arrDeep.flat(2)); //2 deep

const accountsMovements = accounts.map((acc) => acc.movements);
console.log(accountsMovements);

const allMovements = accountsMovements.flat();
console.log(allMovements);

const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

const overalBalance2 = accounts
  .flatMap((acc) => acc.movements) //you can use flatmap for both map and flat but it can only go 1 deep
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

//////////// CODING CHALLENGE ////////////////

////////////// sorting arrays ////////////////
const owners = ["Jonas", "Martha", "Elizabeth", "Zeus"];
console.log(owners.sort()); //it rearranges it alphabetically but mutates the array

//console.log(movements.sort());
console.log(movements);
// return < 0, keep order (a,b)
// return > 0   switch order (b,a)

//ascending order
movements.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
});
console.log(movements);

//simple step
movements.sort((a, b) => a - b); //it means if A is greater than b, then it will return a positive number but if A is less than B, It will return a negative number.
console.log(movements);

//Bonus : if you have a string and a number in the array, sort is not advised.

////////////////////bankist sort //////

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovments(currentAccount.movements, !sorted);
  sorted = !sorted;
});

///////////////// ARRAY GROUPING ~ OBJECT.GROUPBY //////////////////  this is not like other methods
const groupedMovements = Object.groupBy(movements, (movement) =>
  movement > 0 ? "Deposit" : "Withdrawal",
);
console.log(groupedMovements);

const groupedByActivity = Object.groupBy(accounts, (acc) => {
  const movementCount = acc.movements.length;

  if (movementCount >= 8) return "Very active";
  if (movementCount >= 4) return "Active";
  if (movementCount >= 1) return "Moderate";
  return "Inactive";
});
console.log(groupedByActivity);

///bankist////

const groupedAccounts = Object.groupBy(accounts, (acc) => acc.type);
console.log(groupedAccounts);

////////////////// more ways of creating and filling arrays ////////////////

/////// empty arrays //////
const x = new Array(8);
console.log(x);

///////////// fill method ////////////// its similar to slice method but it fills an array and mutates the array ---- .fill(numToFill, start, end)
x.fill(1);
x.fill(2, 2, 5);
console.log(x);

///////////// ARRAY.FORM FUNCTION /////////////// this is a method of creating array without using new Array
const arrayFunction = Array.from({ length: 9 }, (_, i) => i + 1);
console.log(arrayFunction);

// bankist movements cont'd
labelBalance.addEventListener("click", function (e) {
  e.preventDefault();
  const movementUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("€", "")),
  );

  console.log(movementUI);
});

///////////////// NON-DESTRUCTIVE ALTERNATIVES: TOREVERSED, TOSORTED, TOSPLICED /////////////////
console.log(movements);
const reversed = movements.toReversed(); //toreversed allows us to keep the original array without mutation while reversing.
console.log(reversed);
console.log(movements);

///////////// WITH ////////// when you want to replace a value in array but don't want to mutate the original

const newMovements = movements.with(1, 300); ///index, value
console.log(newMovements);
console.log(movements);

///////////// PRACTICE EXERCISE /////////////
// 1- sum of deposits
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(bankDepositSum);

//2 - how many deposits that are atleast 1000
const numDeposits = accounts
  .flatMap((acc) => acc.movements)
  //.filter((mov) => mov >= 1000).length;  //it works
  .reduce((acc, cur) => (cur >= 1000 ? ++acc : acc), 0);
console.log(numDeposits);

//3 - create a new object with deposits and withdrawal
const { Deposits, withdrawal } = accounts
  .flatMap((mov) => mov.movements)
  .reduce(
    (acc, cur) => {
      //  cur > 0 ? (acc.Deposits += cur) : (acc.withdrawal += cur);
      //  return acc;
      acc[cur > 0 ? "Deposits" : "withdrawal"] += cur;
      return acc;
    },
    { Deposits: 0, withdrawal: 0 },
  );
console.log(Deposits, withdrawal);

// uppercase
const convertTitleCase = function (title) {
  const firstWords = (first) => first.at(0).toUpperCase() + first.slice(1);

  const exceptions = ["this", "is", "a", "an", "but", "to", "not"];

  const caprisun = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : firstWords(word)))
    .join(" ");
  return firstWords(caprisun);
};

console.log(convertTitleCase("This is a nice title"));
console.log(convertTitleCase("This is a LONG title but not too long"));
console.log(
  convertTitleCase("make THIS words to align Right and wEll structureD"),
);
