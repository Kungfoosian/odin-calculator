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

function resetCalculator() {
    clearNumber();
    clearOperator();
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
    if(input === '.' || !isNaN(input)) return true;

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

    if (currentInput === 'clear') {
        resetCalculator();
    }
    else if(currentInput === '=') {
        //Do some math
        equation.push(parseFloat(currentNumber));
        let result = 0;
        let a = null;
        let b = null;
        
        for (let i = 0; i < equation.length; i++) {
            let currentElement = equation[i];

            if(typeof(currentElement) === 'number') {
                if(a === null) a = currentElement;
                else if(b === null) b = currentElement;
                else {
                    result += operate(currentOperator,a,b);
                    clearOperator();
                    a = null;
                    b = null;
                }
            }
            else {
                updateOperator(currentElement);
            }
        }

        console.log(result);

        resetCalculator();
    }
    else if(checkIfNumberOrPeriod(currentInput)) {
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
