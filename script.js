let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function playRound(playerSelection, computerSelection){
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return 'Tie!';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You win!';
  }
  else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You lose!';
  }
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You win!';
  }
  else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'You lose!';
  }
  else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You win!';
  }
  else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'You lose!';
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for(let i = 0; i < 5; i++){
    let playerSelection = prompt('Rock, paper, or scissors?');
    let computerSelection = getComputerChoice();
    let winner = playRound(playerSelection, computerSelection);
    if (winner === 'You win!') {
      playerScore++;
    }
    else if (winner === 'You lose!') {
      computerScore++;
    }
    console.log(winner);
  }
  if (playerScore > computerScore) {
    console.log('You win the game!');
  }
  else if (playerScore < computerScore) {
    console.log('You lose the game!');
  }
}