function determinarParImpar(numero) {
    let mensaje;
    switch (numero % 2) {
        case 0:
            mensaje = (`El ${numero} es un numero par`);
            break;
        case 1:
            mensaje = (`El ${numero} es un numero impar`);
            break;
    }
    alert(mensaje);
    console.log(mensaje);
    document.write(mensaje);
}

let numero;

do {
    numero = Number(prompt("Ingrese un número"));
    if (isNaN(numero)) {
        alert("El dato ingresado no es valido, hazlo de nuevo");
    }
} while (isNaN(numero));

determinarParImpar(numero);
