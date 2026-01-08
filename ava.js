/*
// eg 1 function inside function
function cutFruit(pieces) {
  return pieces * 2;
}

function fruit(apple) {
  const totalCut = cutFruit(apple);

  return `i want ${totalCut} apples`;
}

console.log(fruit(1));

// eg 2 function
function outer(x, y) {
  function inner(a, b) {
    const total = a * b + x + y;
    return total;
  }
  return inner(3, 4);
}

console.log(outer(2, 5));

// eg 3 function
let count = 0;
function increment() {
  // count = count + 1;
  count++;
  return count;
}

function counter() {
  const volume = increment();
  return volume;
}
console.log(counter());
console.log(counter());
console.log(counter());

// // eg 4
// function greet(name) {
//   const hours = new Date().getHours();
//   const time =
//     hours < 12
//       ? "Good morning"
//       : hours > 12 < 18
//       ? "Good afternoon"
//       : "Good evening";
//   return `${time}, ${name}`;
// }
// console.log(greet("Tobenna"));

let i = 1;
while (i <= 5) {
  console.log(`hello ${i}`);
  i++;
}

//problem 1.0
//we work for a company building a smart home thermometer, our most recent task is this ; 'given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error

const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//solution
const calTempAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];

  for (i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof temp[i] !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const calc = calTempAmplitude(temperature);
console.log(calc);

//problem 1.1
//the function should now receive 2 arrays of temp
const calTempAmplitudeNew = function (t1, t2) {
  const temp = t1.concat(t2);
  //console.log(temp);
  console.table(temp);

  let max = temp[0];
  let min = temp[0];

  for (i = 0; i < temp.length; ++i) {
    const curTemp = temp[i];
    if (typeof temp[i] !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const calcTemp = calTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(calcTemp);

console.warn(calcTemp);
//console.error(calcTemp);

//problem 2.0
//const temperatureTobe = function () {
//  const obs = {
//    type: "temp",
//    degree: "celsius",
//    value: Number(prompt("whats the temp ?")),
//  };
//  return obs.value + 273;
//};

//console.log(temperatureTobe());

//problem 3.0
//create a function that takes an array and logs a string using the data [17, 21, 23]
const data1 = [17, 21, 23];

const printForest = function (arr) {
  let str = "";
  for (i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days .... `;
  }
  console.log("...." + str);
};

printForest(data1);
*/

//problem 4.0
//let's say you're building a time tracking - application for freelancers, at some point in building this app, you need a function that receives daily work hours for a certain week and returns ;
//1. Total hours worked
//2. Average daily hours
//3. The day with the most hours worked
//4. Number of days worked
//5. Whether the week was full-time (35hrs)

//test data : [7.5, 8, 6.5, 0, 8.5, 4, 0]

function analyseWorkWeek(hours) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // 1. Total hours worked
  const totalHours = hours.reduce((sum, h) => sum + h, 0);

  // 2. Average daily hours (rounded to 1 decimal place)
  const averageDailyHours = Number((totalHours / hours.length).toFixed(1));

  // 3. Day with the most hours worked
  let maxHours = hours[0];
  let maxDayIndex = 0;

  for (let i = 1; i < hours.length; i++) {
    if (hours[i] > maxHours) {
      maxHours = hours[i];
      maxDayIndex = i;
    }
  }

  const mostWorkedDay = days[maxDayIndex];

  // 4. Number of days worked (more than 0 hours)
  const daysWorked = hours.filter((h) => h > 0).length;

  // 5. Full-time week check (35 hours or more)
  const fullTime = totalHours >= 35;

  return {
    totalHours,
    averageDailyHours,
    mostWorkedDay,
    daysWorked,
    fullTime,
  };
}

const week = [7.5, 8, 6.5, 0, 8.5, 4, 0];
console.log(analyseWorkWeek(week));
