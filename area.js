const areaInput = document.querySelectorAll(".area-input");
const areaButton = document.querySelector("#area-button");
const areaOutput = document.querySelector("#area-output");

function squareOfSides(a, b) {
    const square = a*b;
    return square;
}

function calculateArea() {
const squareResult = squareOfSides(Number(areaInput[0].value), Number(areaInput[1].value))
const areaResult = squareResult/2;
areaOutput.innerText = "The Area of a triangle is: " + areaResult;
}

areaButton.addEventListener("click", calculateArea);