function verificarEstadoComputadora(pitido, discoGira) {
    if (pitido === "si" && discoGira === "si") {
        return "Póngase en contacto con el técnico de apoyo.";
    } else if (pitido === "si" && discoGira === "no") {
        return "Verificar contactos de la unidad.";
    } else if (pitido === "no" && discoGira === "no") {
        return "Traiga la computadora para repararla en la central.";
    } else if (pitido === "no" && discoGira === "si") {
        return "Compruebe las conexiones de altavoces.";
    } else {
        return "Responda con 'si' o 'no'.";
    }
}

let pitido;

do {
    pitido = prompt("¿La computadora emite un pitido al encender? (si/no)").toLowerCase();
} while (pitido !== "si" && pitido !== "no");

let discoGira;
let mensaje;

do {
    discoGira = prompt("¿El disco duro gira? (si/no)").toLowerCase();
} while (discoGira !== "si" && discoGira !== "no");

mensaje = verificarEstadoComputadora(pitido, discoGira);
alert(mensaje);
