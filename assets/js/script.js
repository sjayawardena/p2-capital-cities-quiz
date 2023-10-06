/** Defining global variables to be used in functions */

const quizLength = quizQuestions.length; //sets length of the quiz at 12 questions
let flagImage = document.getElementById("flag-image"); //variable for relevant country flag image
let questionText = document.getElementById("question-text"); // variable for randomly selected question from set-questions.js array
let answer1Text = document.getElementById("answer-1-text"); // varible for first answer option linked to randomly selected question from set-questions.js array
let answer2Text = document.getElementById("answer-2-text"); // varible for second answer option linked to randomly selected question from set-questions.js array
let answer3Text = document.getElementById("answer-3-text"); // varible for third answer option linked to randomly selected question from set-questions.js array
let answer4Text = document.getElementById("answer-4-text"); // varible for fourth answer option linked to randomly selected question from set-questions.js array
let questionNumber = document.getElementById("question-number"); //variable for displaying question number/progress
let scoreSoFar = document.getElementById("score-so-far"); // variable for displaying score so far during quiz
let finalScore = document.getElementById("final-score"); // variable for displaying final score
let endMessage = document.getElementById("end-message"); // variable for displaying message at end based on score
let questionsSoFarArray = []; // Array to add currentQuestionIndex to 
let currentQuestionIndex = getRandomInt(); // assign the getRandomInt() function to currentQuestionIndex variable

/** Function to show game screen after intro screen
 * This is called via onclick attribute in index.html
 */

function showGameSreen() {
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
}

/** Functions and variables to get and display a random question
 * along with the correct country flag
 */

function getRandomInt(quizLength) {
    return Math.floor(Math.random() * quizLength);
}

nextQuestion(); // this function is defined further down

function showQuestion() {
    questionText.innerHTML = quizQuestions[currentQuestionIndex].question;
    flagImage.src = quizQuestions[currentQuestionIndex].flag;
    flagImage.alt = quizQuestions[currentQuestionIndex].alt;
}

/** Functions to show answer options associated with question */

function showAnswerOptions() {
    answer1Text.innerHTML = quizQuestions[currentQuestionIndex].options[0];
    answer2Text.innerHTML = quizQuestions[currentQuestionIndex].options[1];
    answer3Text.innerHTML = quizQuestions[currentQuestionIndex].options[2];
    answer4Text.innerHTML = quizQuestions[currentQuestionIndex].options[3];
}

showAnswerOptions();

/** Variables and functions for checking answer and alerting 
 * answer1Selected(), answer2Selected(), answer3Selected() and answer4Selected() functions are
 * all called via onclick attributes in index.html
 */

function answer1Selected() {
    let selectedAnswer1 = answer1Text.innerText;
    if (selectedAnswer1 === quizQuestions[currentQuestionIndex].answer) {
        alert("Well done! You got it right.");
        incrementScore();
    } else {
        alert("Sorry! You got it wrong.");
    }
    nextQuestion();
}

function answer2Selected() {
    let selectedAnswer2 = answer2Text.innerText;
    if (selectedAnswer2 === quizQuestions[currentQuestionIndex].answer) {
        alert("Well done! You got it right.");
        incrementScore();
    } else {
        alert("Sorry! You got it wrong.");
    }
    nextQuestion();
}

function answer3Selected() {
    let selectedAnswer3 = answer3Text.innerText;
    if (selectedAnswer3 === quizQuestions[currentQuestionIndex].answer) {
        alert("Well done! You got it right.");
        incrementScore();
    } else {
        alert("Sorry! You got it wrong.");
    }
    nextQuestion();
}

function answer4Selected() {
    let selectedAnswer4 = answer4Text.innerText;
    if (selectedAnswer4 === quizQuestions[currentQuestionIndex].answer) {
        alert("Well done! You got it right.");
        incrementScore();
    } else {
        alert("Sorry! You got it wrong.");
    }
    nextQuestion();
}

/** Function to move onto next question */

function nextQuestion() {
    if (questionsSoFarArray.length < 12) {
        do {
            currentQuestionIndex = getRandomInt(quizLength);
        } while (questionsSoFarArray.includes(currentQuestionIndex));
        questionsSoFarArray.push(currentQuestionIndex);
        showQuestion();
        showAnswerOptions();
        incrementQuestionNumber();
    } else {
        showEndScreen();
    }
}

/* Function to increment question number */

function incrementQuestionNumber() {
    let oldQuestionNumber = parseInt(questionNumber.innerText);
    questionNumber.innerText = ++oldQuestionNumber;
}

/** Function to increment score on correct answer */

function incrementScore() {
    let oldScore = parseInt(scoreSoFar.innerText);
    scoreSoFar.innerText = ++oldScore;
}

/** Functions for moving to end screen, and returning to start
 * showEndScreen() function is called via onclick attribute in index.html
 * returnToStart() function is called via onclick attribute in index.html 
 */

function showEndScreen() {
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("end-screen").style.display = "block";
    finalScore.innerText = scoreSoFar.innerText;
    showEndMessage();
}

function returnToStart() {
    location.reload();
}

/** Function for showing relevant message at end based on score ranges */
function showEndMessage() {
    let displayedFinalScore = parseInt(finalScore.innerText);
    if (displayedFinalScore <= 4) {
        endMessage.innerText = "Tough luck!";
    } else if (displayedFinalScore > 4 && displayedFinalScore < 9) {
        endMessage.innerText = "Good effort!";
    } else if (displayedFinalScore > 8 && displayedFinalScore < 13) {
        endMessage.innerText = "Well done!";
    }
}