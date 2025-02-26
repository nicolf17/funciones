function calcularCostoMembresia(dias) {
    let costo;

    switch (dias) {
        case 15:
            costo = 18000;
            break;
        case 30:
            costo = 35000;
            break;
        case 90:
            costo = 86000;
            break;
        default:
            alert("Ingrese una cantidad válida de días.");
            return null; 
    }

    return costo;
}

let dias;

do {
    dias = Number(prompt("Ingrese la cantidad de días de su membresía (15, 30 o 90):"));
} while (dias !== 15 && dias !== 30 && dias !== 90);

let costo = calcularCostoMembresia(dias);
let n = costo.toLocaleString("es-ES");
alert(`El costo de su mensualidad es: ${n} pesos`);
