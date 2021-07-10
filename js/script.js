var questions = 
[
    {
    question: "What tag is used to define a hyperlink, or link to another page?",
    selections: ["strong", "blockquote", "em", "a"],
    answer: "a"
    },

   {
    question: "What tag is used to define a list item (in a bulleted list)?",
    selections: ["ul", "li", "s", "u"],
    answer: "li"
    },

   {
    question: "What is the element called that is used to describe the set of variables, objects, and functions you explicitly have access to?",
    selections: ["restriction", "scope", "output level", "range"],
    answer: "scope"
    },

   {
   question: "What are the CSS properties that are used to add space around sections of content?",
   selections: ["break", "spacing", "padding", "cleaner"],
   answer: "padding"
    },

    {
    question: "What is the box called in CSS that wraps around every HTML element?",
    selections: ["float", "boundary", "box model", "wrap"],
    answer: "box model"
    },

];



var timer = 75;
var score = 0;
var index = 0;
var qa = document.getElementById("start");


var buttonclick = document.querySelector("#start");

 var startGame = function() {
questionCycle(questionIndex);
setTime();


 };


 function setTime() {
document.getElementById("timer").innerHTML = timer + "sec left";
timer--;
if (timer == -1) {
    //clearInterval("quiz");
   
    };

};

function questionCycle (questionIndex) {


    for (var i = 0; i < questions.length; i++) {
        var Q = questions[questionIndex].question;
        var A = questions[questionIndex].selections;
    };


    
};


    




buttonclick.addEventListener("click", startGame);