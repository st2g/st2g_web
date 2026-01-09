// This is a test
// function getTest() {
//     console.log("test");
// }

// getTest();

// const testButton = document.getElementById("test-button");
// const resultsSpan = document.getElementById("test-span");
// function testToSpan(){
//    resultsSpan.innerHTML += "</br>test";
// }

// testButton.addEventListener('click', () => {
//    testToSpan();
// });

// Add function to generate a tic tac toe board on click
const tictacButton = document.getElementById("tictac-button");
const tictactoeBoard = document.getElementById("tictactoe-board-span");
const tictactoePlayer = document.getElementById("tictactoe-player-span");

// Allow user to place X or O on the board
let currentPlayer = 'X';
let boardState = Array(9).fill(null); // To keep track of the board's state
let movesX = [];
let movesO = [];
let tttTurns = 0;

function createBoard(){
    let boardHTML = '<div class="tictactoe-grid">';
    for (let i = 0; i < 9; i++) {
        boardHTML += `<div class="tictactoe-cell" data-cell-index="${i}">0</div>`;
    }
    boardHTML += '</div>';
    tictactoeBoard.innerHTML = boardHTML;
    tictactoePlayer.innerHTML = "Player: " + currentPlayer;
}

tictacButton.addEventListener('click', () => {
    createBoard();
    resetGame();
});

tictactoeBoard.addEventListener('click', (event) => {
    const clickedCell = event.target;
    if (clickedCell.classList.contains('tictactoe-cell')) {
        const cellIndex = parseInt(clickedCell.dataset.cellIndex);

        if (boardState[cellIndex] === null) { // Only allow placing if the cell is empty
            clickedCell.textContent = currentPlayer;
            boardState[cellIndex] = currentPlayer;

            const currentMoves = currentPlayer === 'X' ? movesX : movesO;
            currentMoves.push(cellIndex);

            if (currentMoves.length > 3) {
                const removedIndex = currentMoves.shift();
                boardState[removedIndex] = null;
                const removedCell = document.querySelector(`.tictactoe-cell[data-cell-index="${removedIndex}"]`);
                if (removedCell) removedCell.textContent = '';
            }
            tttTurns += 1;

            if (checkWin(currentPlayer)) {
                setTimeout(() => {
                    alert(`${currentPlayer} wins after ${tttTurns} turns!`);
                    resetGame();
                }, 100);
                return;
            }

            if (boardState.every(cell => cell !== null)) {
                setTimeout(() => {
                    alert("It's a draw!");
                    resetGame();
                }, 100);
                return;
            }

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch player
            tictactoePlayer.innerHTML = "Player: " + currentPlayer;
        }
    }
});

function checkWin(player) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winPatterns.some(pattern => {
        return pattern.every(index => {
            return boardState[index] === player;
        });
    });
}

function resetGame() {
    boardState.fill(null);
    document.querySelectorAll('.tictactoe-cell').forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X';
    movesX = [];
    movesO = [];
}
