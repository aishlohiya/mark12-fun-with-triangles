const quizForm = document.querySelector(".quiz-form");
const quizButton = document.querySelector("#quiz-button");
const quizOutput = document.querySelector("#quiz-output")

const quizAnswers = ["90°","Right angled" ]

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