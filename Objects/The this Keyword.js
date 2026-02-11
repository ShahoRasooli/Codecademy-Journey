const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
};

goat.makeSound(); // Prints baaa

//////////////////////////

const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  diet() {
    console.log(dietType);
  },
};
goat.diet();
// Output will be "ReferenceError: dietType is not defined"

/////////////////////////////

const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  diet() {
    console.log(this.dietType);
  },
};

goat.diet();
// Output: herbivore

/////////////////////////////

const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.  
`;
  },
};

console.log(robot.provideInfo());
//I am 1E78V2 and my current energy level is 100.
