# Cat AI

![HTML](https://img.shields.io/badge/HTML-5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111)

A clean, browser-based tic-tac-toe game built with plain HTML, CSS, and JavaScript.

The project is intentionally simple: no frameworks, no build tools, no dependencies. It focuses on clear game logic, responsive layout, accessible controls, and a polished interface.

## Features

- Two-player tic-tac-toe gameplay: `X` vs `O`
- Turn indicator that updates after every valid move
- Automatic win detection across rows, columns, and diagonals
- Draw detection when the board is full
- Winning cells are visually highlighted
- Reset button to start a new match instantly
- Responsive layout for desktop and mobile screens
- Accessible button-based board with `aria-label` updates

## Demo

Open `index.html` directly in any modern browser.

No installation is required.

## Project Structure

```text
cat-ai/
├── index.html
├── script.js
├── style.css
├── .gitignore
└── README.md
```

## How It Works

The game state is stored in a 9-item array:

```js
let board = Array(9).fill("");
```

Each position represents one cell on the board. When a player clicks an empty cell:

1. The current player's mark is saved in the board array.
2. The UI is re-rendered.
3. The game checks for a winner.
4. If there is no winner, it checks for a draw.
5. If the match continues, the turn switches to the other player.

Winning combinations are defined once and reused after every move:

```js
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
```

## Tech Stack

- **HTML**: semantic structure and interactive board buttons
- **CSS**: responsive layout, visual states, hover effects, and polished styling
- **JavaScript**: game state, turn handling, win detection, draw detection, and reset behavior

## Run Locally

Clone the repository:

```bash
git clone https://github.com/JosephSanta/cat-ai.git
```

Open the project folder:

```bash
cd cat-ai
```

Then open `index.html` in your browser.

## Design Notes

- The board uses a fixed 3x3 CSS grid.
- Cells are real buttons, which keeps the game keyboard-friendly and accessible.
- Disabled cells prevent invalid moves after a position is already taken.
- The visual style uses a compact layout, strong contrast, and clear color differences between `X`, `O`, and winning cells.

## Possible Improvements

- Add a single-player mode with AI
- Add score tracking across multiple rounds
- Add difficulty levels
- Add keyboard shortcuts
- Add sound effects
- Deploy the game with GitHub Pages

## License

This project is open source and available for learning, practice, and improvement.
