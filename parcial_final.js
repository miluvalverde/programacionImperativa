// EJERCICIO 1

// Dado el siguiente array de paises
let paises = [
    {
        nombre: "Argentina",
        continente: "Sudamérica",
        poblacion: 40000000
    },
    {
        nombre: "Colombia",
        continente: "Sudamérica",
        poblacion: 50372000
    },
    {
        nombre: "Brasil",
        continente: "Sudamérica",
        poblacion: 300000000
    },
    {
        nombre: "Etiopía",
        continente: "África",
        poblacion: 15000000
    },
    {
        nombre: "Chile",
        continente: "Sudamérica",
        poblacion: 10000000
    }
];
// Crear una función que reciba como parámetro un arreglo de objetos, 
// un continente, y un número de población.
// La misma debe retornar un nuevo arreglo solo con los países 
// que sean del continente pasado por parámetro, y además, 
// que su población sea mayor o igual a la del parámetro.
// Si no encuentra coincidencias deberá retornar un array vacío

function nuevoArreglo (arr, strContinente, numPoblacion) {
    let nuevoArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].continente === strContinente && arr[i].poblacion >= numPoblacion) {
            nuevoArr.push(arr[i]);
        }
    };
    return nuevoArr
};
// console.log(nuevoArreglo(paises, "Sudamérica", 50372000));
// console.log(nuevoArreglo(paises, "África", 10000000));
// console.log(nuevoArreglo(paises, "Europa", 10000000));




// EJERCICIO 2

// Dado el siguiente array de numeros:
let arrayDeNumeros = [1, 2, 3, 8, 9, 104, 5, 6, 7, 15];
// Crear una función llamada bubbleSort que reciba como parámetros el array y 
// un string que represente el sentido de ordenamiento, la función deberá 
// realizar un ordenamiento interno del array según el orden indicado 
// “ASC” lo ordenará ascendente
// “DESC” lo ordenará descendente
// Para analizar el correcto funcionamiento imprimir por consola el array antes 
// y después de ejecutar la función. 

function bubbleSort (arr, str) {
    str = str.toUpperCase();
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - 1); j++) {
            if (str === "ASC") { 
                if (arr[j] > arr[j + 1]) {
                    let temporal = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temporal;
                }
            } else if (str === "DESC") {
                if (arr[j] < arr[j + 1]) {
                    let temporal = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temporal;
                }
            }
        }
    };
    return arr
}
// console.log(arrayDeNumeros);
// console.log(bubbleSort(arrayDeNumeros, "desc"));
// console.log(bubbleSort(arrayDeNumeros, "ASC"));




// EJERCICIO 3

// Dada la matriz 
let matriz = [
    [5, 2, 2], // 0
    [2, 5, 2], // 1
    [4, 4, 5]  // 2
];

// a. Crear una función que reciba la matriz por parámetro, sume todos los 
// valores de la fila 1 y retorne la suma.
function sumaFilaUno (matrix) {
    let suma = 0;
    for (let i = 0; i < matrix[0].length; i++) {
        suma += matrix[0][i];
    };
    return suma
}
// console.log(sumaFilaUno(matriz));

// b. Crear una función que reciba la matriz generada por parámetro y 
// retorne un nuevo array con todos los valores pares de la matriz.

function valoresPares (matrix) {
    let nuevoArr = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] % 2 === 0) {
                nuevoArr.push(matrix[i][j]);
            }
        }
    };
    return nuevoArr
};
// console.log(valoresPares(matriz));