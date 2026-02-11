const bankAccount = {
  _amount: 1000,
};

// reassign
bankAccount._amount = 1000000;

/////////////////////

const robot = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
  },
};

robot._energyLevel = "high";

robot.recharge();
