function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById("display");
    let expression = display.value;
    let result;
    try {
        result = math.evaluate(expression);
        history.push(expression + " = " + result);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }

    try {
        expression = expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
        expression = expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
        expression = expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');
        result = math.evaluate(expression);
        display.value = result;
    } catch (error) {
        display.value = "please close the bracket";
    }
}
function squareRoot() {
    let display = document.getElementById("display");
    display.value += "sqrt(";
}

function base10Log() {
    let display = document.getElementById("display");
    display.value += "log(";
}

function pi() {
    let display = document.getElementById("display");
    display.value += "pi";
}

function e() {
    let display = document.getElementById("display");
    display.value += "e";
}

function power() {
    let display = document.getElementById("display");
    display.value += "^(";
}

window.onload = function () {
    const InvBtn = document.getElementById("InvBtn");
    const sinBtn = document.getElementById("sinBtn");
    const cosBtn = document.getElementById("cosBtn");
    const tanBtn = document.getElementById("tanBtn");
    const lnBtn = document.getElementById("lnBtn");
    const logBtn = document.getElementById("logBtn");
    const rootBtn = document.getElementById("rootBtn");
    const powerBtn = document.getElementById("powerBtn");
    const ansBtn = document.getElementById("ansBtn");

    InvBtn.addEventListener("click", function () {
        if (sinBtn.value === "sin") {
            sinBtn.value = "sin⁻¹";
        } else {
            sinBtn.value = "sin";
        }

        if (cosBtn.value === "cos") {
            cosBtn.value = "cos⁻¹";
        } else {
            cosBtn.value = "cos";
        }

        if (tanBtn.value === "tan") {
            tanBtn.value = "tan⁻¹";
        } else {
            tanBtn.value = "tan";
        }
        if (lnBtn.value === "ln") {
            lnBtn.value = "e^x";
        }
        else {
            lnBtn.value = "ln";
        }
        if (logBtn.value === "log") {
            logBtn.value = "10^x"
        }
        else {
            logBtn.value = "log";
        }
        if (rootBtn.value === "√") {
            rootBtn.value = "X^2";
        } else {
            rootBtn.value = "√";
        }
        if (powerBtn.value === "X^y") {
            powerBtn.value = "y√x";
        }
        else {
            powerBtn.value = "X^y"
        }
        if (ansBtn.value === "Ans") {
            ansBtn.value = "Rnd";
        } else {
            ansBtn.value = "Ans";
        }
    });
};

let history = [];
function showHistory() {
    let display = document.getElementById("display");
    display.value = history.join("\n");
}

