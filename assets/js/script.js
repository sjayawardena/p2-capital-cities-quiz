/** Defining global variables to be used in functions */

const quizLength = quizQuestions.length;
let flagImage = document.getElementById("flag-image");
let questionText = document.getElementById("question-text");
let answer1Text = document.getElementById("answer-1-text");
let answer2Text = document.getElementById("answer-2-text");
let answer3Text = document.getElementById("answer-3-text");
let answer4Text = document.getElementById("answer-4-text");
let questionNumber = document.getElementById("question-number");
let scoreSoFar = document.getElementById("score-so-far");
let questionsSoFarArray = [];
let randomInt = getRandomInt(quizLength);
let currentQuestionIndex = -1; //Initalised to -1 to start from the first question
//STILL NEED TO ADD THEM FOR END SCREEN

/** Array to add randomInts to */

questionsSoFarArray.push(randomInt);

/** Functions and variables to get and display a random question */

function getRandomInt(quizLength) {
    return Math.floor(Math.random() * quizLength);
}

function showQuestion() {
    questionText.innerHTML = quizQuestions[randomInt].question;
}

showQuestion();

/** Functions to show answer options associated with question */

function showAnswerOptions() {
    answer1Text.innerHTML = quizQuestions[randomInt].options[0];
    answer2Text.innerHTML = quizQuestions[randomInt].options[1];
    answer3Text.innerHTML = quizQuestions[randomInt].options[2];
    answer4Text.innerHTML = quizQuestions[randomInt].options[3];
}

showAnswerOptions();

/** Variables and functions for checking answer and alerting */

let selectedAnswer1 = answer1Text.innerText;
let selectedAnswer2 = answer2Text.innerText;
let selectedAnswer3 = answer3Text.innerText;
let selectedAnswer4 = answer4Text.innerText;

function answer1Selected() {
    if (selectedAnswer1 === quizQuestions[randomInt].answer) {
        alert("Well done! You got it right.");
        incrementScore();
        nextQuestion()
    } else {
        alert("Sorry! You got it wrong.");
        nextQuestion()
    }
}

function answer2Selected() {
    if (selectedAnswer2 === quizQuestions[randomInt].answer) {
        alert("Well done! You got it right.");
        incrementScore();
        nextQuestion()
    } else {
        alert("Sorry! You got it wrong.");
        nextQuestion()
    }
}

function answer3Selected() {
    if (selectedAnswer3 === quizQuestions[randomInt].answer) {
        alert("Well done! You got it right.");
        incrementScore();
        nextQuestion();
    } else {
        alert("Sorry! You got it wrong.");
        nextQuestion()
    }
}

function answer4Selected() {
    if (selectedAnswer4 === quizQuestions[randomInt].answer) {
        alert("Well done! You got it right.");
        incrementScore();
        nextQuestion();
    } else {
        alert("Sorry! You got it wrong.");
        nextQuestion()
    }
}

/** Function to move onto next question */

function nextQuestion() {
    if (currentQuestionIndex < quizLength - 1) {
        let newRandomInt;
        do {
            newRandomInt = getRandomInt(quizLength);
        } while (questionsSoFarArray.includes(newRandomInt));
        currentQuestionIndex++;
        randomInt = newRandomInt;
        questionsSoFarArray.push(randomInt);
        showQuestion();
        showAnswerOptions();
    } else {
        showEndScreen();
    }
}

/** Function to increment score on correct answer */

function incrementScore() {

}

/** Function to show end screem */

function showEndScreen() {
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("end-screen").style.display = "block";
}

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