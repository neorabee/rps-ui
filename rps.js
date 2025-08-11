function computerChoice() {
    let play = Math.floor(Math.random() * 3);
    if (play === 0) {
        let ans = "ROCK";
        console.log(" ======== Computer played :", ans, "========");
        return ans;
    } else if (play === 1) {
        let ans = "PAPER";
        console.log(" ======== Computer played :", ans, "=========");
        return ans;
    } else {
        let ans = "SCISSORS";
        console.log(" ======== Computer played :", ans, "=========");
        return ans;
    }
}

let playersChoice = "";
let playerScore2 = 0;
let computerScore2 = 0;
let roundNumber = 2;

function playerChoice() {
    const buttons = document.querySelectorAll('.rpsButtons .choice');
    buttons.forEach(choice => {
        choice.addEventListener("click", () => {
            playersChoice = choice.textContent.trim(); 
            console.log(`${playersChoice} was chosen`);
            playRound();
        });
    });
}

function playRound() {
    const playerScore1 = document.querySelector(".playerScore");
    const computerScore1 = document.querySelector(".computerScore");
    const round = document.querySelector(".rounds");
    const result = document.querySelector(".result");

    round.textContent = `Round ${roundNumber}`;

    let value1 = computerChoice();
    let value2 = playersChoice;

    if (value1 === value2) {
        result.textContent = "RESULT = DRAW";
    } else if (
        (value1 === "ROCK" && value2 === "PAPER") ||
        (value1 === "PAPER" && value2 === "SCISSORS") ||
        (value1 === "SCISSORS" && value2 === "ROCK")
    ) {
        result.textContent = "RESULT = WIN";
        playerScore2++;
        playerScore1.textContent = `Your Score = ${playerScore2}`;
    } else {
        result.textContent = "RESULT = LOSE";
        computerScore2++;
        computerScore1.textContent = `Computer's Score = ${computerScore2}`;
    }

    roundNumber++;

    if (playerScore2 === 5) {
        alert("You Won the Game!");
    } else if (computerScore2 === 5) {
        alert("Computer Won the Game!");
    }
}

playerChoice();



