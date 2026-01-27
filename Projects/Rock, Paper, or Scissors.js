const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ){
  
  return userInput;
  } else {
    console.log('error');
  }
}

function getComputerChoice(){
let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
  case 0:
    return 'rock';
    break;
  case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
}

return randomNumber;
}

function determineWinner(userChoice, computerChoice){
  if(userChoice === computerChoice){
    return 'The game is a tie!';
  }
  if (userChoice === 'bomb') {
    return 'You won!';
  }
  if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
  if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
  if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
}
/*
console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('rock', 'scissors')); // prints something like 'The user won!'
*/
function playGame(){
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice('rock');

  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);

console.log(determineWinner(userChoice, computerChoice));
}

playGame();









