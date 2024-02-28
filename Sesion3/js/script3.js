// Declaracion de variables
var num1 = "";
var num2 = "";
var opera;

// Función que concatena el número presionado. Luego refresca el texto
function darNumero(numero) {
    if (opera === undefined) {
        num1 = parseFloat(num1.toString() + numero);
        refrescar();
    } else {
        num2 = parseFloat(num2.toString() + numero);
        refrescar();
    }
}

// Esta función realiza las distintas operaciones aritméticas en función del botón pulsado
function operar(valor) {
    // Si hay una operación pendiente, resuélvela antes de comenzar una nueva
    if (opera !== undefined && num2 !== 0) {
        esIgual();
    }
    opera = valor;
}

// Función para pulsar igual. Al final llama a refrescar()
function esIgual() {
    switch (opera) {
        case 1:
            num1 += num2;
            break;
        case 2:
            num1 -= num2;
            break;
        case 3:
            num1 *= num2;
            break;
        case 4:
            num1 /= num2;
            break;
        case 5:
            num1 = Math.pow(num1, num2);
            break;
    }
    num2 = 0;
    opera = undefined;
    refrescar();
}


// Función que coloca la coma al presionar dicho botón. Luego refresca el texto
function darComa() {
    if (opera === undefined) {
        if (num1.toString().indexOf('.') === -1) {
            num1 = num1.toString() + ".";
            refrescar();
        }
    } else {
        if (num2.toString().indexOf('.') === -1) {
            num2 = num2.toString() + ".";
            refrescar();
        }
    }
}

// Función que coloca la C al presionar dicho botón. Luego refresca el texto
function darC() {
    num1 = 0;
    num2 = 0;
    opera = undefined;
    refrescar();
}

// Muestra en el cuadro de texto el valor
function refrescar() {
    var elemento = document.getElementById('valor_numero');
    if (typeof opera === 'undefined') {
        elemento.value = num1;

    } else {
        elemento.value = num2;
    }

}



