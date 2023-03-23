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

function reset(){
  setTimeout(function(){
  userScore = 0;
  computerScore = 0;
  var element = document.getElementById('user');
  element.innerHTML = "User <br> " + userScore; 
  element = document.getElementById('computer');
  element.innerHTML = "Computer <br> " + computerScore; 
  document.getElementById('result').innerHTML = "";    
  }, 5000)

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

function rock(){
  var round = playRound('paper', getComputerChoice())
  if(round == 'You win!'){
    var element = document.getElementById('user');
    element.innerHTML = "User <br> " + userScore++; 
  }else{
    var element = document.getElementById('computer');
    element.innerHTML = "Computer <br> " + computerScore++; 
  }
  if(userScore == 5){
    document.getElementById('result').innerHTML = 'WINNER!!!!'
    reset();
  }
  if(computerScore == 5){
    document.getElementById('result').innerHTML = "LOSER RIP BOZO"
    reset();
  }
}

function scissors(){
  var round = playRound('paper', getComputerChoice())
  if(round == 'You win!'){
    var element = document.getElementById('user');
    element.innerHTML = "User <br> " + userScore++; 
  }else{
    var element = document.getElementById('computer');
    element.innerHTML = "Computer <br> " + computerScore++; 
  }
  if(userScore == 5){
    document.getElementById('result').innerHTML = 'WINNER!!!!'
    reset();
  }
  if(computerScore == 5){
    document.getElementById('result').innerHTML = "LOSER RIP BOZO"
    reset();
  }
}

function paper(){
  var round = playRound('paper', getComputerChoice())
  if(round == 'You win!'){
    var element = document.getElementById('user');
    element.innerHTML = "User <br> " + userScore++; 
  }else{
    var element = document.getElementById('computer');
    element.innerHTML = "Computer <br> " + computerScore++; 
  }
  if(userScore == 5){
    document.getElementById('result').innerHTML = 'WINNER!!!!'
    reset();
  }
  if(computerScore == 5){
    document.getElementById('result').innerHTML = "LOSER RIP BOZO"
    reset();
  }
}

