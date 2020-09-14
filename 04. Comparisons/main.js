const original = "hafiz";
const clone = "HAFIZ";

console.groupCollapsed("String");
console.log(original == "hafiz");
console.log(original == clone);
console.log(original == clone.toLocaleLowerCase());
console.groupEnd();

const num1 = 10;
const num2 = "10";

console.groupCollapsed("Number");
console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 != num2);
console.log(num1 !== num2);
console.groupEnd();

let what;
let thing = null;
console.groupCollapsed("Boolean");
console.log(Boolean(what));
console.log(Boolean(thing));
console.log(Boolean(num1));
console.log(Boolean({}));
console.log(Boolean([]));
console.groupEnd();

const firstArr = [1, 2, 3];
const secondArr = [1, 2, 3];
const firstObj = { color: "red" };
const secondObj = { color: "red" };

console.groupCollapsed("Objects and Arrays");
console.log(firstArr == secondArr);
console.log(firstObj == secondObj);
console.groupEnd();

console.group("And Or");
console.log(Boolean("a") && Boolean("b"));
console.log(Boolean("a") && Boolean(""));
console.log(Boolean("a") || Boolean(""));
console.log(Boolean("") || Boolean(""));
console.groupEnd();
