// This is a test
function getTest(){
    console.log("test");
}

getTest();

const testButton = document.getElementById("test-button");
const resultsSpan = document.getElementById("test-span");
function testToSpan(){
    resultsSpan.innerHTML += "test</br>";
}

testButton.addEventListener('click', () => {
    testToSpan();
}
