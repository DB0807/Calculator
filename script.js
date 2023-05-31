let firstNum
let secondNum
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