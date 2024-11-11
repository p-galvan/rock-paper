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


function playRound(humanChoice, computerChoice) {
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

// Update UI after each round
function updateChoices(humanChoice, computerChoice) {
    let choices = document.querySelector("#choices");

    let computerChoiceDisplay = document.createElement("span");
    computerChoiceDisplay.textContent = computerChoice

    let humanChoiceDisplay = document.createElement("span");
    humanChoiceDisplay.textContent = humanChoice;

    choices.appendChild(humanChoiceDisplay);
    choices.appendChild(computerChoiceDisplay);

}
function playGame() {

    // Declare variables to keep track of scores, rounds and result
    let computerScore = 0;
    let humanScore = 0;
    let humanChoice = "";
    let result = "";
    let gameInfo = document.querySelector("#game_info");
    let choices = document.querySelector("#choices");
    let scores = document.querySelector("#scores");
    
    
    // Event listeners for player selection buttons
    let btn = document.querySelector("#choiceBtns");
    btn.addEventListener("click", (event) => {
        if (event.target.id === "rockBtn") {
            humanChoice = "rock";
            computerChoice = getComputerChoice();

            playRound(humanChoice, computerChoice);
        }
        else if (event.target.id === "paperBtn") {
            humanChoice = "paper";
            computerChoice = getComputerChoice();

            playRound(humanChoice, computerChoice);
        }
        else {
            humanChoice = "scissors";
            computerChoice = getComputerChoice();

            playRound(humanChoice, computerChoice);
        }
    });



    // Play the game until a player reaches 6 points
    
    // Update computer and human choices in UI
    const computerChoiceDisplay = document.createElement("span");
    computerChoiceDisplay.textContent = "Computer choice: " + computerChoice;
    console.log("computer choice: " + computerChoice);

    const humanChoiceDisplay = document.createElement("span");
    humanChoiceDisplay.textContent = "Human choice: " + humanChoice;
    console.log("human choice: " + humanChoice);

    scores.appendChild(computerChoiceDisplay);
    scores.appendChild(humanChoiceDisplay);


    // Log scores and round after every round
    console.log("human score: " + humanScore);
    console.log("computer score: " + computerScore);
    console.log("total rounds: " + totalRounds);


    // // Return winner
    // if (humanScore > computerScore) {
    //     result = "you win the game!";
    //     return result;
    // } 
    // else if (humanScore < computerScore){
    //     result = "you lose the game!";
    //     return result;
    // }
    // else {
    //     result = "TIE!";
    //     return result;
    // }

}

// Declare winner of game
const winner = playGame();
console.log(winner);
