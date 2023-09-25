/** Event functions for clicks or conditions to move onto next screen
 * 'Play Game' button will bring up instructions on click
 * 'Play Game' button on instructions screen will bring up game screen on click
 * Selecting the 10th answer on game screen will bring up final screen
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

// SECTION NEEDED HERE FOR ALL FUNCTIONS RELATING TO THE ACTUAL GAME 
// THIS IS JUST A PLACEHOLDER FUNCTION TO TEST PAGE CYCLING
function showEndScreen() {
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("end-screen").style.display = "block";
}

function returnToStart() {
    document.getElementById("end-screen").style.display = "none";
    document.getElementById("intro-screen").style.display = "block";
}

