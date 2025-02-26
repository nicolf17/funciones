function obtenerCargoFijoYCostos(operador) {
    switch (operador) {
        case "tigo":
            return { cargoFijo: 45000, costoMinuto: 200, paqueteDatos: 12000 };
        case "claro":
            return { cargoFijo: 30000, costoMinuto: 100, paqueteDatos: 18000 };
        case "movistar":
            return { cargoFijo: 40000, costoMinuto: 250, paqueteDatos: 8000 };
        default:
            return null; 
    }
}

let operador;

do {
    operador = prompt("Ingrese su operador (Tigo, Claro o Movistar):").toLowerCase();
} while (operador !== "tigo" && operador !== "claro" && operador !== "movistar");

let minutos;
do {
    minutos = Number(prompt("Ingrese los minutos internacionales consumidos:"));
} while (isNaN(minutos) || minutos < 0);

let { cargoFijo, costoMinuto, paqueteDatos } = obtenerCargoFijoYCostos(operador);
if (cargoFijo === null) {
    alert("Operador no válido.");
}


let costoMinutos = minutos * costoMinuto;
let total = cargoFijo + costoMinutos + paqueteDatos;

let n = total.toLocaleString("es-ES");
alert(`Su total a pagar es: ${n} pesos`);
