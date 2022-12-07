let btns = document.querySelectorAll(".btn");
let computerChoice = document.querySelector(".computer-choice");
let playerChoice = document.querySelector(".player-choice");
let result = document.querySelector(".result");

let player;
let computer;
let resultText;

function computerPlay() {
  let option = ["paper", "scissors", "rock"];
  let index = Math.floor(Math.random() * 3);
  computer = option[index];
}

btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    player = btn.textContent;
    computerPlay();
    playerChoice.innerHTML = player;
    computerChoice.innerHTML = computer;
    result.textContent = checkWinner();
  })
);
let computerScore = 0;
let playerScore = 0;
function checkWinner() {
  if (playerScore < 5 && computerScore < 5) {
    if (player == computer) {
      computerScore++;
      playerScore++;
      return `Draw! The score is ${playerScore}:${computerScore}`;
    } else {
      if (player == "paper") {
        if (computer == "rock") {
          playerScore++;
          return `You Won! The score is ${playerScore}:${computerScore}`;
        } else if (computer == "scissors") {
          computerScore++;
          return `You Lose! The score is ${playerScore}:${computerScore}`;
        }
      } else if (player == "scissors") {
        if (computer == "paper") {
          playerScore++;
          return `You Won! The score is ${playerScore}:${computerScore}`;
        } else if (computer == "rock") {
          computerScore++;
          return `You Lose! The score is ${playerScore}:${computerScore}`;
        }
      } else if (player == "rock") {
        if (computer == "scissors") {
          playerScore++;
          return `You Won! The score is ${playerScore}:${computerScore}`;
        } else if (computer == "paper") {
          computerScore++;
          return `You Lose! The score is ${playerScore}:${computerScore}`;
        }
      }
    }
  } else if ((computerScore = 5 && playerScore < 5)) {
    alert(`You Lose! The final score is ${playerScore}:5`);
    confirm("Shall we play again?");
    reset();
  } else if ((playerScore = 5 && computerScore < 5)) {
    alert(`You Won! The final score is 5:${computerScore} `);
    prompt("Shall we play again?");
    reset();
  }
}

function reset() {
  computerScore = 0;
  playerScore = 0;
  playerChoice.innerHTML = "";
  computerChoice.innerHTML = "";
}
