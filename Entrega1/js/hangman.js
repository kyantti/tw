let word = "";
let hidden = [];
let gap = document.getElementById("word");
let attempts = 6;
let buttons = document.getElementsByClassName('letter');
let btnStart = document.getElementById("reset");

async function getWordFromServer() {
    const response = await fetch('https://programacion-cum.unex.es/diccionario.php');
    if (!response.ok) {
        throw new Error('Error al cargar el diccionario');
    }
    const data = await response.json();
    return { word: data.Palabra.toUpperCase(), hint: data.Definicion };
}

async function generateWordAndHint() {
    try {
        const data = await getWordFromServer();
        word = data.word;
        document.getElementById("hint-space").innerHTML = data.hint;
        paintDashes(word.length);
    } catch (error) {
        console.error(error);
    }
}

function paintDashes(num) {
    for (let i = 0; i < num; i++) {
        hidden[i] = "_";
    }
    gap.innerHTML = hidden.join("");
}

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

function attempt(letter) {
    document.getElementById(letter).disabled = true;
    if (word.indexOf(letter) != -1) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] == letter) hidden[i] = letter;
        }
        gap.innerHTML = hidden.join("");
        document.getElementById("correct").style.display = "block";
        document.getElementById("correct").innerHTML = "Bien";
        document.getElementById("correct").className += "correct green";
    } else {
        attempts--;
        document.getElementById("attempts").innerHTML = attempts;
        document.getElementById("correct").style.display = "block";
        document.getElementById("correct").innerHTML = "Mal";
        document.getElementById("correct").className += "correct red";
        document.getElementById("image" + attempts).className += "fade-in";
    }
    setTimeout(function () {
        document.getElementById("correct").className = "";
    }, 800);
    checkEnd(); // Call the function after checking the attempt
}

function checkEnd() {
    if (hidden.indexOf("_") == -1 || attempts == 0) {
        let finalMessage;
        if (hidden.indexOf("_") == -1) {
            finalMessage = "¡Enhorabuena!";
            document.getElementById("correct").innerHTML = finalMessage;
        } else {
            finalMessage = "Perdiste, la palabra correcta era: " + word;
            document.getElementById("correct").style.display = "block";
            document.getElementById("correct").innerHTML = finalMessage;
        }
        document.getElementById("word").className += " frame";

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
        btnStart.onclick = function () {
            location.reload()
        };
    }
}

async function start() {
    document.getElementById("correct").style.display = "none";
    await generateWordAndHint();
    generateAlphabet("a", "z");
    attempts = 6;
    document.getElementById("attempts").innerHTML = attempts;
}

document.addEventListener("keydown", function(event) {
    // Obtener la letra presionada por el usuario
    const letter = event.key.toUpperCase();
    
    // Verificar si la tecla presionada es una letra del alfabeto
    if (/^[A-ZÑ]$/.test(letter)) {
      attempt(letter); // Intentar la letra presionada
    }
  });
  

// Initialize
window.onload = start;
