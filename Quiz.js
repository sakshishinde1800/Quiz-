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

let questionElement = document.getElementById("question");
let optionElement = document.getElementById("option");
let scoreElement = document.getElementById("score");
let btnA = document.getElementById("btnA");

let score = 0;
let currentQuetion = 0;

let number = 1;

function showQuetion(){

    //! Object Destucturing------
    
    let {question,options,correctAnswer} = QuestionObject[currentQuetion];

    questionElement.textContent= `Q${number}.${question}`;

    //! loading option botton----
    options.map((opt)=>{
        let btn = document.createElement('button');
        btn.setAttribute("i","btn");
        btn.textContent = opt;
        optionElement.append(btn)

       scoreElement.textContent = `Current Score : ${score}/${QuestionObject.length}`;
       btn.addEventListener("click",()=>{
        if (opt==correctAnswer){
            score+=1;
        }
        else{
            score-=0.25
        }
        //console.log(score);

        nextQuetion();
       })
       

    })

}
showQuetion();

function nextQuetion(){
    currentQuetion++;
    optionElement.textContent=''
    if(currentQuetion==QuestionObject.length){
        questionElement.textContent = "Quiz Completed🥳"
        scoreElement.textContent = `Your Score :${score}/${QuestionObject.length}`;
        btnA.style.display='None';
    }
    else{
        number+=1
        showQuetion();
    }
}

btnA.addEventListener("click",()=>{
    nextQuetion()
})




// let emp = {
//     name : "a",
//     age : 25,
//     skill : ['Python']
// }

// let {name,age,skill} = emp;
// console.log(name);