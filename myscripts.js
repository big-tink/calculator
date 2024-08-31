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

const clearButton = document.querySelector('.clearAll');
clearButton.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    displayValue = '';
    display.value = displayValue;
});

const backspaceButton = document.querySelector('.backspace');
backspaceButton.addEventListener('click', () => {
    displayValue = displayValue.slice(1);
    display.value = displayValue;
});

const divideButton = document.querySelector('.divide');
divideButton.addEventListener('click', () => {
    if (operator === '') {
        firstNumber = parseFloat(displayValue);
        displayValue = '';
        operator = '/';
        display.value = displayValue;
    } else if (displayValue === '') {
        operator = '/';
    } else {
        secondNumber = parseFloat(displayValue);
        operate(firstNumber, secondNumber, operator);
        operator = '/';
    }
});

const multiplyButton = document.querySelector('.multiply');
multiplyButton.addEventListener('click', () => {
    if (operator === '') {
        firstNumber = parseFloat(displayValue);
        displayValue = '';
        operator = '*';
        display.value = displayValue;
    } else if (displayValue === '') {
        operator = '*'
    } else {
        secondNumber = parseFloat(displayValue);
        operate(firstNumber, secondNumber, operator);
        operator = '*'
    }
});

const minusButton = document.querySelector('.minus');
minusButton.addEventListener('click', () => {
    if (operator === '') {
        firstNumber = parseFloat(displayValue);
        displayValue = '';
        operator = '-';
        display.value = displayValue;
    } else if (displayValue === '') {
        operator = '-'
    } else {
        secondNumber = parseFloat(displayValue);
        operate(firstNumber, secondNumber, operator);
        operator = '-'
    }
});

const plusButton = document.querySelector('.plus');
plusButton.addEventListener('click', () => {
    if (operator === '') {
        firstNumber = parseFloat(displayValue);
        displayValue = '';
        operator = '+';
        display.value = displayValue;
    } else if (displayValue === '') {
        operator = '+'
    } else {
        secondNumber = parseFloat(displayValue);
        operate(firstNumber, secondNumber, operator);
        operator = '+'
    }
});

const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click', () => {
    if (!displayValue.includes('.')) {
        display.value = displayValue += '.'
    }
});

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', () => {
    if (displayValue === '' && secondNumber !== '') {
        operate(firstNumber, secondNumber, operator)
    } else if (displayValue === '') {
        // do nothing if a second value is not entered yet
    } else {
    secondNumber = parseFloat(displayValue);
    operate(firstNumber, secondNumber, operator);
    }
});


function addition(a, b) {
    displayValue = a + b;
    firstNumber = parseFloat(displayValue);
    display.value = parseFloat(displayValue.toPrecision(9));
    displayValue = '';
};

function subtraction(a, b) {
    displayValue = a - b;
    firstNumber = parseFloat(displayValue);
    display.value = parseFloat(displayValue.toPrecision(9));
    displayValue = '';
};

function multiplication(a, b) {
    displayValue = a * b;
    firstNumber = parseFloat(displayValue);
    display.value = parseFloat(displayValue.toPrecision(9));
    displayValue = '';
};

function division(a, b) {
    if (b === 0) {
        displayValue = 'Not Allowed'
    } else {
        displayValue = a / b;
        firstNumber = parseFloat(displayValue);
    }

    display.value = parseFloat(displayValue.toPrecision(9));
    displayValue = '';
};

function operate(firstNumber, secondNumber, operator) {
    if (operator === '+') {
        return addition(firstNumber, secondNumber);
    } else if (operator === '-') {
        return subtraction(firstNumber, secondNumber);
    } else if (operator === '*') {
        multiplication(firstNumber, secondNumber);
    } else if (operator === '/') {
        division(firstNumber, secondNumber);
    };
};

function clearAll() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    displayValue = '';
    display.value = displayValue;
};
    
clearAll();

// below adds keyboard functionality

window.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9") {
      display.value = displayValue += e.key;
    }
  
    if (e.key === ".") {
        if (!displayValue.includes('.')) {
            display.value = displayValue += '.'
        }
    }
  
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
        if (operator === '') {
            firstNumber = parseFloat(displayValue);
            displayValue = '';
            operator = e.key;
            display.value = displayValue;
        } else if (displayValue === '') {
            operator = e.key
        } else {
            secondNumber = parseFloat(displayValue);
            operate(firstNumber, secondNumber, operator);
            operator = e.key
        }
    }
  
    if (e.key === "Enter" || e.key === "=") {
        if (displayValue === '' && secondNumber !== '') {
            operate(firstNumber, secondNumber, operator)
        } else if (displayValue === '') {
            // do nothing if a second value is not entered yet
        } else {
        secondNumber = parseFloat(displayValue);
        operate(firstNumber, secondNumber, operator);
        }
    }
  
    if (e.key === "Backspace") {
        displayValue = displayValue.slice(1);
        display.value = displayValue;
    }
  
    if (e.key === "Escape" || e.key === 'Clear') {
        firstNumber = '';
        secondNumber = '';
        operator = '';
        displayValue = '';
        display.value = displayValue;
    }
  });