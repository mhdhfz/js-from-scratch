let a = 10,
  b = 3,
  c = 15,
  d = "5",
  e = "my name",
  f = "is hafiz";

// addition
console.groupCollapsed("addition");
console.log(a + b);
console.log(a + c);
console.log(e + " " + f);
console.log(a + d);
console.log(e + " is batman");
console.groupEnd();

// multipication
console.groupCollapsed("multiplication");
console.log(a * b);
console.log(b * c);
console.log(b * 3);
console.groupEnd();

// increment
console.group("Incrementing");
console.log(a + 1);
console.log(a++);
console.log((c += a));
console.log(b--);
console.log(--b);
console.log((c += a));
console.groupEnd();
