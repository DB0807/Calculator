//functions for onLoad
onload = () => clearDisplay();

let displayNum = ''
let currentNum
let totalNum = 0
let operator = ''

const operations = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => a * b,
    divide: (a,b) => a / b,
} 

function operate (no1, no2, op) {
    totalNum = operations[op](no1,no2)
    displayNum = ''
    display.textContent = totalNum
    currentNum = 'stop'
}

//functionality for buttons to create numbers
for (let i = 0; i <= 10; i++) {
    let numbers = document.querySelector (`.button${i}`)
    numbers.addEventListener ('click', () => {
        if (numbers.value === '.' && displayNum.includes('.')) {
            + ''
        }
        else displayNum.length === 9 ? + '' : displayNum += numbers.value.toString();
        currentNum = +displayNum
        document.querySelector ('.numRow').textContent = currentNum
})}

//function to clear display with button
function clearDisplay () {
    const clearDisplay = document.querySelector ('.clear')
    clearDisplay.addEventListener ('click', () => {
        displayNum = ''
        totalNum = 0
        operator = ''
        display.textContent = '';
    });
}

const display = document.querySelector('.numRow')

const operators = document.querySelectorAll ('.operator').forEach((operatorBtn) => {
    operatorBtn.addEventListener ('click', () => {
    operator = operatorBtn.value
    if (totalNum === 0) {
        totalNum = currentNum;
        displayNum = ''} 
    else if (operator === 'divide' && currentNum === 0) {
        display.textContent = 'Error: Division by zero';
    }
    else if (currentNum === 'stop'){
        currentNum = 0
    }
    else operate (totalNum, currentNum, operator)
    })
})

const equals = document.querySelector ('.equals')
equals.addEventListener ('click', () => {
    if (operator === 'divide' && currentNum === 0) {
        display.textContent = 'Error';
    }
    else currentNum !== 'stop' ? operate (totalNum, currentNum, operator) : false;
})