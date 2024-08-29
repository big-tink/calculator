let firstNumber;
let operator;
let secondNumber;

let displayValue = '';

const display = document.querySelector('input');
display.value = displayValue;

const oneButton = document.querySelector('.one');
const twoButton = document.querySelector('.two');
const threeButton = document.querySelector('.three');
const fourButton = document.querySelector('.four');
const fiveButton = document.querySelector('.five');
const sixButton = document.querySelector('.six');
const sevenButton = document.querySelector('.seven');
const eightButton = document.querySelector('.eight');
const nineButton = document.querySelector('.nine');
const zeroButton = document.querySelector('.zero');
const clearButton = document.querySelector('.clear');
const divideButton = document.querySelector('.divide');
const multiplyButton = document.querySelector('.multiply');
const minusButton = document.querySelector('.minus');
const plusButton = document.querySelector('.plus');
const decimalButton = document.querySelector('.decimal');
const equalButton = document.querySelector('.equal');


function addition(a, b) {
return a + b;
};

function subtraction(a, b) {
    return a - b;
};

function multiplication(a, b) {
    return a * b;
};

function division(a, b) {
    if (b === 0) {
        return 'Error'
    } else {
        return a / b;
    }
};

function operate(firstNumber, secondNumber, operator) {
    if (operator === '+') {
        return addition(firstNumber, secondNumber);
    } else if (operator === '-') {
        return subtraction(firstNumber, secondNumber);
    } else if (operator === '*') {
        return multiplication(firstNumber, secondNumber);
    } else if (operator === '/') {
        return division(firstNumber, secondNumber)
    };
};


    