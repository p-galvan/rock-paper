let HUMAN_SCORE = 0;
let COMPUTER_SCORE = 0;

// Generate random computer choice
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

// Update UI choices after each round
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

// Clears all child nodes
function clearChildren(parentNode) { 
    if (!parentNode) {
        return;
    }
    else {
        while (parentNode.firstChild) {
            parentNode.removeChild(parentNode.firstChild);
        }
    }
}

// Update scores
function computeScores(roundWinner) {

    if (roundWinner === "human") {
        HUMAN_SCORE++;
    }
    else if (roundWinner === "computer") {
        COMPUTER_SCORE++;
    }
    
    updateScoresUI(HUMAN_SCORE, COMPUTER_SCORE);
    
    return;
}

// Update UI after computing scores
function updateScoresUI(HUMAN_SCORE, COMPUTER_SCORE) {
    let scores = document.querySelector("#scores");
    clearChildren(scores);

    let cScore = document.createElement("p");
    cScore.textContent = "computer score: " + COMPUTER_SCORE;

    let hScore = document.createElement("p");
    hScore.textContent = "your score: " + HUMAN_SCORE;

    scores.appendChild(hScore);
    scores.appendChild(cScore);
}

// Display round result
function updateResultUI(round_winner) {
    let round = document.querySelector("#roundResult");
    clearChildren(round);

    let winnerDisp = document.createElement("p");
    winnerDisp.textContent = "";

    if (round_winner === "human") {
        winnerDisp.textContent = "You win the round!";
    }
    else if (round_winner === "computer") {
        winnerDisp.textContent = "You lose the round!";
    }
    else {
        winnerDisp.textContent = "Tie!";
    }

    round.appendChild(winnerDisp);
}

// Display game winner
function gameOver(winner) {
    let gameResult = document.querySelector("#roundResult");
    clearChildren(gameResult);

    let winnerDisp = document.createElement("p");

    // Determine game winner
    if (winner === "human") {
        winnerDisp.textContent = "Congratulations! You win the game!";
    }
    else {
        winnerDisp.textContent = "Game over! You lose!";
    }

    // Disable buttons
    disableButtons();

    // Display winner
    gameResult.appendChild(winnerDisp);
}

// Disable game buttons when game is over
function disableButtons() {
    let btn = document.querySelectorAll("button");
    btn.forEach (button => {
        button.disabled = true;
    });
}

// Determines round winner based on human & computer choices
function validateRound(humanChoice, computerChoice) {
    let roundWinner = "";
        
    if (humanChoice === computerChoice) {
        roundWinner = "tie";
    }

    else if (humanChoice === "rock" && computerChoice === "scissors") {
        roundWinner = "human";
    }

    else if (humanChoice === "paper" && computerChoice === "rock") {
        roundWinner = "human";
    }

    else if (humanChoice === "scissors" && computerChoice === "paper") {
        roundWinner = "human";
    }

    else {
        roundWinner = "computer";
    }       


    updateResultUI(roundWinner);
    return roundWinner;
}

function playRound(humanChoice, computerChoice) {
    let gameWinner = "";

    // Validates round winner
    let roundWinner = validateRound(humanChoice, computerChoice);

    // Update Scores
    computeScores(roundWinner);

    // If game has a winner, call gameOver
    if (HUMAN_SCORE >= 5) {
        gameWinner = "human";
        return gameOver(gameWinner);
    }
    else if (COMPUTER_SCORE >= 5) {
        gameWinner = "computer";
        return gameOver(gameWinner);
    }

    return;
}

function main() {
    // Declare variables to keep track of scores, rounds and result
    let computerChoice = "";
    let humanChoice = "";
    
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
}

main();

