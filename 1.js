function validarHoras(horas) {
    return horas >= 0;
}

function formatearSalario(salario) {
    return salario.toLocaleString("es-ES");
}

let nombre = prompt("Ingrese su nombre: ");
let horas;


let salario;
let salarioHorasExtra;



do {
    horas = Number(prompt("Ingrese la cantidad de horas que trabajó esta semana:"));
    if (!validarHoras(horas)) {
        mensaje = ("Las horas trabajadas no pueden ser negativas. Por favor, ingrese un valor válido.");
        alert(mensaje);

    }

} while (horas < 0)

salario = horas * 30000
salarioHorasExtra = horas * 33000

let salarioFormateado = formatearSalario(salario);

let salarioHorasExtraFormateado = salarioHorasExtra.toLocaleString("es-ES");

switch (true) {
    case (horas > 10):
        mensaje= (`Señor/a ${nombre}, el número de horas que trabajo es ${horas} y su salario es de: ${salarioHorasExtraFormateado} pesos`);
        break;

    case (horas > 0 && horas <= 10):
        mensaje= (`Señor/a ${nombre}, el número de horas que trabajo es ${horas} y su salario es de: ${salarioFormateado} pesos`);
        break;

    case (horas === 0):
        mensaje= ("Si no has trabajado, no hay sueldo");
        break;

    default:
        mensaje= ("Opción no válida");
        break;
}

alert(mensaje);
console.log(mensaje);
document.write(mensaje);
