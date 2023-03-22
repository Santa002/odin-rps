let userScore = 0;
let computerScore = 0;
let elements = document.getElementsByClassName("game");

for(var i = 0; i < elements.length; i++){
  console.log(elements[i]);
}

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
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You win!';
  }
  else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You win!';
  }else{
    return 'You lose...'
  }
}


var game = function(){
  let computerSelection = getComputerChoice();
  let playerSelection = this.getAttribute("data")
  alert("asdasdasd")
}

for(let i = 0; i < elements.length; i++){
  elements[i].addEventListener("click", game);
}