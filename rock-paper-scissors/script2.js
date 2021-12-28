function computerPlay () {

    let rps = ["rock","paper","scissor"];
    
    let randomPick = rps[Math.floor(Math.random()*rps.length)];
    
    return randomPick;
 
 }
 
 computerPlay();
 
 let playerSelection;
   
 let computerSelection = computerPlay(); 
 
 let humanScore = 0;
 let cpuScore = 0;
 let draws = 0;
 
 let humanWinsRound = "Point"
 let cpuWinsRound = "Point";
 let draw = "DRAW";


 function playRound(playerSelection,computerSelection){
 
   playerSelection = prompt("chose your sign");
 
   computerSelection = computerPlay();


     if(playerSelection.toLowerCase() === "rock" && computerSelection === "scissor"){     
      return("HUMAN :" + " " + ++humanScore + " " + humanWinsRound)      
     }

     else if(playerSelection.toLowerCase() === "rock" && computerSelection === "paper"){     
      return("CPU :" + " " + ++cpuScore + " " + cpuWinsRound)      
     }

     else if(playerSelection.toLowerCase() === "rock" && computerSelection === "rock"){     
      return(draw)      
     }
     
     if(playerSelection.toLowerCase() === "paper" && computerSelection === "scissor"){     
      return("HUMAN :" + " " + ++humanScore + " " + humanWinsRound)      
     }

     else if(playerSelection.toLowerCase() === "paper" && computerSelection === "scissor"){     
      return("CPU :" + " " + ++cpuScore + " " + cpuWinsRound)      
     }

     else if(playerSelection.toLowerCase() === "paper" && computerSelection === "paper"){     
      return(draw)      
     }

     if(playerSelection.toLowerCase() === "scissor" && computerSelection === "paper"){     
      return ("HUMAN :" + " " + ++humanScore + " " + humanWinsRound)      
     }

     else if(playerSelection.toLowerCase() === "scissor" && computerSelection === "rock"){     
      return("CPU :" + " " + ++cpuScore + " " + cpuWinsRound)      
     }

     else if(playerSelection.toLowerCase() === "scissor" && computerSelection === "scissor"){     
      return(draw)      
     }
    
     
 };


 function game() {
 
   console.log(playRound(playerSelection,computerSelection));
   console.log(playRound(playerSelection,computerSelection));
   console.log(playRound(playerSelection,computerSelection));
   console.log(playRound(playerSelection,computerSelection));
   console.log(playRound(playerSelection,computerSelection));

   if (humanScore > cpuScore){

    return "HUMAN WINS!";

   }

   else if (cpuScore > humanScore){
     return "CPU WINS!";
   }

   else if (cpuScore === humanScore){
    return "ITS A DRAW NO WINNER";
  }
 }
 console.log(game());
 
 
 
 