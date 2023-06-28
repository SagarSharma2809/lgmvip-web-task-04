function clearScreen() {
    document.querySelector(".displayScreen").value = "";
}

function display(newValue) {
    document.querySelector(".displayScreen").value += newValue;
}


function calculate() {
    let expression = document.querySelector(".displayScreen").value;

    let result = eval(expression);

    document.querySelector(".displayScreen").value = result;
}

function backspace() {
    let expression = document.querySelector(".displayScreen").value;

    let newExpression = expression.substr(0, expression.length - 1);

    document.querySelector(".displayScreen").value = newExpression;
}