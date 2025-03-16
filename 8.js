let base = Number(prompt("Ingrese la base"))
let exponente = Number(prompt("Ingrese el exponente"))

let potencia = (base, exponente) => Math.pow(base, exponente)

alert(potencia(base, exponente));

/* 
let resultado= 1

let potencia= (base, exponente)=> {
for (let i = 0; i < exponente; i++) {
    resultado *= base;
}
return resultado
}
*/