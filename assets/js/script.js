/** FUNCTIONS FOR CLICKS OR CONDITIONS TO MOVE ONTO NEXT SCREEN OR IN-GAME QUESTION
 * 'Play Game' button on intro screen will bring up game screen on click
 * Selecting an answer on questions shown on the game screen will bring up the next question, and finally the end screen
 * 'Play Again' button will return to intro screen
 */

function showGameSreen() {
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
}

function showQuestion2() {
    document.getElementById("usa-question").style.display = "none";
    document.getElementById("uk-question").style.display = "block";
}

function showQuestion3() {
    document.getElementById("uk-question").style.display = "none";
    document.getElementById("egypt-question").style.display = "block";
}

function showQuestion4() {
    document.getElementById("egypt-question").style.display = "none";
    document.getElementById("japan-question").style.display = "block";
}

function showQuestion5() {
    document.getElementById("japan-question").style.display = "none";
    document.getElementById("india-question").style.display = "block";
}

function showQuestion6() {
    document.getElementById("india-question").style.display = "none";
    document.getElementById("morocco-question").style.display = "block";
}

function showQuestion7() {
    document.getElementById("morocco-question").style.display = "none";
    document.getElementById("croatia-question").style.display = "block";
}

function showQuestion8() {
    document.getElementById("croatia-question").style.display = "none";
    document.getElementById("philippines-question").style.display = "block";
}

function showQuestion9() {
    document.getElementById("philippines-question").style.display = "none";
    document.getElementById("sri-lanka-question").style.display = "block";
}

function showQuestion10() {
    document.getElementById("sri-lanka-question").style.display = "none";
    document.getElementById("burkina-faso-question").style.display = "block";
}

function showQuestion11() {
    document.getElementById("burkina-faso-question").style.display = "none";
    document.getElementById("suriname-question").style.display = "block";
}

function showQuestion12() {
    document.getElementById("suriname-question").style.display = "none";
    document.getElementById("sudan-question").style.display = "block";
}

function showEndScreen() {
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("end-screen").style.display = "block";
}

function returnToStart() {
    document.getElementById("end-screen").style.display = "none";
    document.getElementById("intro-screen").style.display = "block";
}

/** FUNCTIONS TO RECOGNISE CORRECT ANSWER AND INCREMENT SCORE
 * commented out as it stops screens switching currently

function correctAnswer() {
    let correctAnswer = document.getElementsByClassName("correct-answer");
    correctAnswer.addEventListener("click", incrementScore);
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score-so-far").innerText);
    document.getElementById("score-so-far").innerText = ++oldScore;
}

 */

/** FUNCTION FOR ALERTS FOR INCORRECT OR CORRECT ANSWERS
 * commented out as it stops screens switching currently
function alerts() {
    let correctAnswer = document.getElementsByClassName("correct-answer");
    correctAnswer.addEventListener(click);
    let incorrectAnswer = document.getElementsByClassName("incorrect-answer");
    incorrectAnswer.addEventListener(click);
    if (correctAnswer) {
        alert("Well done! That is the correct answer.");
    } else if (incorrectAnswer) {
        alert("Tough luck! That answer is incorrect.");
    }
}
*/

/** FUNCTION FOR DISPLAYING FINAL SCORE AND APPROPRIATE END MESSAGE
 * commented out as it stops screens switching currently
function finalScore() {
    document.getElementById("final-score").innerHTML = document.getElementById("final-score").innerHTML("score-so-far")
}

function endMessage()
let endScore = document.getElementById("final-score").innerHTML;
if (endScore >= 0 && endScore <= 4) {
    document.getElementById("end-message").innerHTML = "Better luck next time!"
} else if (endScore >= 5 && endScore <= 8) {
    document.getElementById("end-message").innerHTML = "Good effort!"
} else if (endScore >= 5 && endScore <= 8) {
    document.getElementById("end-message").innerHTML = "Well done!"
}

*/