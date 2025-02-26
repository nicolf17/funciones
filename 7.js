let genero= "masculino"
let edad= 35

let ayuda;

if (genero === "femenino") {
    switch (true) {
        case (edad > 50):
            ayuda = 120000;
            break;
        case (edad >= 30):
            ayuda = 100000;
            break;
        case (edad < 30):
            ayuda = "No aplica";
            break;
        default:
            ayuda = "No aplica";
    }
} else {
    ayuda = 40000;
}

let n = ayuda.toLocaleString("es-ES");
console.log(`El valor de la ayuda mensual es de: ${n}`);
