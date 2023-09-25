/** EVENT FUNCTIONS FOR CLICKS OR CONDITIONS TO MOVE ONTO NEXT SCREEN OR QUESTION
 * 'Play Game' button on intro screen will bring up instructions on click
 * 'Play Game' button on instructions screen will bring up game screen on click
 * Selecting an answer on questions shown on the game screen will bring up the next question, and finally the end screen
 * 'Play Again' button will return to intro screen
 */
function showInstructions() {
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("instructions").style.display = "block";
}

function showGameSreen() {
    document.getElementById("instructions").style.display = "none";
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

