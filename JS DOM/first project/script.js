"use strict";

//console.log((document.querySelector(".number").value = 15));
//console.log(
//  (document.querySelector(".message").textContent = "🎉 Correct Number !")
//);
//console.log((document.querySelector(".guess").value = 23));

//an event is sth that happens on a webpage like clicking, mouse moving, key press etc. they work just like focus in css

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const display = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    //when there is no input
    //document.querySelector(".message").textContent = "🎉No Number";
    display("No Number !");
  } else if (guess === number) {
    //when player wins
    //document.querySelector(".message").textContent = "🎉 Correct Number !";
    display("🎉 Correct Number !");
    document.querySelector(".number").textContent = number;

    //css manipulation
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").style.backgroundColor = "lightblue";

    //highscore changes to score when you win and also when score is higher than highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== number) {
    if (score > 1) {
      //document.querySelector(".message").textContent =
      //  guess > number ? "Number is too high 📈" : "Number is too low 📈";
      display(
        guess > number ? "Number is too high 📈" : "Number is too low 📈"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //document.querySelector(".message").textContent = `you lost the game ❌`;
      display(`you lost the game ❌`);
      document.querySelector(".score").textContent = 0;
    }

    //}else if (guess > number) {
    //  //when guess is too high
    //  if (score > 1) {
    //    document.querySelector(".message").textContent = "Number is too high 📈";
    //    score--;
    //    document.querySelector(".score").textContent = score;
    //  } else {
    //    document.querySelector(".message").textContent = `you lost the game ❌`;
    //    document.querySelector(".score").textContent = 0;
    //  }
    //} else if (guess < number) {
    //  //when guess is too low
    //  if (score > 1) {
    //    document.querySelector(".message").textContent = "Number is too low 📈";
    //    score--;
    //    document.querySelector(".score").textContent = score;
    //  } else {
    //    document.querySelector(".message").textContent = `you lost the game ❌`;
    //    document.querySelector(".score").textContent = 0;
    //  }
  }
});

//again button functionality
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector(".message").textContent = "Start guessing....";
  display("Start guessing....");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.backgroundColor = "#fff";
  document.querySelector(".number").style.width = "15rem";
});
