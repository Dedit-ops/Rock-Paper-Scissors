let x = 'rock';
let y = 'paper';
let z = 'scissors';

// Scores
let playerScore = 0;
let computerScore = 0;

// Function to get computer's random choice
function getComputerChoice() {
    const choices = [x, y, z];
    return choices[Math.floor(Math.random() * 3)];
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! Both chose ${playerSelection}.`;
    } else if (
        (playerSelection === x && computerSelection === z) || // Rock beats Scissors
        (playerSelection === y && computerSelection === x) || // Paper beats Rock
        (playerSelection === z && computerSelection === y)    // Scissors beats Paper
    ) {
        playerScore++; // Increment player's score
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++; // Increment computer's score
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

// Update scores on the screen
function updateScores() {
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}

// Check for a winner
function checkWinner() {
    if (playerScore === 5) {
        document.getElementById('result').textContent = 'Congratulations! You are the winner!';
        disableButtons();
    } else if (computerScore === 5) {
        document.getElementById('result').textContent = 'Game Over! The computer wins!';
        disableButtons();
    }
}

// Disable buttons once there's a winner
function disableButtons() {
    const buttons = document.querySelectorAll('#buttons-container button');
    buttons.forEach(button => button.disabled = true);
    document.getElementById('reset').style.display = 'block'; // Show the reset button
}

// Reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    document.getElementById('result').textContent = '';
    document.getElementById('reset').style.display = 'none'; // Hide reset button
    const buttons = document.querySelectorAll('#buttons-container button');
    buttons.forEach(button => button.disabled = false); // Enable buttons
}

// Create buttons dynamically
const buttonsContainer = document.getElementById('buttons-container');
const choices = [x, y, z];

choices.forEach(choice => {
    const button = document.createElement('button'); // Create a button element
    button.textContent = choice; // Set button text
    button.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        const result = playRound(choice, computerChoice);
        document.getElementById('result').textContent = result;
        updateScores();
        checkWinner();
    });
    buttonsContainer.appendChild(button); // Append the button to the container
});

// Add event listener for the reset button
document.getElementById('reset').addEventListener('click', resetGame);
