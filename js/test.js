// This is a test
function getTest() {
    console.log("test");
}

getTest();

const testButton = document.getElementById("test-button");
const resultsSpan = document.getElementById("test-span");
function testToSpan(){
    resultsSpan.innerHTML += "</br>test";
}

testButton.addEventListener('click', () => {
    testToSpan();
});

// Add function to generate a tic tac toe board on click
const tictacButton = document.getElementById("tictac-button");
const tictactoeBoard = document.getElementById("tictactoe-board-span");

// Allow user to place X or O on the board
let currentPlayer = 'X';
let boardState = Array(9).fill(null); // To keep track of the board's state

function createBoard(){
    let boardHTML = '<div class="tictactoe-grid">';
    for (let i = 0; i < 9; i++) {
        boardHTML += `<div class="tictactoe-cell" data-cell-index="${i}">0</div>`;
    }
    boardHTML += '</div>';
    tictactoeBoard.innerHTML = boardHTML;
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

            if (checkWin(currentPlayer)) {
                setTimeout(() => {
                    alert(`${currentPlayer} wins!`);
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
}
