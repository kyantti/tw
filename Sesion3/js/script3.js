let operandA = "";
let operandB = "";
let currentOperation;

function setOperand(number) {
    let operand;

    if (currentOperation === undefined) {
        operand = operandA;
    } else {
        operand = operandB;
    }

    if (number === null && operand.toString().indexOf('.') === -1) {
        operand += '.';
    } else {
        operand = parseFloat(operand.toString() + number);
    }

    if (currentOperation === undefined) {
        operandA = operand;
    } else {
        operandB = operand;
    }

    refreshScreen(operand);
}

function setOperation(op) {

    // If there is no operandA yet and the operator is "-" then it is a negative number
    if (operandA === "" && op === "-") {
        operandA = "-";
        refreshScreen(operandA);
        return;
    }
    
    if (currentOperation == undefined && operandA !== "" && operandB === "") {
        currentOperation = op;
    }
    else if (operandA !== "" && operandB !== "") {
        calculate();
        currentOperation = op;
    }
    refreshScreen(op);
}

function calculate() {
    let result;
    if (typeof operandA === 'number' && typeof operandB === 'number') {
        switch (currentOperation) {
            case '+':
                result = operandA + operandB;
                break;
            case '-':
                result = operandA - operandB;
                break;
            case '*':
                result = operandA * operandB;
                break;
            case '/':
                result = operandA / operandB;
                break;
            case '^':
                result = Math.pow(operandA, operandB);
                break;
        }
    } else {
        result = "Error: Operands must be numbers";
    }

    operandA = result;
    operandB = "";
    refreshScreen(result);
}

function clearScreen() {
    operandA = "";
    operandB = "";
    currentOperation = undefined;
    refreshScreen("");
}

function refreshScreen(value) {
    let screen = document.getElementById('valor_numero');
    screen.value = value;
}