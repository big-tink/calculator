let firstNumber;
let operator;
let secondNumber;

let displayValue = '';

const display = document.querySelector('input');
display.value = displayValue;

const oneButton = document.querySelector('.one');
oneButton.addEventListener('click', () => display.value = displayValue += '1');

const twoButton = document.querySelector('.two');
twoButton.addEventListener('click', () => display.value = displayValue += '2');

const threeButton = document.querySelector('.three');
threeButton.addEventListener('click', () => display.value = displayValue += '3');

const fourButton = document.querySelector('.four');
fourButton.addEventListener('click', () => display.value = displayValue += '4');

const fiveButton = document.querySelector('.five');
fiveButton.addEventListener('click', () => display.value = displayValue += '5');

const sixButton = document.querySelector('.six');
sixButton.addEventListener('click', () => display.value = displayValue += '6');

const sevenButton = document.querySelector('.seven');
sevenButton.addEventListener('click', () => display.value = displayValue += '7');

const eightButton = document.querySelector('.eight');
eightButton.addEventListener('click', () => display.value = displayValue += '8');

const nineButton = document.querySelector('.nine');
nineButton.addEventListener('click', () => display.value = displayValue += '9');

const zeroButton = document.querySelector('.zero');
zeroButton.addEventListener('click', () => display.value = displayValue += '0');

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    displayValue = '';
    display.value = displayValue;
});

const divideButton = document.querySelector('.divide');
divideButton.addEventListener('click', () => {
    firstNumber = parseFloat(displayValue);
    displayValue = '';
    operator = '/';
    display.value = displayValue;
});

const multiplyButton = document.querySelector('.multiply');
const minusButton = document.querySelector('.minus');
const plusButton = document.querySelector('.plus');

const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click', () => {
    if (!displayValue.includes('.')) {
        display.value = displayValue += '.'
    }
});

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', () => {
    secondNumber = parseFloat(displayValue);
    if (operator === '/') {
        division(firstNumber, secondNumber);
        firstNumber = displayValue;
        displayValue = '';
    }

})


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
        displayValue = 'Error'
    } else {
        displayValue = a / b;
    }

    display.value = displayValue;
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

function clearAll() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    displayValue = '1';
    display.value = displayValue;
};
    