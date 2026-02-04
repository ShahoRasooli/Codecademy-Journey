const alienShip = {
  invade: function () {
    console.log(
      "Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.",
    );
  },
};

/*
With the new method syntax introduced in ES6, we can omit the colon and the function keyword.
*/

const alienShip = {
  invade() {
    console.log(
      "Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.",
    );
  },
};

alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'

//////////////////////////////

let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

let alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};

alienShip.retreat();
alienShip.takeOff();
