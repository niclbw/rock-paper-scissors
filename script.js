let computerScore = 0;
let humanScore = 0;

const hChoice = document.querySelector("#human-choice");
const cChoice = document.querySelector("#computer-choice");
const results = document.querySelector("#results");
const hScore = document.querySelector("#human-score");
const cScore = document.querySelector("#computer-score");
const rockButton = document.querySelector("#select-rock");
const paperButton = document.querySelector("#select-paper");
const scissorsButton = document.querySelector("#select-scissors");

function getComputerChoice () {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound (userChoice, computerChoice) {

    hChoice.textContent = `User choice: ${userChoice}`;
    cChoice.textContent = `Computer choice: ${computerChoice}`;

    com = computerChoice.toLowerCase();
    user = userChoice.toLowerCase();

    if (com == "rock" && user == "rock") {
        results.textContent = "It's a tie! Both of you picked rock.";
    } else if (com == "rock" && user == "paper") {
        results.textContent = "You win! Paper beats rock.";
        humanScore++;
    } else if (com == "rock" && user == "scissors") {
        results.textContent = "You lose! Rock beats scissors.";
        computerScore++;
    } else if (com == "paper" && user == "rock") {
        results.textContent = "You lose! Paper beats rock.";
        computerScore++;
    } else if (com == "paper" && user == "paper") {
        results.textContent = "It's a tie! Both of you picked paper.";
    } else if (com == "paper" && user == "scissors") {
        results.textContent = "You win! Scissors beat paper.";
        humanScore++;
    } else if (com == "scissors" && user == "rock") {
        results.textContent = "You win! Scissors beat rock.";
        humanScore++;
    } else if (com == "scissors" && user == "paper") {
        results.textContent = "You lose! Scissors beat paper.";
        computerScore++;
    } else {
        results.textContent = "It's a tie! Both of you picked scissors.";
    }

    if (humanScore === 5) {
        hChoice.textContent = ""
        cChoice.textContent = ""
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        results.setAttribute("style", "color: green; font-weight: bold")
        results.textContent = "You won the round!"
    } else if (computerScore === 5) {
        hChoice.textContent = ""
        cChoice.textContent = ""
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        results.setAttribute("style", "color: red; font-weight: bold")
        results.textContent = "You lost the round."
    }
    hScore.textContent = `Your score: ${humanScore}`;
    cScore.textContent = `Computer score: ${computerScore}`;
}

rockButton.addEventListener('click', () => playRound("Rock", getComputerChoice()));
paperButton.addEventListener('click', () => playRound("Paper", getComputerChoice()));
scissorsButton.addEventListener('click', () => playRound("Scissors", getComputerChoice()));

