let displayNum = ''
let firstNum = parseInt(displayNum)
let secondNum = 0
let operator

const operations = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => a * b,
    divide: (a,b) => a / b,
} 

function operate (no1, no2, op) {
    return operations[op](no1,no2)
}

for (let i = 0; i <= 10; i++) {
    let numbers = document.querySelector (`.button${i}`)
    numbers.addEventListener ('click', () => {
        if (numbers.value === '.' && displayNum.includes('.')) {
            + ''
        }
        else displayNum.length === 9 ? + '' : displayNum += numbers.value.toString();
        document.querySelector ('.numRowBottom').textContent = displayNum
})}

const clearDisplay = document.querySelector ('.clear')
clearDisplay.addEventListener ('click', () => {
    displayNum = ''
    document.querySelectorAll('.numRow').forEach((numRow) => {
        numRow.textContent = '';
      });
})
