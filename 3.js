let solicitarNumeroEntero = () => {
    let num
    do {
        num = Number(prompt("Ingrese un número: "))
        if (!Number.isInteger(num)) {
            alert("El número debe ser un entero. Inténtelo de nuevo.")
        }
    } while (!Number.isInteger(num))
    return num
}

let sumaDigitos = (num) => {

    let suma = 0

    while (num > 0) {
        suma += num % 10 
        num = Math.floor(num / 10)
    }
    return suma
}


solicitarNumeroEntero()

alert(`La suma de los dígitos de ${num} es: ${sumaDigitos(num)}`)

