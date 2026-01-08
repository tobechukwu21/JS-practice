"use strict";
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overLay = document.querySelector(".overlay");
const showModal = document.querySelectorAll(".show-modal");

const closeModal1 = function () {
  modal.classList.add("hidden");
  overLay.classList.add("hidden");
};

for (let i = 0; i < showModal.length; i++) {
  //console.log(showModal[i].textContent);
  showModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overLay.classList.remove("hidden");
  });
}
closeModal.addEventListener("click", closeModal1);
overLay.addEventListener("click", closeModal1);

//global-events/objects - e.g keyboard events
document.addEventListener("keydown", function (events) {
  //console.log(events.key);

  if (events.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal1();
  }
});

//bonus
//.addEventListener - (clicks) is the event to listen to....
// handler -the function that js automatically calls when the event has been heared
