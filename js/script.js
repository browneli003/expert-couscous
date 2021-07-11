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
var penalty = 10;
var qa = document.getElementById("start");
var questionsDiv = document.querySelector("#questions");
var ulList = document.createElement("ul");


//window.onload = times();

 var startGame = function() {
questionCycle();
times();


 };


 function times(){
    var sec = 75;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
};



// Renders questions and choices to page: 
function questionCycle(questionIndex) {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulList.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].question;
        var userChoices = questions[questionIndex].selections;
        questionsDiv.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulList);
        ulList.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
};



function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == questions[index].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + questions[index].answer;
            // Correct condition 
        } else {
            // Will deduct -5 seconds off secondsLeft for wrong answers
            timer = timer - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[index].answer;
        }

    }
    // Question Index determines number question user is on
    index++;

    if (index >= questions.length) {
        // All done will append last page with user stats
        //Finish Quiz()
        createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);

};

    




qa.addEventListener("click", startGame);