let num 
let resultado = 1
do{
    num= Number(prompt("Ingrese un numero"))
    if(num<0){
        alert("El numero ingresado debe ser positivo")
    }
}while (num<0)

let factorial = (num) => {
    if (num == 0) {
        return 1
    } else {

        for (let i = 2; i <= num; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

let n= factorial(num).toLocaleString("es-ES")
alert(`El factorial de ${num} es: ${n}`)

