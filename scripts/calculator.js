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





  //\\         //\\
 ////\\       //\\\\
//\\//\\ DOM //\\//\\
const btnSize = 64;
console.log(btnSize);

const allButtons = Array.from(document.querySelectorAll('.btn'));
// console.log(allButtons);
allButtons.forEach(button => {
    button.style.width = `${btnSize}px`;
    button.style.height = `${btnSize}px`;
})
