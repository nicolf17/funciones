let num= Number(prompt("Ingrese un numero"))
let suma = 0

while (!Number.isInteger(num)) {
    alert("El número debe ser entero");
    num = Number(prompt("Ingrese un número entero"));
}

let sumaDivisores = (num) => {
    
        for (let i = 1; i < num; i++) {
            if (num % i === 0)
                suma += i
        }
        return suma;
    }

alert(`La suma de los divisores de ${num} es: ${sumaDivisores(num)}`)
