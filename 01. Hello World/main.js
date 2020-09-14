const root = document.querySelector("#root");
const box = document.createElement("div");
const title = document.createElement("h1");
const button = document.createElement("button");

box.classList.add("box");
title.textContent = "Hello, world!";
title.classList.add("d-large");
button.textContent = "Change text";
button.classList.add("btn-primary");

root.appendChild(box);
box.appendChild(title);
box.appendChild(button);

function changeText() {
  title.textContent = "Hello, JS!";
}

button.addEventListener("click", changeText);
