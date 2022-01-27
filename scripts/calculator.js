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
    equation = [];
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

    currentNumber += input;
    // displayNumber();
}

function displayNumber(input){
    display.innerText = input;
}



  //\\         //\\
 ////\\       //\\\\
//\\//\\ DOM //\\//\\
const btnSize = 64; // Edit later?

const allButtons = Array.from(document.querySelectorAll('.btn'));
const display = document.querySelector('.display');
display.innerText = '';
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
        display.innerText = '';
    }
    else if(currentInput === '=') {

        equation.push(parseFloat(currentNumber));
        let result = 0;
        let a = null;
        
        for (let i = 0; i < equation.length; i++) {
            let currentElement = equation[i];


            if(i === 0) {
                a = currentElement;
                result += operate('+',a,result);

                clearOperator();
                a = null;
            }
            else if(typeof(currentElement) === 'number') {
                // if(a === null) a = currentElement;
                if(a === null) {
                    a = currentElement;

                    result = operate(currentOperator,result,a);
                    clearOperator();
                    a = null;

                }
            }
            else {
                updateOperator(currentElement);
            }


        }

        displayNumber(result);
        result = 0;
        resetCalculator();
    }
    else if(checkIfNumberOrPeriod(currentInput)) {
        if(currentOperator !== '') {
            equation.push(currentOperator);
            clearOperator();
        }

        updateNumber(currentInput);
        displayNumber(currentNumber);
    }
    else if(checkIfOperator(currentInput)){
        if(currentNumber !== ''){
            equation.push(parseFloat(currentNumber));
            clearNumber();
        }

        updateOperator(currentInput);
    }
})
