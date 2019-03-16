//...define variables.............................
var userAnswer;
var correctAnswer;
var wrongAnswer;
var currentQuestion;
var score;
var usedQuestion = [];
var gameRunning = false;

//...create question objects/arrays...............

pickCategory();
//...create a function to start game...................................
var startGame = function() {
  //...create a variable for random questions to generate.................
  var randomQuestion = currentQuestion[Math.floor(Math.random() * currentQuestion.length)];
  //...change the question box dom
  $(".questionCard").text(randomQuestion.question);
  $(".answerA").html("<h1>A.</h1><p>" + randomQuestion.choices[0] + "</p>");
  $(".answerB").html("<h1>B.</h1><p>" + randomQuestion.choices[1] + "</p>");
  $(".answerC").html("<h1>C.</h1><p>" + randomQuestion.choices[2] + "</p>");
  $(".answerD").html("<h1>D.</h1><p>" + randomQuestion.choices[3] + "</p>");
  usedQuestion.push(randomQuestion.question[0]);
  gameRunning = true;
  score = 0;
  console.log("Used questions= " + usedQuestion.length);

  //..check if each answer is correct............................
  $(".answerA").click(function() {
    if (randomQuestion.choices[0] === randomQuestion.validAnswer[0]) {
      correct();
    }
    if (randomQuestion.choices[0] != randomQuestion.validAnswer[0]) {
      incorrect();
    }
  });

  $(".answerB").click(function() {
    if (randomQuestion.choices[1] === randomQuestion.validAnswer[0]) {
      correct();
    }
    if (randomQuestion.choices[1] != randomQuestion.validAnswer[0]) {
      incorrect();
    }
  });

  $(".answerC").click(function() {
    if (randomQuestion.choices[2] === randomQuestion.validAnswer[0]) {
      correct();
    }
    if (randomQuestion.choices[2] != randomQuestion.validAnswer[0]) {
      incorrect();
    }
  });

  $(".answerD").click(function() {
    if (randomQuestion.choices[3] === randomQuestion.validAnswer[0]) {
      correct();
    }
    if (randomQuestion.choices[3] != randomQuestion.validAnswer[0]) {
      incorrect();
    }
  });

  //...final score...........................................................
  if (usedQuestion.length + 1 === randomQuestion.length) {
    gameRunning = false;
  }
};

startGame();

//...create a function to add to the score
function correct() {
  alert("Correct!");
  score++;
  $(".scoreCard").html("<h1>Score: " + score + "</h1>");
  usedQuestion.push(randomQuestion);
  nextQuestion();
  console.log("Score = " + score);
  console.log("Question= " + randomQuestion);
  console.log("Used questions= " + usedQuestion.length);
}

function incorrect() {
  alert("Wrong!");
  score--;
  $(".scoreCard").html("<h1>Score: " + score + "</h1>");
  usedQuestion.push(randomQuestion);
  nextQuestion();
  console.log("Score = " + score);
  console.log("Question= " + randomQuestion);
  console.log("Used questions= " + usedQuestion.length);
}

//...Next Question Function...................................
function nextQuestion() {
 
  if (usedQuestion.includes(randomQuestion)) {
    nextQuestion();
  }
  if ((gameRunning = false)) {
    alert("You Finished! Your Score is: " + score + "!");
  } else {
    randomQuestion =historyQuestions[Math.floor(Math.random() * historyQuestions.length)];
    $(".questionCard").text(randomQuestion.question);
    $(".answerA").html("<h1>A.</h1><p>" + randomQuestion.choices[0] + "</p>");
    $(".answerB").html("<h1>B.</h1><p>" + randomQuestion.choices[1] + "</p>");
    $(".answerC").html("<h1>C.</h1><p>" + randomQuestion.choices[2] + "</p>");
    $(".answerD").html("<h1>D.</h1><p>" + randomQuestion.choices[3] + "</p>");
    usedQuestion.push(randomQuestion).textcontent;
  }
}

console.log("Question= " + randomQuestion);
console.log("Score = " + score);
