const words = ["chair", "music", "pillow", "brick", "pen", "door"];

const shortWords = words.filter((word) => {
  return word.length < 6;
});
console.log(words);
console.log(shortWords);

///////////////////////////

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter((number) => {
  return number < 250;
  /*
if (number < 25) {
    return true;
*/
});

console.log(smallNumbers);

///////////////////////////

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];

const longFavoriteWords = favoriteWords.filter((favoriteWord) => {
  return favoriteWord.length > 7;
});

console.log(longFavoriteWords);
