const quizForm = document.querySelector(".quiz-form");
const quizButton = document.querySelector("#quiz-button");
const quizOutput = document.querySelector("#quiz-output")

const quizAnswers = ["90°","Right angled","one right angle","12, 16, 20","Equilateral triangle","100°","30°","a + b + c","no","45°", ]

function quizQuestions() {
    let score = 0;
    let index = 0;
    const formAnswers = new FormData(quizForm); 
    for (let value of formAnswers.values()){
        if (value === quizAnswers[index]) {
            score = score + 1;
        } else {
            score = score - 1;
        }
    } index = index + 1;
    quizOutput.innerText = "Your score is: " + score;
}

quizButton.addEventListener("click", quizQuestions)