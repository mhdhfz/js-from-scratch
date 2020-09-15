const root = document.querySelector("#root");
const box = document.createElement("div");
const button = document.createElement("button");

box.classList.add("box");
button.textContent = "My Button";
button.classList.add("btn", "btn-danger");

root.appendChild(box);
box.appendChild(button);

button.addEventListener("click", function () {
  saySomething("hey!", true);
});

function saySomething(message = "goodbye", whisper = false) {
  if (whisper) {
    console.log(`%c${message}`, "font-size:5px");
  } else {
    console.log(message);
  }
}

saySomething("hello", true);
saySomething();

function squared(a) {
  return a * a;
}

const newSquared = squared(3);
console.log(newSquared);

const addition = function (a) {
  return a + a;
};

const otherAddition = addition;

// arrow function

const minus = (b) => b - b;

punch();

function punch() {
  console.log("punch");
}
