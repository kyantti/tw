
let words = [["atlantic", "An ocean"], ["computer", "A machine"], ["laurel", "A tree"], ["square", "Public space"], ["wheel", "Great invention"], ["cherry", "A fruit"], ["boules", "A game"], ["fig tree", "A tree"], ["everest", "A mountain"], ["lightning", "Precedes thunder"], ["giraffe", "An animal"], ["luxembourg", "A country"], ["uruguay", "A country"], ["illustration", "Graphic representation"], ["excursion", "Activity in nature"], ["empanada", "From the bakery"], ["cake", "From the pastry shop"], ["school", "Place for studying"], ["race", "Competition"], ["jam", "Preserve"]];
// Word to guess
let word = "";
// Random number
let rand;
// Hidden word
let hidden = [];
// HTML element of the word
let gap = document.getElementById("word");
// Attempts counter
let attempts = 6;
// Letter buttons
let buttons = document.getElementsByClassName('letter');
// Reset button
let btnStart = document.getElementById("reset");

// ### FUNCTIONS ###

// Choose a random word
function generateWord() {
  rand = (Math.random() * 19).toFixed(0);
  word = words[rand][0].toUpperCase();
  console.log(word);
}

// Function to paint the dashes of the word
function paintDashes(num) {
  for (let i = 0; i < num; i++) {
    hidden[i] = "_";
  }
  gap.innerHTML = hidden.join("");
}

// Generate alphabet
function generateAlphabet(a, z) {
  document.getElementById("alphabet").innerHTML = "";
  let i = a.charCodeAt(0), j = z.charCodeAt(0);
  let letter = "";
  for (; i <= j; i++) {
    letter = String.fromCharCode(i).toUpperCase();
    document.getElementById("alphabet").innerHTML += "<button value='" + letter + "' onclick='attempt(\"" + letter + "\")' class='letter' id='" + letter + "'>" + letter + "</button>";
    if (i == 110) {
      document.getElementById("alphabet").innerHTML += "<button value='Ñ' onclick='attempt(\"Ñ\")' class='letter' id='" + letter + "'>Ñ</button>";
    }
  }
}

// Check attempt
function attempt(letter) {
document.getElementById(letter).disabled = true;
if (word.indexOf(letter) != -1) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == letter) hidden[i] = letter;
  }
  gap.innerHTML = hidden.join("");
  document.getElementById("correct").innerHTML = "Correct!";
  document.getElementById("correct").className += "correct green";
} else {
  attempts--;
  document.getElementById("attempts").innerHTML = attempts;
  document.getElementById("correct").innerHTML = "Wrong!";
  document.getElementById("correct").className += "correct red";
  document.getElementById("image" + attempts).className += "fade-in";
}
setTimeout(function () {
  document.getElementById("correct").className = "";
}, 800);
checkEnd(); // Call the function after checking the attempt
}

// Get hint
function hint() {
  document.getElementById("hint-space").innerHTML = words[rand][1];
}

// Check if it has ended
function checkEnd() {
if (hidden.indexOf("_") == -1 || attempts == 0) {
  let finalMessage = (hidden.indexOf("_") == -1) ? "Congratulations!!" : "Game Over. The correct word was: " + word;
  document.getElementById("final-message").innerHTML = finalMessage;
  document.getElementById("final-message").className += "zoom-in";
  document.getElementById("word").className += " frame";
  for (const element of buttons) {
    element.disabled = true;
  }
  document.getElementById("reset").innerHTML = "Start";
  btnStart.onclick = function () { location.reload() };
}
}

// Reset game
function start() {
  generateWord();
  paintDashes(word.length);
  generateAlphabet("a", "z");
  attempts = 6;
  document.getElementById("attempts").innerHTML = attempts;
}

// Initialize
window.onload = start();
