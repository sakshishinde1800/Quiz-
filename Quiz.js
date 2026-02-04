 let QuestionObject = [
    {
        id : 'Q-1',
        question : 'What is the full-form of DOM?',
        options : ["Document Object Method",
            "Document Optional Method",
            "Document Object Method",
            "Document Object Model"],

        correctAnswer : "Document Object Model"
    },  

    {
        id : 'Q-2',
        question : 'White Light is the combination of how many colours?',
        options : [7,3,1,9],

        correctAnswer : 7
    },

    {
        id : 'Q-3',
        question : 'In which year ECMA released the most stable version of js?',
        options : [2014,2015,2016,2017],

        correctAnswer : 2015
    },

    {
        id : 'Q-4',
        question : 'In js which method is used to remove the white space present at starting od string?',
        options : ['trimstart','trimend','startswith','endwith'],

        correctAnswer : 'trimstart'
    },

    {
        id : 'Q-5',
        question : 'What is the full-form of Js',
        options : ['JavaSubject','JubgleScript','JustScript','JavaScript'],

        correctAnswer : 'JavaScript'
    },
];

// DOM references
const questionElement = document.getElementById("question");
const optionElement = document.getElementById("option");
const scoreElement = document.getElementById("score");
const btnA = document.getElementById("btnA");

// Quiz state
let score = 0;
let currentQuestion = 0;
let questionNumber = 1;
let hasAnsweredCurrent = false;

function renderScore() {
    scoreElement.textContent = `Current Score : ${score}/${QuestionObject.length}`;
}

function disableOptions() {
    const buttons = optionElement.querySelectorAll(".option-btn");
    buttons.forEach((b) => {
        b.disabled = true;
    });
}

function handleAnswer(selectedValue, correctAnswer, clickedButton) {
    if (hasAnsweredCurrent) return;
    hasAnsweredCurrent = true;

    const optionButtons = optionElement.querySelectorAll(".option-btn");

    optionButtons.forEach((btn) => {
        const value = btn.textContent;
        if (value == correctAnswer) {
            btn.classList.add("correct");
        }
    });

    if (selectedValue == correctAnswer) {
        score += 1;
        clickedButton.classList.add("correct");
    } else {
        score -= 0.25;
        clickedButton.classList.add("incorrect");
    }

    if (score < 0) score = 0;

    renderScore();
    disableOptions();
}

function showQuestion() {
    const { question, options, correctAnswer } = QuestionObject[currentQuestion];

    hasAnsweredCurrent = false;
    optionElement.textContent = "";

    questionElement.textContent = `Q${questionNumber}. ${question}`;
    renderScore();

    options.forEach((opt) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = opt;
        btn.addEventListener("click", () => handleAnswer(opt, correctAnswer, btn));
        optionElement.append(btn);
    });
}

showQuestion();

function nextQuestion() {
    if (!hasAnsweredCurrent) {
        alert("Please select an option before moving to the next question.");
        return;
    }

    currentQuestion++;

    if (currentQuestion === QuestionObject.length) {
        optionElement.textContent = "";
        questionElement.textContent = "Quiz Completed🥳";
        scoreElement.textContent = `Your Score : ${score}/${QuestionObject.length}`;
        btnA.textContent = "Restart Quiz";
        btnA.onclick = () => {
            score = 0;
            currentQuestion = 0;
            questionNumber = 1;
            btnA.textContent = "Next Question";
            showQuestion();
        };
    } else {
        questionNumber += 1;
        showQuestion();
    }
}

btnA.addEventListener("click", () => {
    nextQuestion();
});




// let emp = {
//     name : "a",
//     age : 25,
//     skill : ['Python']
// }

// let {name,age,skill} = emp;
// console.log(name);