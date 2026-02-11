const monsterFactory = (name, age) => {
  return {
    name: name,
    age: age,
  };
};

// Shorthand
const monsterFactory = (name, age) => {
  return {
    name,
    age,
  };
};

//////////////////////////

const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};

const newRobot = robotFactory("P-501", false);
console.log(newRobot.model); // P-501
console.log(newRobot.mobile); // false
