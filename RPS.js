// get computer to use a random number from 0 to 1 to return rock or paper or scissors
// write a code to allow human enter numbers and return rock or paper or scissors

                      
let x = 'rock'
let y = 'paper'
let z = 'scissors'

function getComputerChoice () {
    let game = Math.floor((Math.random() * 3)); 

    if (game === 0) {
         return x;
    }
    else if (game === 1) {
         return y;
    }
    else if (game === 2){
         return z;
     
    }
   

}


function getHumanChoice () {
    let choose = prompt('Enter your choice').toLowerCase();

     if (choose === x || choose === y || choose === z) {
         return choose;
    }
    else{alert ('invalid choice! please enter rock paper or scissors');
        return getHumanChoice();
    }
    

 }


    function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice)  {
        return `It's a tie! You both chose ${humanChoice}.`;
    }
    else if (
        (humanChoice === x && computerChoice === z) ||
        (humanChoice === y && computerChoice === x) || 
        (humanChoice === z && computerChoice === y)
    ) {
        
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    }
    else {
        
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    
  } 


 
  



function playGame () {
    let humanScore = 0
    let computerScore = 0

    for(i=1; i<=5; i++){
        console.log(`Round ${i}`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let result = playRound(humanChoice, computerChoice);
        console.log(result);
        if (result.includes('You win')) {
            humanScore++;
        } else if (result.includes('You lose')) {
            computerScore++;
        }

        console.log(`Score after Round ${i}: You ${humanScore} - ${computerScore} Computer`);

        if (humanScore > computerScore) {
            console.log(`You won the game! Final score: You ${humanScore} - ${computerScore} Computer`);
        } else if (humanScore < computerScore) {
            console.log(`You lost the game. Final score: You ${humanScore} - ${computerScore} Computer`);
        } else {
            console.log(`The game is a tie! Final score: You ${humanScore} - ${computerScore} Computer`);
        }


        
    }
    


}
playGame();