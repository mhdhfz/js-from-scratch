// grab elements from the dom
// attach event listeners

// method 1 : grab and add event

// method 2 : grab element and assign to variable
//            give event to variable
// const body = document.querySelector("body");
// body.style.backgroundColor = "#c00c00";

// ========================== OPTION 1 ==========================//
function goCoocoo() {
  document.body.style.backgroundColor = "#c00c00";
}

// ========================== OPTION 2 ==========================//
function getCoffee() {
  document.body.style.backgroundColor = "#c0ffee";
}

// select one
// const btnCoffee = document.querySelector(".btn-coffee");
// btnCoffee.onclick = function () {
//   document.body.style.backgroundColor = "#c0ffee";
// };

// select multiple
const btnCoffee = document.querySelectorAll(".btn-coffee");
btnCoffee.forEach((btn) => {
  btn.onclick = getCoffee;
});

// btnCoffee.onmouseenter = goCoocoo;

// ========================== OPTION 3 ==========================//
function notListening() {
  document.body.style.backgroundColor = "#1a1a1a";
}

const btnNot = document.querySelector(".btn-not");
btnNot.addEventListener("click", notListening);
