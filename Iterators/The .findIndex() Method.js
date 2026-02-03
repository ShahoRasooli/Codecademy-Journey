const jumbledNums = [123, 25, 78, 5, 9];

const lessThanTen = jumbledNums.findIndex((num) => {
  return num < 10;
});
console.log(jumbledNums);
console.log(lessThanTen); // Output: 3
console.log(jumbledNums[3]); // Output: 5

////////////////////////////

const greaterThan1000 = jumbledNums.findIndex((num) => {
  return num > 1000;
});

console.log(greaterThan1000); // Output: -1

/*
If there isn’t a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.
*/

////////////////////////////

const animals = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals.findIndex((animal) => {
  return animal === "elephant"; // Output: 7
});

console.log(foundAnimal);

const startsWithS = animals.findIndex((animal) => {
  return animal[0] === "s"; // Output: 3
});

console.log(startsWithS);
