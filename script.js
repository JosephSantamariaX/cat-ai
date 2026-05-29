const cells = Array.from(document.querySelectorAll(".cell"));
const currentPlayerText = document.querySelector("#current-player");
const statusText = document.querySelector("#status");
const resetButton = document.querySelector("#reset");

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let board = Array(9).fill("");
let currentPlayer = "X";
let finished = false;

function render() {
  cells.forEach((cell, index) => {
    const value = board[index];
    cell.textContent = value;
    cell.className = "cell";
    cell.disabled = finished || Boolean(value);

    if (value) {
      cell.classList.add(value.toLowerCase());
      cell.setAttribute("aria-label", `Casilla ${index + 1}: ${value}`);
    } else {
      cell.setAttribute("aria-label", `Casilla ${index + 1}`);
    }
  });

  currentPlayerText.textContent = currentPlayer;
}

function getWinner() {
  for (const line of winningLines) {
    const [a, b, c] = line;

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { player: board[a], line };
    }
  }

  return null;
}

function finishGame(message, line = []) {
  finished = true;
  statusText.textContent = message;
  line.forEach((index) => cells[index].classList.add("win"));
  cells.forEach((cell) => {
    cell.disabled = true;
  });
}

function play(index) {
  if (finished || board[index]) {
    return;
  }

  board[index] = currentPlayer;
  const winner = getWinner();

  render();

  if (winner) {
    finishGame(`Ganó ${winner.player}`, winner.line);
    return;
  }

  if (board.every(Boolean)) {
    finishGame("Empate");
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  currentPlayerText.textContent = currentPlayer;
  statusText.textContent = `Sigue ${currentPlayer}`;
}

function resetGame() {
  board = Array(9).fill("");
  currentPlayer = "X";
  finished = false;
  statusText.textContent = "Juegan X y O";
  render();
}

cells.forEach((cell) => {
  cell.addEventListener("click", () => play(Number(cell.dataset.index)));
});

resetButton.addEventListener("click", resetGame);

render();
