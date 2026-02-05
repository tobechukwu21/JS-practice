"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

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
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const combinedMovsDate = acc.movements.map((mov, i) => ({
    movement: mov,
    movementsDates: acc.movementsDates.at(i),
  }));

  console.log(combinedMovsDate);

  if (sort) combinedMovsDate.sort((a, b) => a.movement - b.movement);
  //const movs = sort
  //  ? acc.movements.slice().sort((a, b) => a - b)
  //  : acc.movements;

  combinedMovsDate.forEach(function (obj, i) {
    const { movement, movementsDates } = obj;
    const type = movement > 0 ? "deposit" : "withdrawal";

    const date = new Date(movementsDates);
    //const month = `${date.getMonth() + 1}`.padStart(2, 0);
    //const day = `${date.getUTCDate()}`.padStart(2, 0);
    //const year = date.getFullYear();

    const displayDate = formatMovementDate(date, acc, locale);
    const formattedMov = formatCur(movement, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
          i + 1
        } ${type}</div>
        <div class="movements__date"> ${displayDate} </div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

////////////////////////////////////
//fake login
//currentAccount = account1;
//updateUI(currentAccount);
//containerApp.style.opacity = 100;

//const known = new Date().toDateString();  //it still works
//labelDate.textContent = known;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value,
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    //current date and time
    const known = new Date();
    const month = `${known.getMonth() + 1}`.padStart(2, 0);
    const day = `${known.getUTCDate()}`.padStart(2, 0);
    const year = known.getFullYear();
    const hr = `${known.getHours()}`.padStart(2, 0);
    const mins = `${known.getMinutes()}`.padStart(2, 0);

    labelDate.textContent = `${month}/${day}/${year}, ${hr}:${mins}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value,
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //adding transfer date
    currentAccount.movementsDates.push(new Date());
    receiverAcc.movementsDates.push(new Date());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    //adding loan date
    currentAccount.movementsDates.push(new Date().toDateString());
    receiverAcc.movementsDates.push(new Date().toDateString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username,
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// $$$$$$$$$$ converting string to number without using Number
console.log(+"23");

// $$$$$$$$$$ parsing -----

// $$$$$$$$$$$$ parseInt('stringFirst', numberSystem)  parseIntegers
console.log(Number.parseInt("45rem", 10)); //Binary~ Base 10

// $$$$$$$$$$$$ parsefloat     converts a string into a floating- point number
console.log(Number.parseFloat("2.5px"));
console.log(Number.parseInt("2.5px"));

// $$$$$$$$$$$ isNaN        checks for datatypes that are not numbers
console.log(Number.isNaN(20));
console.log(Number.isNaN("34"));
console.log(Number.isNaN(+"21b"));

// $$$$$$$$$$$$$ isfinite      better way to check whether datatype is a number
console.log(Number.isFinite(34));
console.log(Number.isFinite(0 / 1));

// $$$$$$$$$$$ square root (sqrt)     math.sqrt
console.log(Math.sqrt(225));
console.log(25 ** (1 / 2)); // Exponential

// $$$$$$$$$$$ math.max(maximum value)
console.log(Math.max("3", 56, "32", 1, 12)); //(Math.operator) does coercion but not parsing
console.log(Math.max(2, 3, "34em", 87));

// $$$$$$$$$$$$ math.min
console.log(Math.min(5, 43, 12, 42, 4));

// $$$$$$$$$$$$$ PI
console.log(Math.PI * Number.parseFloat("10px") ** 2);

// $$$$$$$$$$$$$ Random number
console.log(Math.trunc(Math.random() * 6 + 1));

const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);
console.log(randomNum(10, 20));
console.log(randomNum(3, 7));

// $$$$$$$$$$$ ROUNDING INTEGERS
// Math.trunc removes the decimal part and leaves only the interger.
console.log(Math.trunc("3.5"));

console.log(Math.round(3.5)); //round

console.log(Math.ceil(23.5)); //ceil

// math.floor     similar to math.trunc but only the negative values are rounded to the nearest negative integer while in trunc, the negative value goes toward 0 and positive integer
console.log(Math.floor(-5.5));

// $$$$$$$$$$ Rounding decimals
// tofixed ------ (Num).tofixed(toWhatRound)  always returns a string
console.log(+(45.456572).toFixed(3));

// $$$$$$$$$$$ remainder operator (%)    even numbers do not have any remainder
console.log(10 % 4); // 4 * 4 = 8 r 2
console.log(5 % 2); // 2 * 2 = 4 r 1
console.log(8 % 3); // 3 * 2 = 6 r 2
console.log(10 / 4);

// divisible by
const isEven = (n) => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(13));

labelBalance.addEventListener("click", function () {
  document.querySelectorAll(".movements__row").forEach(function (row, index) {
    if (index % 2 === 0) row.style.backgroundColor = "lightBlue";
    if (index % 3 === 0) row.style.backgroundColor = "lightGreen";
  });
});

// $$$$$$$$$$ Numeric  (_)  e.g 34, 000, 000
console.log(45_233);
//Rules when using converting to a number, you cannot use the numeric

// $$$$$$$$$$ BigInt(n)
console.log(Number.MAX_SAFE_INTEGER); //the largest integer number js can take
console.log(2 ** 53 + 20);

console.log(234768834737347922822019126927n);
console.log(BigInt(374748328374662727)); //only use for smaller integers
console.log(34487728282887474723732263647282n * 100000n);

//use case of BigInt
const huge = 47372728323747828296477n;
const smaller = 4002;
console.log(huge * BigInt(smaller));

// type conversion
console.log(20n > 20);
console.log(20n == 20); //remember : == does type coercion while === does not

// divisions
//console.log(20 / 2n);     error
console.log(20n / 2n);
console.log(11n / 3n);

// $$$$$$$$$$$ Dates
const now = new Date();
console.log(now);
console.log(new Date(account1.movementsDates[0]));

// yr, month, day, time(hr, min, secs)
console.log(new Date(2025, 0, 19, 5, 23, 5));

// converting days to millisecs
console.log(new Date(0)); // unix time
console.log(new Date(4 * 24 * 60 * 60 * 1000)); //Timestamp since the unix time

// working with dates
const future = new Date(2025, 0, 19, 5, 23);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getUTCDay()); //weird

console.log(future.toISOString()); /// Iternational standard
console.log(future.toDateString());

const further = new Date();
console.log(further.toDateString());

console.log(further.getTime()); //read vs code definition
console.log(new Date(1770229814283));

// better way to get timestamp
console.log(Date.now());

// setFullYear, setTime etc
future.setFullYear(2026);
console.log(future);

// $$$$$$$$$$$$ Operations with date
const daysPast = (day1, day2) => day2 - day1 / (1000 * 60 * 60 * 24);

const days1 = daysPast(new Date(2026, 2, 5), new Date(2026, 2, 24));
console.log(days1);
