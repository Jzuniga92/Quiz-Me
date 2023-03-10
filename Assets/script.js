let timeLeft = document.querySelector(".time-left");
let questionContainer = document.getElementsByClassName("question-container");
let nxtButton = document.getElementById("next");
let numberofQuestions = document.querySelector(".number-of-questions");
let Container = document.getElementsByClassName("container");
let scoreKeeper = document.getElementById("score-keeper");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startBtn = document.getElementById("start-button");
let questionCount = 6;
let scoreCount = 0;
let count = 0;
let countdown;

var questions = [
    {
        id: "0",
        question: "What is JavaScript?",
        options: ["A spell", "Lightweight interpreted programming language", "Is a magazine", "A videogame"], 
        correct: "Lightweight interpreted programming language",
        },
    {
        id: "1",
        question: "How can you create an object in Javascript?",
        options: [
         "v {name: Daniel}",
         "emp =  name: Daniel", 
         "name: Daniel",
         "var emp = { name: Daniel}; "
        ], 
        correct: "var emp = { name: Daniel};",
        },
    {    
        id: "2",
        question: "How can you create an Array in Javascript?",
        options: [
         "var = y",
         "[1, 2, 3, 4, 5]", 
         "var y = [1, 2, 3, 4, 5];",
         "[1, 2, 3, 4, 5]; = var y"
        ], 
        correct: "var y = [1, 2, 3, 4, 5];",
        },
    {    
        id: "3",
        question: "What are the data types supported by JavaScript?",
        options: [
         "Undefined, Null, Boolean, String, Symbol, Number, Object",
         "Array, Object, Number, String", 
         "Hyper, Text, Mark Up, Language",
         "x * y = 17"
        ], 
        correct: "Undefined, Null, Boolean, String, Symbol, Number, Object",
        },
    {    
        id: "4",
        question: "Is JavaScript a case-sensitive language?",
        options: [
         "No, it is not a case sensitive language",
         "You chose if it is a case sensitive language", 
         "Yes, JavaScript is a case sensitive language",
         "Sometimes a case sentive language"
        ], 
        correct: "Yes, JavaScript is a case sensitive language",
        },    
 ];

 restart.addEventListener("click",()=>{
    initial();
    Container.classlist.remove("hide");
    scoreKeeper.classList.add("hide");
 });

 nxtButton.addEventListener("click", (displayNext = () =>{
    questionCount += 1;

    if(questionCount === questions.length){

        userScore.innerHTML = "Your Score" +
        scoreCount + " Out of" + questionCount;
    }
    else{
        numberofQuestions.innerHTML = questionCount + 1 + " of " + questions.length + " Question";

       quizDisplay(questionCount);
        count = 30;
        clearInterval(countdown);
        timerDisplay();

    }
  })
 );

 const timerDisplay = () =>{
    countdown = setInterval(() =>{
    count--;
    timeLeft.innerHTML = `${count}s`;
    if(count == 0){
        clearInterval(countdown);
        displayNext();
       }
    }, 1000);
 };
 const quizDisplay = (questionCount) =>{
    let quizCards = document.querySelectorAll(".question-container");
        quizCards.forEach((card)=>{
            card.classList.add("hide");
        });
 };

 function quizCreater(){
    questions.sort(() => Math.random() - 0.5);

    for(let i of questions){
        i.options.sort(()=> Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("question-container");

        numberofQuestions.innerHTML = 1 + " of " +
        questions.length + "Question";

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.questions;
        div.appendChild(question_DIV);

        div.innerHTML += `
        <button class="answers-div" onclick="checker(this)">
        ${i.options[0]}</button>
        div.innerHTML += 
        <button class="answers-div" onclick="checker(this)">
        ${i.options[1]}</button>
        div.innerHTML += 
        <button class="answers-div" onclick="checker(this)">
        ${i.options[2]}</button>
        div.innerHTML += 
        <button class="answers-div" onclick="checker(this)">
        ${i.options[3]}</button>

        `;

        
    }
 }

 function checker (userOption){
    let userSolution = document.getElementsByClassName
    ("question-container")[questionCount];
    let options = question.querySelectorAll(".option-div");

    if(userSolution === questions[questionCount].correct){
        userOption.classList.add("correct");
        scoreCount++;
    }
    else{
        userOption.classList.add("incorrect");

        options.forEach((element) =>{
            if(element.innerText = questions[questionCount].correct){  
                element.classList.add("correct");
            }
        });
    }
 
    clearInterval(countdown);
    options.forEach((element) => {
        element.disabled = true;
    });
}

function initial(){
    questionContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 30;
    clearInterval(countdown);
    timerDisplay();
    quizCreater();
    quizDisplay(questionCount);
}

startBtn.addEventListener("click", () =>{
    startBtn.classList.add("hide");
    initial();
});

window.onload = () => {
    startBtn.classList.remove("hide");
    
}