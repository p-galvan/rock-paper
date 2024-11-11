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

// Update UI after each round
function updateChoices(humanChoice, computerChoice) {
    let choices = document.querySelector("#choices");
    clearChildren(choices);

    let computerChoiceDisp = document.createElement("p");
    computerChoiceDisp.textContent = "computer choice: " + computerChoice;

    let humanChoiceDisp = document.createElement("p");
    humanChoiceDisp.textContent = "your choice: " + humanChoice;

    choices.appendChild(humanChoiceDisp);
    choices.appendChild(computerChoiceDisp);

}

function clearChildren(parentNode) { 
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
    return;
}

function updateScores(humanScore, computerScore) {
    let scores = document.querySelector("#scores");
    clearChildren(scores);

    let computerScoreDisp = document.createElement("p");
    computerScoreDisp.textContent = "computer score: " + computerScore;

    let humanScoreDisp = document.createElement("p");
    humanScoreDisp.textContent = "your score: " + humanScore;

    scores.appendChild(humanScoreDisp);
    scores.appendChild(computerScoreDisp);
}

function roundResult(roundWinner) {
    let roundResult = document.querySelector("#roundResult");
    clearChildren(roundResult);

    let winner = document.createElement("p");
    
    if (roundWinner === "human") {
        winner.textContent = "You win the round!";
    }
    else if (roundWinner === "computer") {
        winner.textContent = "You lose the round!";
    }

    roundResult.appendChild(winner);
}

function gameWinner(winner) {
    let gameResult = document.querySelector("#roundResult");
    clearChildren(gameResult);

    let winner = document.createElement("p");

    if (winner === "human") {
        winner.textContent = "Congratulations! You win the game!";
    }
    else {
        winner.textContent = "Game over! You lose!";
    }

    gameResult.appendChild(winner);
}

function playGame() {

    // Declare variables to keep track of scores, rounds and result
    let computerScore = 0;
    let humanScore = 0;
    let humanChoice = "";
    let result = "";
    let gameInfo = document.querySelector("#game_info");

    function playRound(humanChoice, computerChoice) { 


        if (humanChoice === computerChoice) {
            return console.log("tie!");
        }
    
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            return updateScores(humanScore, computerScore);
        }
    
        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            return updateScores(humanScore, computerScore);
        }
    
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            return updateScores(humanScore, computerScore);
        }
    
        else {
            computerScore++;
            return updateScores(humanScore, computerScore);
        }       
    }
    
    // Event listeners for player selection buttons
    let btn = document.querySelector("#choiceBtns");
    btn.addEventListener("click", (event) => {
        if (event.target.id === "rockBtn") {
            humanChoice = "rock";
            computerChoice = getComputerChoice();

            playRound(humanChoice, computerChoice);
            updateChoices(humanChoice, computerChoice);
        }
        else if (event.target.id === "paperBtn") {
            humanChoice = "paper";
            computerChoice = getComputerChoice();

            playRound(humanChoice, computerChoice);
            updateChoices(humanChoice, computerChoice);
        }
        else {
            humanChoice = "scissors";
            computerChoice = getComputerChoice();

            playRound(humanChoice, computerChoice);
            updateChoices(humanChoice, computerChoice);
        }
    });
}

playGame();

