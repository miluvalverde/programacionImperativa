/**
Declara una variable que contenga una matriz
de 5x5 llena de puros numeros enteros y positivos
*/
/**
Luego, escribe un algoritmo para sumar todos
los numeros en la matriz.
*/

let matriz5x5 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

function sumarMatriz(arr) {
    let resultado = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            resultado += arr[i][j];
        }
    }
    return resultado;
}
// console.log(sumarMatriz(matriz5x5));




// Completa la función para que retorne una matriz
// de 10x10

function generarMatriz10por10() {
    let res = [];
    for (let i = 0; i <= 90; i += 10) {
        let aux = [];
        for (let j = 1; j <= 10; j++) {
            if (i === 0) {
                aux.push(j);
            } else {
                aux.push(i + j);
            }
        }
        res.push(aux);
    }
    return res;
}
let matriz10por10 = generarMatriz10por10();
// console.table(matriz10por10);


// Por último, vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único.
function sumarRojo(arr) {
    let resultado = 0;
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        resultado += arr[i][j];
    }
    return resultado;
}
// console.log(sumarRojo(matriz10por10));

function sumarVerde(arr) {
    let resultado = 0;
    for (let i = 0; i < arr.length; i++) {
        let j = arr.length - i - 1;
        resultado += arr[i][j];
    }
    return resultado;
}
// console.log(sumarVerde(matriz10por10));