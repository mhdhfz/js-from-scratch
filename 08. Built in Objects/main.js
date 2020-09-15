// javascript is dynamic typed language.
// when js see code like this below
//console.log("this is a string".toUpperCase());
// it will convert to this.
//console.log(String("this is a string").toUpperCase());

// here when do validation
const first = "this is a string".toUpperCase();
const second = String("this is a string").toUpperCase();

console.groupCollapsed("Primitives vs Objects");
// check value only after type coercion
console.log(first == second);

// check type and value
console.log(first === second);

// check typeof
console.log(typeof first);
console.log(typeof second);
console.log(typeof new String());

console.groupEnd();

const sentence = "this is my sentence";
console.groupCollapsed("String");
console.log(sentence.startsWith("this is"));
console.log("why".repeat(10));
console.log("look at me goo              ".trim());
console.groupEnd();

console.groupCollapsed("Numbers and Math");
console.log((1).toString());
console.log((1).toString());
console.log(Number.isInteger(5));
console.log(Number.isInteger(5.53));
console.log((1.564322).toFixed(2));
console.log(Math.random().toFixed(2), Math.ceil(1.56), Math.floor(6.4));
console.groupEnd();

const people = ["ali", "mat", "wan"];
console.group("Arrays");
console.log(people.length);
console.log(people.join("-"));
console.log(people.push("kiah"), people);
console.log(people.pop(), people);

// high order function
people.forEach((user) => console.log(user));
console.groupEnd();
