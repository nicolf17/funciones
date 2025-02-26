function determinarMayor(num1, num2, num3) {
    let mayor = Math.max(num1, num2, num3);

    switch(true) {
        case (num1 >= num2 && num1 >= num3):
            mayor = num1;
            break;
        case (num2 >= num1 && num2 >= num3):
            mayor = num2;
            break;
        case (num3 >= num1 && num3 >= num2):
            mayor = num3;
            break;
        default:
            mayor = "No se pudo determinar";
    }

    return mayor;
}

let num1, num2, num3;

do {
    num1 = Number(prompt("Ingrese un numero: "));
} while (isNaN(num1));

do {
    num2 = Number(prompt("Ingrese otro numero: "));
} while (isNaN(num2));

do {
    num3 = Number(prompt("Ingrese el ultimo numero: "));
} while (isNaN(num3));

let mayor = determinarMayor(num1, num2, num3);

alert("El numero mayor es: " + mayor);
