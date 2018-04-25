let score = 0;
let scorebox = document.getElementById("score");
let questionBox = document.getElementById("question");
let answerForm = document.getElementById("quizForm");

/* Math.random() 0 0.566 
x50 = 23.8
Math.floor()= 23*/

function additionQuiz(){
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    
    questionBox.textContent = "What is : " + num1+ " + " + num2+ " ?";
    answerForm["rightAnswer"].value = (num1 + num2);
}

additionQuiz();