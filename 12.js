function validarModelo(modelo) {
    return !isNaN(modelo) && modelo >= 0;
}

function verificarDefecto(modelo) {
    return (modelo === 119 || modelo === 179 || (modelo >= 189 && modelo <= 195) || modelo === 221 || modelo === 780);
}

let modelo;

do {
    modelo = Number(prompt("Ingrese el número de modelo de su automóvil:"));
} while (!validarModelo(modelo));


if (verificarDefecto(modelo)) {
    alert("El automóvil está defectuoso, llevar a garantía.");
} else {
    alert("Su automóvil no está defectuoso.");
}
