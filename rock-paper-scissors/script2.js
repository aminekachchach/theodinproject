let humanScore = 0;
let cpuScore = 0;

let draw = "It's a DRAW";

function computerPlay () {

    let rps = ["rock","paper","scissor"];
    
    let randomPick = rps[Math.floor(Math.random()*rps.length)];
    
    return randomPick;
 
 }
 
 computerPlay();

const btnRock = document.getElementById('rocks');
const btnPaper = document.getElementById('papers');
const btnScissors = document.getElementById('scissors');
const finalMessage = document.getElementById('final-message');

const replayGame = document.getElementById('play-again');

replayGame.addEventListener('click', function () {
  location.reload();
});

btnRock.addEventListener('click', function playRound(playerSelection,computerSelection){

  playerSelection = btnRock;
  computerSelection = computerPlay();

if(playerSelection === btnRock && computerSelection === "scissor"){  

    humanScore++;
    document.getElementById('results').textContent = "Rock Breaks Scissors";
    document.getElementById('humanScore').textContent = "Human Points : " + humanScore;

  }

else if(playerSelection === btnRock && computerSelection === "paper"){  

    cpuScore++;
    document.getElementById('results').textContent = "Paper Covers Rock";
    document.getElementById('cpuScore').textContent = "CPU Points : " + cpuScore;

  }

else if(playerSelection === btnRock && computerSelection === "rock"){    

  document.getElementById('results').textContent = draw;

          winCheck();       
  }});

////////////////////PAPER BUTTON/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

btnPaper.addEventListener('click', function playRound(playerSelection,computerSelection){

  playerSelection = btnPaper;
  computerSelection = computerPlay();

if(playerSelection === btnPaper && computerSelection === "scissor"){ 

    cpuScore++;
    document.getElementById('results').textContent = "Scissor cuts paper";
    document.getElementById('cpuScore').textContent = "CPU Points : " + cpuScore;
          
  }

else if(playerSelection === btnPaper && computerSelection === "rock"){  

    humanScore++;
    document.getElementById('results').textContent = "Paper Covers Rock";
    document.getElementById('humanScore').textContent = "Human Points : " + humanScore;

  }

else if(playerSelection === btnPaper && computerSelection === "paper"){  

  document.getElementById('results').textContent = draw;

  winCheck();       

  }});


////////////////////SCISSORS BUTTON/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


btnScissors.addEventListener('click', function playRound(playerSelection,computerSelection){
  

  playerSelection = btnScissors;
  computerSelection = computerPlay();

if(playerSelection === btnScissors && computerSelection === "paper"){   
    humanScore++;
    document.getElementById('results').textContent = "Scissors Cuts paper";
    document.getElementById('humanScore').textContent = "Human Points : " + humanScore

  }

else if(playerSelection === btnScissors && computerSelection === "rock"){  

  cpuScore++;
  document.getElementById('results').textContent = "Rock Breaks Scissors";
  document.getElementById('cpuScore').textContent = "CPU Points : " + cpuScore;
  }

else if(playerSelection === btnScissors && computerSelection === "scissor"){  
  document.getElementById('results').textContent = draw;

  winCheck();       

  }});

function winCheck(){

  if(humanScore === 5){
    document.getElementById('final-message').textContent = 'HUMANS WIN';
    
  }
  else if(cpuScore === 5){
    document.getElementById('final-message').textContent = 'ROBOTS WIN';
    
  }
}
winCheck();
