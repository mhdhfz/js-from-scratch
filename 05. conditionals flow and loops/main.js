const name = prompt("what is your name ?");
const username = "mhdhfz";

// if statement
if (name == "hafiz") {
  alert("hello " + name);
} else if (name == "wan") {
  console.log("this is wan");
} else {
  console.log("not selected");
}

// for loop
const catsList = document.querySelector(".cats-list");
const cats = [
  { name: "bruce", type: "exotic shorthair" },
  { name: "chance", type: "british" },
];

for (let i = 0; i < cats.length; i++) {
  // grab the cat
  const cat = cats[i];

  const catData = document.createElement("div");
  catData.classList.add("box");
  catData.innerText = `${cat.name} is a ${cat.type}`;
  catsList.appendChild(catData);
}

// while loops
let i = 0;
while (i < cats.length) {
  // grab the cat
  const cat = cats[i];

  const catData = document.createElement("div");
  catData.classList.add("box");
  catData.innerText = `${cat.name} is a ${cat.type}`;
  catsList.appendChild(catData);

  i++;
}

//do while loop

do {
  // grab the cat
  const cat = cats[i];
  const catData = document.createElement("div");
  catData.classList.add("box");
  catData.innerText = `${cat.name} is a ${cat.type}`;
  catsList.appendChild(catData);
  i++;
} while (i < cats.length);

// for.. of iterator
for (let cat of cats) {
  const catData = document.createElement("div");
  catData.classList.add("box");
  catData.innerText = `${cat.name} is a ${cat.type}`;
  catsList.appendChild(catData);
}
