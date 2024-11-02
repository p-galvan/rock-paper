function getComputerChoice () {
    // Generate random number between 1 and 3 and assign to rock/paper/scissors
    let number = Math.ceil(Math.random() * 3);
    let choice;

    if (number === 1) {
        choice = "rock";
    }
    else if (number === 2) {
        choice = "paper";
    }
    else {
        choice = "scissors"
    }
    
    return choice;
}

function getHumanChoice () {
    // Prompt user for selection of rock/paper/scissors
    answer = prompt("Enter rock, paper or scissors: ");
    answer = answer.toLowerCase();

    // Validate user input, reprompt if user enters invalid input
    if (answer != "rock" && answer != "paper" && answer != "scissors") {
        alert("invalid input, please try again typing rock, paper or scissors");
        return getHumanChoice();
    }

    return answer;
}

function playGame() {

    // Declare variables to keep track of scores, rounds and result
    let humanScore = 0;
    let computerScore = 0;
    let totalRounds = 0;
    let result = "";
    
    function playRound (humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return console.log("tie!");
        }
    
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            return console.log("you win!");
        }
    
        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            return console.log("you win!");
        }
    
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            return console.log("you win!");
        }
    
        else {
            computerScore++;
            return console.log("you lose!");
        }       
    }
    
    // Play the game for 5 rounds
    while (totalRounds < 5) {
        // Get user input before round
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        
        // Log user and computer choices
        console.log("computer choice: " + computerChoice);
        console.log("human choice: " + humanChoice);

        // Play round
        playRound(humanChoice, computerChoice);
        totalRounds++;

        // Log scores and round after every round
        console.log("human score: " + humanScore);
        console.log("computer score: " + computerScore);
        console.log("total rounds: " + totalRounds);
    }

    // Return winner
    if (humanScore > computerScore) {
        result = "you win the game!";
        return result;
    } 
    else if (humanScore < computerScore){
        result = "you lose the game!";
        return result;
    }
    else {
        result = "TIE!";
        return result;
    }

}

// Declare winner of game
const winner = playGame();
console.log(winner);
