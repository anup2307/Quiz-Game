var generateBtn = document.querySelector("#start");
var welcomenote = document.querySelector(".welcome");
var questionsdisplay = document.querySelector("#questions");
var ptagquestion = document.querySelector("#question");
var option1display = document.querySelector("#option1");
var option2display = document.querySelector("#option2");
var option3display = document.querySelector("#option3");
var option4display = document.querySelector("#option4");
var h1tag = document.querySelector("#h1tag");
var answerdisplay = document.querySelector("#answertag");
var finalscoredisplay = document.querySelector("#finalscore");
var ptagscore = document.querySelector("#highscore");
var submit = document.querySelector("#submit");
var timeLeft= 75;
var i=0;
var timeInterval;

var questions = [
    {
    question : "Commonly used Data types do not include?",
    answers: [
        {option:"Strings", value: false },
        {option:"Booleans", value: false},
        {option:"Alerts", value: true},
        {option:"Numbers", value:false}
    ]
    },
    {
        question: "Arrays in Javascript is used to store",
        answers: [
            {option:"booleans", value:false},
            {option:"numberandstrings", value:false},
            {option:"otherarrays", value:false},
            {option:"alloftheabove", value:true}
        ]
    },
    {
        question: "The condition If/Else statement is enclosed within",
        answers:[
            {option:"curlybrackets", value:true},
            {option:"squarebrackets", value:false},
            {option:"paranthesis", value:false},
            {option:"quotes",value:false}
            ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers:[
            {option:"scripting", value:false},
            {option:"js", value:false},
            {option:"script", value:true},
            {option:"javascript", value:false}
        ]
    },
    {
        question:"How do you write 'Hello World' in an alert box?",
        answers :[
            {option:"msgbox('Hello World')", value:false},
            {option:"alert('Hello World')", value:true},
            {option:"alertbox('Hello World')", value:false},
            {option:"msg('Hello World')", value:false}
        ]
    }
]

questionsdisplay.style.display = "none";
finalscoredisplay.style.display = "none";

function populatevalues(){
      ptagquestion.innerHTML = questions[i].question;
    option1display.innerHTML= questions[i].answers[0].option;
    option2display.innerHTML=questions[i].answers[1].option;
    option3display.innerHTML=questions[i].answers[2].option;
    option4display.innerHTML=questions[i].answers[3].option;
    
    option1display.setAttribute("style", "background-color:purple; width:150px; color:white; border-radius:10px");
    option2display.setAttribute("style", "background-color:purple; width:150px; color:white; border-radius:10px");
    option3display.setAttribute("style", "background-color:purple; width:150px; color:white; border-radius:10px");
    option4display.setAttribute("style", "background-color:purple; width:150px; color:white; border-radius:10px");

    document.querySelectorAll('#choicelist').forEach(occurence => {
        occurence.addEventListener('click', checkanswers);
    } ); 
}

function checkanswers(event){
    var clickedbutton = event.target.innerHTML;
    var clickedbuttonvalue;
    for (var j=0; j<4; j++){
         if (clickedbutton===questions[i].answers[j].option){
            clickedbuttonvalue = questions[i].answers[j].value;
         }
    }

    if (clickedbuttonvalue)
    {
            answerdisplay.textContent = "Correct";
            answerdisplay.setAttribute("style","color:gray; font-size:20px; margin-left: 0px;");
            i++;
            if (i< questions.length){
                populatevalues();
            }
    }else
        {
        timeLeft= timeLeft-10;
        document.getElementById("h4tag").innerText = "Time Left: " + timeLeft;
        answerdisplay.textContent = "Wrong";
        answerdisplay.setAttribute("style","color:gray; font-size:20px; margin-left: 0px;");
        i++;
        if (i< questions.length){
            populatevalues();
        }
    }
    
    if (i===questions.length){ 
        clearInterval(timeInterval);
        finalscoredisplay.style.display = "block";
        ptagscore.textContent = "Your final score: " + timeLeft;
        questionsdisplay.style.display = "none";
        var initial = document.querySelector("#initial");
      
        submit.addEventListener("click",function(event){
            event.preventDefault();

            var scorearray = {
                initialvalue : initial.value,
                score: timeLeft
            }
            localStorage.setItem("scoredetails", JSON.stringify(scorearray));
            // var initialvalue = initial.value;
            // var score = timeLeft;
            // var scorearray=[];
            // scorearray.push(initialvalue,score);
            // localStorage.setItem("scoredetails", JSON.stringify(scorearray));

            // localStorage.setItem("initial",initial.value);
            // localStorage.setItem("score",timeLeft);
            window.location.href="index1.html";
        });
    }
}

function startquiz(){  

    welcomenote.style.display = "none";
    questionsdisplay.style.display = "block";
    populatevalues();

    timeInterval = setInterval(function () {
        timeLeft--;    
        document.getElementById("h4tag").innerText = "Time Left: " + timeLeft;
        if(timeLeft === 0){
          clearInterval(timeInterval);
        }
    }, 1000);
}

generateBtn.addEventListener("click",startquiz);

