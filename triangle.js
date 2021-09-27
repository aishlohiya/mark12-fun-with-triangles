const triangleInput = document.querySelectorAll(".triangle-input");
const triangleButton = document.querySelector("#triangle-button");
const triangleOutput = document.querySelector("#triangle-output");

function sumOfTriangles(angle1, angle2, angle3) {
    const triangleSum = angle1 + angle2 + angle3;
    return triangleSum;

}
function isTriangle() {
    const sumTriangle = sumOfTriangles(Number(triangleInput[0].value),Number(triangleInput[1].value),Number(triangleInput[2].value));
    if (sumTriangle===180) {
        triangleOutput.innerText = "Yes! A triangle is formed"
    } else {
        triangleOutput.innerText = "Sorry! No triangle is formed"
    }
}

triangleButton.addEventListener("click", isTriangle);