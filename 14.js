function calcularCostoBase(tamaño) {
    if (tamaño === "pequeño") return 6000;
    if (tamaño === "grande") return 12000;
    return 0; // Tamaño no válido
}

function calcularTotal(costoBase, toppings) {
    return toppings.reduce((total, topping) => total + topping.precio, costoBase);
}

let tamaño = prompt("¿Desea un sándwich pequeño o grande?").toLowerCase();

let costoBase = calcularCostoBase(tamaño);


switch (tamaño) {
    case "pequeño":
        costoBase = 6000;
        break;
    case "grande":
        costoBase = 12000;
        break;
    default:
        alert("Tamaño no válido.");
        costoBase = 0;
}

if (costoBase > 0) {
    let toppings = [];
    let total = costoBase;


    let agregarTopping;
    const preciosToppings = {
        tocineta: 3000,
        jalapeño: 0,
        pavo: 3000,
        queso: 2500
    };


    do {
        agregarTopping = prompt("¿Desea agregar un topping? (tocineta/jalapeño/pavo/queso/no)").toLowerCase();
        if (preciosToppings[agregarTopping] !== undefined) {
            toppings.push({ nombre: agregarTopping, precio: preciosToppings[agregarTopping] });
        } else if (agregarTopping !== "no") {
            alert("Topping no válido.");
        }
    } while (agregarTopping !== "no");


    let totalFinal = calcularTotal(costoBase, toppings);
    let n = totalFinal.toLocaleString("es-ES");
    alert(`El total a pagar por su sándwich es: $${n} pesos`);
}
