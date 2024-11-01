
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
    // Declare score and round variables
    let humanScore = 0;
    let computerScore = 0;
    let totalRounds = 0;
    
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
    
    while (totalRounds < 5) {
        playRound(humanChoice, computerChoice);
        totalRounds++;
    }
}
// Call functions to generate random computer choice and get human choice
const computerChoice = getComputerChoice ();
const humanChoice = getHumanChoice ();

console.log("computer choice: " + computerChoice);
console.log("human choice: " + humanChoice);


// playRound(humanChoice, computerChoice);

console.log("your score: " + humanScore);
console.log("computer score: " + computerScore);