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
    if (!parentNode) {
        return;
    }
    else {
        while (parentNode.firstChild) {
            parentNode.removeChild(parentNode.firstChild);
        }
    }
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

function roundResult(round_winner) {
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

function gameWinner(winner) {
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

function disableButtons() {
    let btn = document.querySelectorAll("button");
    btn.forEach (button => {
        button.disabled = true;
    });
}

function playGame() {
    // Declare variables to keep track of scores, rounds and result
    let computerScore = 0;
    let humanScore = 0;
    let computerChoice = "";
    let humanChoice = "";
    
    function playRound(humanChoice, computerChoice) { 
        let roundWinner = "";
        
        if (humanChoice === computerChoice) {
            roundWinner = "tie";
            return roundResult(roundWinner);
        }
    
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            roundWinner = "human";
            return roundResult(roundWinner);
        }
    
        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            roundWinner = "human";
            return roundResult(roundWinner);
        }
    
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            roundWinner = "human";
            return roundResult(roundWinner);
        }
    
        else {
            computerScore++;
            roundWinner = "computer";
            return roundResult(roundWinner);
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
            updateScores(humanScore, computerScore);
        }
        else if (event.target.id === "paperBtn") {
            humanChoice = "paper";
            computerChoice = getComputerChoice();

            playRound(humanChoice, computerChoice);
            updateChoices(humanChoice, computerChoice);
            updateScores(humanScore, computerScore);
        }
        else {
            humanChoice = "scissors";
            computerChoice = getComputerChoice();

            playRound(humanChoice, computerChoice);
            updateChoices(humanChoice, computerChoice);
            updateScores(humanScore, computerScore);
        }

        if (humanScore >= 5) {
            gameWinner(winner = "human");
        }
        else if (computerScore >= 5) {
            gameWinner(winner = "computer");
        }
    });

}

playGame();

