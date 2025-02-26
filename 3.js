function calcularCostoLavadoras(cantidad, horas, tipoLavadora) {
    const PRECIO_GRANDE = 4000;
    const PRECIO_PEQUEÑA = 3000;
    let total, descuento, totalDescuento;
    let mensaje;

    switch(tipoLavadora) {
        case 1:
            total = horas * cantidad * PRECIO_GRANDE;
            if (cantidad > 3) {
                descuento = total * 0.03;
                totalDescuento = total - descuento;
                mensaje = `Costo total por alquilar ${cantidad} lavadora/s grande/s, por ${horas} hora/s es de: ${totalDescuento.toLocaleString("es-ES")} pesos`;
            } else {
                mensaje = `Costo total por alquilar ${cantidad} lavadora/s grande/s, por ${horas} hora/s es de: ${total.toLocaleString("es-ES")} pesos`;
            }
            break;
            
        case 2:
            total = horas * cantidad * PRECIO_PEQUEÑA;
            if (cantidad > 3) {
                descuento = total * 0.03;
                totalDescuento = total - descuento;
                mensaje = `Costo total por alquilar ${cantidad} lavadora/s pequeña/s, por ${horas} hora/s es de: ${totalDescuento.toLocaleString("es-ES")} pesos`;
            } else {
                mensaje = `Costo total por alquilar ${cantidad} lavadora/s pequeña/s, por ${horas} hora/s es de: ${total.toLocaleString("es-ES")} pesos`;
            }
            break;
            
        default:
            mensaje = "Opción no válida";
            break;
    }

    alert(mensaje);
    console.log(mensaje);
    document.write(mensaje);
}

let cantidad, horas, tipoLavadora;

do {
    cantidad = Number(prompt("Ingrese cuantas lavadoras desea utilizar (mínimo 1):"));
    if (cantidad < 1) {
        alert("Debe ingresar al menos 1 lavadora");
    }
} while (cantidad < 1);

do {
    horas = Number(prompt("Ingrese la cantidad de horas que desea utilizar el servicio (mínimo 1):"));
    if (horas < 1) {
        alert("Debe ingresar al menos 1 hora");
    }
} while (horas < 1);

do {
    tipoLavadora = Number(prompt("¿Qué tipo de lavadora desea usar? 1. Lavadora grande / 2. Lavadora pequeña"));
    if (tipoLavadora < 1 || tipoLavadora > 2) {
        alert("Opción no válida. Ingrese 1 o 2");
    }
} while (tipoLavadora < 1 || tipoLavadora > 2);

calcularCostoLavadoras(cantidad, horas, tipoLavadora);
