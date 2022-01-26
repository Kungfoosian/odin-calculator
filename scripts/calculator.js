function add(a,b) { return a + b; }
function subtract(a,b) { return a - b; }
function multiply(a,b) { return a * b; }
function divide(a,b) { return a / b; }

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }
}

function checkIfOperator(input) {
    switch(input) {
        case '-':
        case '+':
        case '*':
        case '/':
            return true;
    }

    return false;
}

function updateOperator(input) {
    currentOperator = input;
}

function clearOperator(){
    currentOperator = '';
}

function checkIfNumberOrPeriod(input) {
    if(input === '.' || typeof(parseInt(input)) === 'number') return true;

    return false;
}

function clearNumber() {
    currentNumber = '';
}

function updateNumber(input) {
    if(currentNumber.includes('.')) {
        return;
    }

    // input is a number or a period that doesn't already exist
    currentNumber += input;
    
}

function getButtonPressed(event) {
    // console.log(event.target.value);
    // if(event.target.value !==)

}



  //\\         //\\
 ////\\       //\\\\
//\\//\\ DOM //\\//\\
const btnSize = 64; // Edit later?

const allButtons = Array.from(document.querySelectorAll('.btn'));
let num1, num2;
let currentOperator='';
let currentNumber='';
let allowedOperators = ['+','-','/','*']
let equation = [];

allButtons.forEach(button => {
    button.style.width = `${btnSize}px`;
    button.style.height = `${btnSize}px`;
})

document.addEventListener('click', e => {
    let currentInput = e.target.value;

    if(checkIfNumberOrPeriod(currentInput)) {
        if(currentOperator !== '') {
            equation.push(currentOperator);
            clearOperator();
        }

        updateNumber(currentInput);
    }
    else if(checkIfOperator(currentInput)){
        if(currentNumber !== ''){
            equation.push(parseFloat(currentNumber));
            clearNumber();
        }

        updateOperator(currentInput);
    }
})
