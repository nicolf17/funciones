let num= Number(prompt("Ingrese un numero"))

let esPrimo = (num) => {
    if (num < 2) return false

    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

alert(num + (esPrimo(num) ? " es primo" : " no es primo"))

