do {
    copias = Number(prompt("Ingrese la cantidad de copias que desea imprimir:"));
} while (isNaN(copias) || copias < 0);

let precioPorCopia = calcularPrecioPorCopia(copias);
let total = calcularPrecioTotal(precioPorCopia, copias);

function calcularPrecioPorCopia(copias) {
    if (copias >= 0 && copias <= 499) return 120;
    if (copias >= 500 && copias <= 749) return 100;
    if (copias >= 750 && copias <= 999) return 80;
    if (copias >= 1000) return 50;
    return 0; 
}

function calcularPrecioTotal(precioPorCopia, copias) {
    return copias * precioPorCopia;
}

function mostrarResultado(precioPorCopia, total) {
    let n = total.toLocaleString("es-ES");
    alert(`El precio por copia es $${precioPorCopia}. El costo total es: ${n} pesos`);
}

mostrarResultado(precioPorCopia, total);
