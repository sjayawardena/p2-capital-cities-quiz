/** DEFINING GLOBAL VARIABLES TO BE USED IN FUNCTIONS */

const quizLength = quizQuestions.length;
let flagImage = document.getElementById("flag-image");
let questionText = document.getElementById("question-text");
let answer1Text = document.getElementById("answer-1-text");
let answer2Text = document.getElementById("answer-2-text");
let answer3Text = document.getElementById("answer-3-text");
let answer4Text = document.getElementById("answer-4-text");
let questionNumber = document.getElementById("question-number");
let scoreSoFar = document.getElementById("score-so-far");
//STILL NEED TO ADD THEM FOR END SCREEN


/** Functions to get and display a random question */

function getRandomInt(quizLength) {
    return Math.floor(Math.random() * quizLength);
}

let randomInt = getRandomInt(quizLength);

function showQuestion() {
    questionText.innerHTML = quizQuestions[randomInt].question;
}

showQuestion()

/** Functions to show answer options associated with question */

function showAnswerOptions() {
    answer1Text.innerHTML = quizQuestions[randomInt].options[0];
    answer2Text.innerHTML = quizQuestions[randomInt].options[1];
    answer3Text.innerHTML = quizQuestions[randomInt].options[2];
    answer4Text.innerHTML = quizQuestions[randomInt].options[3];
}

showAnswerOptions()













/** FUNCTIONS FOR SHOWING/HIDING SCREENS 
 * Currently commented out.


function showGameSreen() {
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
}

++PUT IN APPROPRIATE IF CONDITION FOR 12TH QUESTION++
function showEndScreen() {
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("end-screen").style.display = "block";
}

function returnToStart() {
    location.reload();
}

*/