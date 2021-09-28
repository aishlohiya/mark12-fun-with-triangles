const sideInput = document.querySelectorAll(".side-input");
const sideButton = document.querySelector("#side-button");
const sideOutput = document.querySelector("#side-output");

function squareOfSides(a, b) {
    const square = a*a + b*b;
    return square;
}

function calculateSide() {
const squareResult = squareOfSides(Number(sideInput[0].value), Number(sideInput[1].value))
const squareRoot = Math.sqrt(squareResult);
sideOutput.innerText = "The lenght of Hypotenuse is: " + squareRoot;
}

sideButton.addEventListener("click", calculateSide);