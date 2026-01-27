const getSleepHours = (day) => {
  if ((day = "monday")) {
    return 8;
  } else if ((day = "tuseday")) {
    return 8;
  } else if ((day = "wednesday")) {
    return 8;
  } else if ((day = "thursday")) {
    return 8;
  } else if ((day = "friday")) {
    return 8;
  } else if ((day = "saturday")) {
    return 8;
  } else if ((day = "sunday")) {
    return 8;
  }
};

console.log(getSleepHours("saturday")); // delete later

const getActualSleepHours = () => {
  const getSleepHour = 6 + 7 + 9 + 8 + 9 + 9 + 5;
  /*
  getSleepHours('monday') + 
  getSleepHours('tuesday') + 
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');
  */
  return getSleepHour;
};

/*
const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
}
*/

const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
};

console.log("Actual SleepHours " + getActualSleepHours()); // delete later
console.log("Ideal SleepHours " + getIdealSleepHours()); // delete later

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(9);

  if (actualSleepHours === idealSleepHours) {
    console.log(
      "the user got" + actualSleepHours + "the perfect amount of sleep.",
    );
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "you got " +
        (actualSleepHours - idealSleepHours) +
        " hour(s) more sleep than needed.",
    );
  } else {
    console.log(
      "you got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less, you should get some rest.",
    );
  }
};

calculateSleepDebt(); // delete later
