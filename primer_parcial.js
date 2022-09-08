// Ejercicio 1 
// Realizar una función que reciba por parámetro dos valores numéricos. 
// Si ambos números recibidos son pares y distintos de 0 entonces 
// se deberá retornar su división. En cambio, si ambos números recibidos 
// son impares entonces se deberá retornar la suma. 
// Para cualquier otro caso, retornar (-1)

function ejercicioUno (num1, num2) {
    if (num1 % 2 === 0 && num2 % 2 === 0 && num1 != 0 && num2 != 0) {
        return num1 / num2;
    } else if (num1 % 2 != 0 && num2 % 2 != 0) {
        return num1 + num2;
    } else {
        return -1;
    }
}
// console.log(ejercicioUno(4, 2));
// console.log(ejercicioUno(13, 7));
// console.log(ejercicioUno(0, 2));



// Ejercicio 2
// Realizar una función que reciba dos valores por parámetro,  
// el primero un booleano y el segundo un número entero:
// Si el primer parámetro es true y el segundo es múltiplo de 5, 
// deberá retornar el doble del segundo parámetro.
// Si el primer parámetro es true y el segundo no es múltiplo de 5, 
// deberá retornar la mitad del segundo parámetro.
// Si el primer parámetro es false, 
// deberá retornar el valor del segundo parámetro.

function ejercicioDos (boolean, numEntero) {
    if (boolean === true) {
        if (numEntero % 5 === 0) {
            return numEntero * 2;
        } else if (numEntero % 5 != 0) {
            return numEntero / 2;
        }
    } else if (boolean === false) {
        return numEntero;
    }
}
// console.log(ejercicioDos(true, 5));
// console.log(ejercicioDos(true, 3));
// console.log(ejercicioDos(false, 5));



// Ejercicio 3
// Dado el siguiente arreglo de objetos: 
let articulos = [
    {
        id: 4 ,
        precio : 3321,
        tipo : "Deportivo",
        nombre: "Zapatillas"
    },
    {
        id: 22 ,
        precio: 4482,
        tipo : "Moda",
        nombre: "Zapatillas"
    },
    {
        id: 1 ,
        precio: 3600,
        tipo : "Moda",
        nombre: "Zapatos"
    },
    {
        id: 44 ,
        precio: 8889,
        tipo : "Moda",
        nombre: "Remera"
    },
]
// Realizar una función que reciba por parámetro el array de artículos, 
// un string que represente al tipo (Deportivo o Moda) 
// y  un valor numérico que represente al precio máximo, 
// deberá retornar un nuevo array con los artículos que cumplan 
// con estas condiciones.

function ejercicioTres (array, strTipo, numPrecio) {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].tipo === strTipo && array[i].precio <= numPrecio) {
            nuevoArray.push(array[i])
        }
    }
    return nuevoArray
};
// console.log(ejercicioTres(articulos, "Moda", 5000));
// console.log(ejercicioTres(articulos, "Deportivo", 4000));
