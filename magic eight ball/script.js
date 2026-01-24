const userQuestion ='What is your name?';
console.log(userQuestion);

let userName = 'Sara';

userName ? console.log(`Hello ${userName}!`)
: console.log('Hello!');

let randomNumber = Math.floor(Math.random() * 8);
console.log('Magic 8-Ball says:' );

let eightBall ='';
/*
if(randomNumber === 1){
  eightBall = 'It is certain';
} else if (randomNumber === 2){
  eightBall ='It is decidedly so';
} else if (randomNumber === 3){
  eightBall ='Reply hazy try again';
} else if (randomNumber === 4){
  eightBall ='Cannot predict now';
} else if (randomNumber === 5){
  eightBall ='Do not count on it';
} else if (randomNumber === 6){
  eightBall ='My sources say no';
} else if (randomNumber === 7){
  eightBall ='Outlook not so good';
} else if (randomNumber === 8){
  eightBall ='Signs point to yes';
} else {
  eightBall ='It is certain';
}
console.log(eightBall);
*/


switch(randomNumber){
  case 1:
  eightBall = 'It is certain';
  break;
  case 2:
  eightBall = 'It is decidedly so';
  break;
  case 3:
  eightBall = 'Reply hazy try again';
  break;
  case 4:
  eightBall = 'Cannot predict now';
  break;
  case 5:
  eightBall = 'Do not count on it';
  break;
  case 6:
  eightBall = 'My sources say no';
  break;
  case 7:
  eightBall = 'Outlook not so good';
  break;
  case 8:
  eightBall = 'Outlook not so good';
  break;
  default:
  eightBall = 'It is certain';
  break;
}
console.log(eightBall);
