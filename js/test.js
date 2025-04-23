// This is a test
function getTest() {
    console.log("test");
}

getTest();

const testButton = document.getElementById("test-button");
const resultsSpan = document.getElementById("test-span");
<<<<<<< HEAD
function testToSpan() {
    resultsSpan.innerHTML += "test</br>";
=======
function testToSpan(){
    resultsSpan.innerHTML += "</br>test";
>>>>>>> 4ed589a (Added Tic Tac Toe board)
}

testButton.addEventListener('click', () => {
    testToSpan();
});

// Add function to generate a tic tac toe board on click
const tictacButton = document.getElementById("tictac-button");
const tictactoeBoard = document.getElementById("tictactoe-board-span");

function createBoard(){
    tictactoe-board-span.innerHTML = """
   |   |   
---+---+---
   |   |   
---+---+---
   |   |   
"""
}

tictacButton.addEventListener('click', createBoard());
