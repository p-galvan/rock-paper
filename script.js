function getComputerChoice () {
    
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
    answer = prompt("Enter rock, paper or scissors: ");
    answer = answer.toLowerCase();

    if (answer != "rock" && answer != "paper" && answer != "scissors") {
        alert("invalid input, please try again typing rock, paper or scissors");
        return getHumanChoice();
    }

    return answer;
}

function playGame() {
    
    // Declare variables to keep track of score, rounds and result
    let humanScore = 0;
    let computerScore = 0;
    let totalRounds = 0;
    let result = "";
    
    function playRound (humanc, computerc) {

        if (humanc === computerc) {
            return console.log("tie, play again!");
        }
    
        else if (humanc === "rock" && computerc === "scissors") {
            humanScore++;
            return console.log("you win!");
        }
    
        else if (humanc === "paper" && computerc === "rock") {
            humanScore++;
            return console.log("you win!");
        }
    
        else if (humanc === "scissors" && computerc === "paper") {
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
        
        console.log("computer choice: " + computerChoice);
        console.log("human choice: " + humanChoice);

        // Play round
        playRound(humanChoice, computerChoice);
        totalRounds++;

        console.log("human score: " + humanScore);
        console.log("computer score: " + computerScore);
        console.log("total rounds: " + totalRounds);
    }

    // Return winner
    if (humanScore > computerScore) {
        result = "you win the game!";
        return result;
    } 
    else if (humanSore < computerScore){
        result = "you lose the game!";
        return result;
    }
    else {
        result = "TIE";
        return result;
    }

}

// Declare winner of game
const winner = playGame();
console.log(winner);
