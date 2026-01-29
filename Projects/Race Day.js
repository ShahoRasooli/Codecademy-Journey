// Race Day
let raceNumber = Math.floor(Math.random() * 1000);

//You can change this variables manually.
const registeredEarly = false;

//You can change this variables manually.
const age = 23;

if (age > 18 && registeredEarly){
  raceNumber += 1000;
}

if(age  > 18 && registeredEarly){
  console.log(`Race number ${raceNumber} You will race at 9:30 am`);
} else if (age  > 18 && !registeredEarly){
  console.log(`Race number ${raceNumber}: You will race at 11:00 am.`);
} else if (age  < 18){
  console.log(`Race number ${raceNumber}: You will race at 12:30 pm.`);
} else {
  console.log('Please see the registration desk.');
}