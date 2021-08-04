var num1 = prompt("Pon el primer valor a calcular");
var num2 = prompt("Pon el segundo valor a calcular");
var operaciones = prompt("¿Qué operación quiere hacer? {1=* 2=- 3=/ 4=+}");
var multiplicación = "multiplicar";
var división = "división";
var sumar = "sumar";
var restar = "restar";
switch (operaciones) {
    case "*":
        var multiplicar = num1 * num2;
        console.log(multiplicar);
        break;
    case "+":
        sumar = num1 + num2;
        console.log(sumar);
        break;
    case "-":
        restar = num1 - num2;
        console.log(restar);
        break;
    case "/":
        var dividir = num1 / num2;
        console.log(dividir);
        break;
    default:
        console.log("no");
        break;
}
if (jugador1 === 1 && jugador2 === 3) {
    console.log("Ganó jugador1")
}
else if(jugador1 === 2 && jugador2 === 1) {
    console.log("Ganó jugador1")
}
else if(jugador1 === 3 && jugador2 === 2) {
    console.log("Ganó jugador1")
}
else {
    console.log("Perdió jugador1")
}
