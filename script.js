let computerScore = 0;
let humanScore = 0;

function getComputerChoice () {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)]
}

function getHumanChoice () {
    let userChoice = prompt("Rock, paper, or scissors?: ");
    return userChoice;
}

function playRound (userChoice, computerChoice) {
    com = computerChoice.toLowerCase();
    user = userChoice.toLowerCase();
    if (com == "rock" && user == "rock") {
        console.log("It's a tie! Both of you picked rock.");
    } else if (com == "rock" && user == "paper") {
        console.log("You win! Paper beats rock.");
        humanScore++;
    } else if (com == "rock" && user == "scissors") {
        console.log("You lose! Rock beats scissors.");
        computerScore++;
    } else if (com == "paper" && user == "rock") {
        console.log("You lose! Paper beats rock.");
        computerScore++;
    } else if (com == "paper" && user == "paper") {
        console.log("It's a tie! Both of you picked paper.");
    } else if (com == "paper" && user == "scissors") {
        console.log("You win! Scissors beat paper.");
        humanScore++;
    } else if (com == "scissors" && user == "rock") {
        console.log("You win! Scissors beat rock.");
        humanScore++;
    } else if (com == "scissors" && user == "paper") {
        console.log("You lose! Scissors beat paper.");
        computerScore++;
    } else {
        console.log("It's a tie! Both of you picked scissors.");
    }
}

function playGame () {
    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        console.log("You are the winner!");
    } else if (computerScore > humanScore) {
        console.log("You have lost.");
    } else {
        console.log("You have tied with the computer!");
    }
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}

playGame();