const expressionText = document.querySelector(".expression-text");
const resultText = document.querySelector(".result-text");

const ac = document.getElementById("AC");

const erase = document.getElementById("erase");

const point = document.getElementById("point");

const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const devide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");

const equal = document.getElementById("equal");

let a = 0;
let b = 0;
let operator = "";

let expression = ``;

AC.addEventListener("click", () => {
    resultText.textContent = `0`;
    expressionText.textContent = ``;

    a = 0;
    b = 0;
    operator = "";
    expression = ``;
});

erase.addEventListener("click", () => {
    let text = expression;

    if (text.length > 1) {
        resultText.textContent = text.slice(0, -1);
        expression = text.slice(0, -1);
    } 
    else {
        resultText.textContent = "0";
        expression = ``;
    }
});

equal.addEventListener("click", () => {
    [a, operator, b] = expression.match(/\d+|[+\-*/]/g);

    a = Number(a);
    b = Number(b);

    console.log(a, b , operator);

    SolveExpression(a, b, operator);
});

devide.addEventListener("click", () => {
    expression += '/';
    resultText.textContent = expression;
});

multiply.addEventListener("click", () => {
    expression += '*';
    resultText.textContent = expression;
});

minus.addEventListener("click", () => {
    expression += '-';
    resultText.textContent = expression;
});

plus.addEventListener("click", () => {
    expression += '+';
    resultText.textContent = expression;
});

point.addEventListener("click", () => {
    expression += `.`;
    resultText.textContent = expression;
});

zero.addEventListener("click", () => {
    expression += `0`;
    resultText.textContent = expression;
});

one.addEventListener("click", () => {
    expression += `1`;
    resultText.textContent = expression;
});

two.addEventListener("click", () => {
    expression += `2`;
    resultText.textContent = expression;
});

three.addEventListener("click", () => {
    expression += `3`;
    resultText.textContent = expression;
});

four.addEventListener("click", () => {
    expression += `4`;
    resultText.textContent = expression;
});

five.addEventListener("click", () => {
    expression += `5`;
    resultText.textContent = expression;
});

six.addEventListener("click", () => {
    expression += `6`;
    resultText.textContent = expression;
});

seven.addEventListener("click", () => {
    expression += `7`;
    resultText.textContent = expression;
});

eight.addEventListener("click", () => {
    expression += `8`;
    resultText.textContent = expression;
});

nine.addEventListener("click", () => {
    expression += `9`;
    resultText.textContent = expression;
});

function SolveExpression (a, b, operator) {
    switch(operator) {
        case "+":
            expressionText.textContent = resultText.textContent;
            resultText.textContent = a + b;
            expression = a + b;
            break;

        case "-":
            expressionText.textContent = resultText.textContent;
            resultText.textContent = a - b;
            expression = a - b;
            break;

        case "*":
            expressionText.textContent = resultText.textContent;
            resultText.textContent = a * b;
            expression = a * b;
            break;

        case "/":
            if (a === 0) {
                expressionText.textContent = resultText.textContent;
                resultText.textContent = `Err`;
                expression = ``;
                break;
            }
            else 
            {
                expressionText.textContent = resultText.textContent;
                resultText.textContent = a / b;
                expression = a / b;
                break;
            } 
    }
}

