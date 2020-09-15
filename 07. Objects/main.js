// everything in js are objects.
console.log("this is my string".toUpperCase());

const hero = {
  // this a property and values
  name: "Bruce Wayne",
  alias: "Batman",
  catchphrase: "To the Batcave",
  // when function inside object is called method.
  // function declaration
  speak: function () {
    return "Attention! " + this.catchphrase;
    // note about this
    // this will refer to hero object
    // and hero object will refer to the property that been called
  },
  // arrow function
  attack: (sound) => {
    return `(punches bad guy) ${sound}`;
  },
};

// access a property using dot notation
console.log(hero.name);

// access a property using bracket notation
const thingToLookFor = "alias";
console.log(hero[thingToLookFor]);
console.log(hero.speak());
console.log(hero.attack("POWWWWW"));
