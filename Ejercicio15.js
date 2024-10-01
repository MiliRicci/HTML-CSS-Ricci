// Variables globales
let operandoA;
let operandoB;
let operacion;

// Inicializamos los botones y display
function init() {
    let display = document.getElementById("display");
    let btn0 = document.getElementById("btn0");
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");
    let btn5 = document.getElementById("btn5");
    let btn6 = document.getElementById("btn6");
    let btn7 = document.getElementById("btn7");
    let btn8 = document.getElementById("btn8");
    let btn9 = document.getElementById("btn9");
    let btnAdd = document.getElementById("btnAdd");
    let btnSub = document.getElementById("btnSub");
    let btnMul = document.getElementById("btnMul");
    let btnDiv = document.getElementById("btnDiv");
    let btnClear = document.getElementById("btnClear");
    let btnEqual = document.getElementById("btnEqual");

    // Eventos de los botones
    btn0.onclick = function() { display.value += "0"; };
    btn1.onclick = function() { display.value += "1"; };
    btn2.onclick = function() { display.value += "2"; };
    btn3.onclick = function() { display.value += "3"; };
    btn4.onclick = function() { display.value += "4"; };
    btn5.onclick = function() { display.value += "5"; };
    btn6.onclick = function() { display.value += "6"; };
    btn7.onclick = function() { display.value += "7"; };
    btn8.onclick = function() { display.value += "8"; };
    btn9.onclick = function() { display.value += "9"; };

    btnAdd.onclick = function() {
        operandoA = parseFloat(display.value);
        operacion = "+";
        limpiar();
    };
    
    btnSub.onclick = function() {
        operandoA = parseFloat(display.value);
        operacion = "-";
        limpiar();
    };

    btnMul.onclick = function() {
        operandoA = parseFloat(display.value);
        operacion = "*";
        limpiar();
    };

    btnDiv.onclick = function() {
        operandoA = parseFloat(display.value);
        operacion = "/";
        limpiar();
    };

    btnEqual.onclick = function() {
        operandoB = parseFloat(display.value);
        resolver();
    };

    btnClear.onclick = function() {
        resetear();
    };
}

// Funciones adicionales
function limpiar() {
    document.getElementById("display").value = "";
}

function resetear() {
    document.getElementById("display").value = "";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}

function resolver() {
    let resultado = 0;
    switch(operacion) {
        case "+":
            resultado = operandoA + operandoB;
            break;
        case "-":
            resultado = operandoA - operandoB;
            break;
        case "*":
            resultado = operandoA * operandoB;
            break;
        case "/":
            resultado = operandoA / operandoB;
            break;
    }
    resetear();
    document.getElementById("display").value = resultado;
}
