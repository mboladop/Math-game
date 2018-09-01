let score = 0;
let scoreBox = document.getElementById("score");
let questionBox = document.getElementById("question");
let answerForm = document.getElementById("quizForm");

function setAdditionGame() {
    answerForm.setAttribute("data-gametype", "addition");
    additionQuiz();
}

function setSubtractionGame() {
    answerForm.setAttribute("data-gametype", "subtraction");
    subtractionQuiz();
}

function setMultiplicationGame() {
    answerForm.setAttribute("data-gametype", "multiplication");
    multiplicationQuiz();
}

function setDivisionGame() {
    answerForm.setAttribute("data-gametype", "division");
    divisionQuiz();
}

function checkAnswer(){
    let gametype= answerForm.getAttribute("data-gametype");
    if (answerForm["answer"].value == answerForm["rightAnswer"].value) {
        alert("Hey! WELL DONE!");
        score ++;
    } else {
        alert("Oh NO!!! :(");
        score --;
    }
    
    answerForm["answer"].value ="";
    scoreBox.textContent = score;
    if (gametype == "addition"){
        additionQuiz();
    } else if (gametype == "subtraction") {
        subtractionQuiz();
    } else if (gametype == "multiplication") {
        multiplicationQuiz();
    } else if (gametype == "division") {
       divisionQuiz();
    }
    return false; 
    
}

function additionQuiz(){
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    
    questionBox.textContent = "What is : " + num1+ " + " + num2+ " ?";
    answerForm["rightAnswer"].value = (num1 + num2);
}
additionQuiz();

function subtractionQuiz(){
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * num1);
    

    questionBox.textContent = "What is : " + num1+ " - " + num2 + " ?";
    answerForm["rightAnswer"].value = (num1 - num2);
}
subtractionQuiz();

function multiplicationQuiz(){
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    
    questionBox.textContent = "What is : " + num1+ " * " + num2+ " ?";
    answerForm["rightAnswer"].value = (num1 * num2);
}
multiplicationQuiz();

function divisionQuiz(){
    let num2 = Math.round((Math.random() * 50)+1);
    let num1 = Math.round((Math.random() * 50) + num2);
    
    questionBox.textContent = "What is : " + num1+ " / " + num2 + " ? (Round your answer to the nearest whole number).";
    answerForm["rightAnswer"].value = Math.round(num1 / num2);

}
divisionQuiz();