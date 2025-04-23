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

function createBoard(){
    tictactoeBoard.innerHTML = "<pre>
   |   |   
---+---+---
   |   |   
---+---+---
   |   |   
</pre>";
}

tictacButton.addEventListener('click', createBoard());
