
//...define variables..........................................................
var selectedAnswer;
var correctAnswer;
var wrongAnswer;
var currentQuestion;
var score = 0;
var gameRunning = false;
var isTimerRunning = false;
var timer = 15;
var intervalId;
var count = 0;

//...create question objects/arrays.............................................
var historyQuestions = [
  {
    question: "When was the Declaration of Independence signed?",
    choices: ["July 2, 1776", "July 4, 1776", "August 2, 1776", "July 4, 1775"],
    validAnswer: 'C'
  },
  {
    question: "Which of the following Presidents did NOT die in office?",
    choices: [
      "William Henry Harris",
      "Zachary Taylor",
      "William McKinley",
      "Benjamin Harrison"
    ],
    validAnswer: 'D'
  },
  {
    question: "When was the attack on pearl harbor?",
    choices: [
      "December 7, 1941",
      "December 7, 1942",
      "December 9, 1942",
      "December 9, 1941"
    ],
    validAnswer: 'A'
  }
];

//...Choose a current question..................................................
function chooseCategory () {
    currentQuestion = historyQuestions[count];
    currentQuestionLength = historyQuestions.length;
    console.log(currentQuestion.question);
}

//...question Count/next question..........................................................
function nextQuestion() {
if (currentQuestionLength === count) {
        finalscore();
    } else {
    count++;
    chooseCategory();
    displayQuestion();
    console.log(count);
}

}





//...display question.............................................................
function displayQuestion() { 
    $(".questionCard").text(currentQuestion.question);
    $(".answerA").html("<h1>A.</h1><p>" + currentQuestion.choices[0] + "</p>");
    $(".answerB").html("<h1>B.</h1><p>" + currentQuestion.choices[1] + "</p>");
    $(".answerC").html("<h1>C.</h1><p>" + currentQuestion.choices[2] + "</p>");
    $(".answerD").html("<h1>D.</h1><p>" + currentQuestion.choices[3] + "</p>");
    // intervalId = setInterval(questionTimer, 1000);
    isTimerRunning = true;

};




//....on click functions check............................................................
$(".answerA").click(function() {
    selectedAnswer = 'A';
    if (selectedAnswer === currentQuestion.validAnswer) {
      correct();
      nextQuestion();
    }
    if (selectedAnswer != currentQuestion.validAnswer) {
      incorrect();
      nextQuestion();
    }
  });

  $(".answerB").click(function() {
    selectedAnswer = 'B';
    if (selectedAnswer === currentQuestion.validAnswer) {
      correct();
      nextQuestion();
    }
    if (selectedAnswer != currentQuestion.validAnswer) {
      incorrect();
      nextQuestion();
    }
  });

  $(".answerC").click(function() {
    selectedAnswer = 'C';
    if (selectedAnswer === currentQuestion.validAnswer) {
      correct();
      nextQuestion();
    }
    if (selectedAnswer != currentQuestion.validAnswer) {
      incorrect();
      nextQuestion();
    }
  });

  $(".answerD").click(function() {
    selectedAnswer = 'D';
    if (selectedAnswer === currentQuestion.validAnswer) {
      correct();
      nextQuestion();
    }
    if (selectedAnswer != currentQuestion.validAnswer) {
      incorrect();
      nextQuestion();
    }
  });

//...create a function to add to the score
function correct() {
    alert("Correct!");
    score++;
    $(".scoreCard").html("<h1>Score: " + score + "</h1>");
  }
  
  function incorrect() {
    alert("Wrong!");
    score--;
    $(".scoreCard").html("<h1>Score: " + score + "</h1>");
  }

function finalscore() {
    alert("Final Score: " + score + "!");
}

chooseCategory();
displayQuestion();
