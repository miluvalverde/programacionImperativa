// Matrices:
// 1. Crear una matriz de 3 x 4
let matriz = [
    [1, 2, 3, 12],
    [4, 5, 6, 11],
    [7, 8, 9, 10],
];


// 2. Crear una funcion que suma todos los valores de la matriz que sean pares
function sumarMatriz (arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] % 2 === 0) {
                suma += arr[i][j];
            }
        }
    }
    return suma
};
// console.log(sumarMatriz(matriz));


// 3. Crear una funcion que cambie todos los valores de la matriz que sean 
// multiplos de 5 por un numero 1
function cambiarMultiplos (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] % 5 === 0) {
                arr[i][j] = 1;
            }
        }
    }
    return arr
}
// console.log(cambiarMultiplos(matriz));


// 4. Crear una funcion que genere un nuevo array donde se guarden 
// todos los numeros impares de la matriz
function nuevoArray (arr) {
    let nuevoArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] % 2 !== 0) {
                nuevoArr.push(arr[i][j]);
            }
        }
    }
    return nuevoArr
}
// console.log(nuevoArray(matriz));


// 5. Crear una funcion que retorne la multiplicacion de todos los 
// elementos de la fila 1
function multiplosFilaUno (arr) {
    let multiplicacion = 1;
    for (let i = 0; i < arr[0].length; i++) {
        multiplicacion *= arr[0][i];
    }
    return multiplicacion
}
// console.log(multiplosFilaUno(matriz));






// Bubble Sort:
// 1. Armá un array llamado estudiantes de 3 objetos, que cada uno de ellos 
// tenga: nombre, edad y notaFinal.
let estudiantes = [
    {
        nombre: "Milagros",
        edad: 22,
        notaFinal: 10, 
    },
    {
        nombre: "Lucia",
        edad: 19,
        notaFinal: 3,
    },
    {
        nombre: "Natalia",
        edad: 47,
        notaFinal: 6,
    }
]


// 2. Crear una funcion que ordene esos objetos por edad de forma ascendente
function ordenarAscendente (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - 1); j++) {
            if (arr[j].edad > arr[j + 1].edad) {
                let temporal = arr[j].edad;
                arr[j].edad = arr[j + 1].edad;
                arr[j + 1].edad = temporal;
            }
        }
    }
    return arr
}
// console.log(ordenarAscendente(estudiantes));


// 3. Crear una funcion que reciba por parametro el array y un string que 
// indique de que modo se deberà ordenarlo (de forma ascendente o descendente)
function ordenar (arr, str) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - 1); j++) {
            if (str === "ascendente") {
                ordenarAscendente(arr);
            } else if (str === "descendente") {
                if (arr[j].edad < arr[j + 1].edad) {
                    let temporal = arr[j].edad;
                    arr[j].edad = arr[j + 1].edad;
                    arr[j + 1].edad = temporal;
                }
            } else {
                console.log("El parámetro ingresado es incorrecto");
            }
            
        }
    }
    return arr
}
// console.log(ordenar(estudiantes, "ascendente"));


// 4. Crear una funcion que retorne un nuevo array. Este deberá contener 
// solo los objetos cuya notaFinal sean mayores o iguales a 7
function notaFinalArray (arr) {
    let nuevoArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].notaFinal >= 7) {
            nuevoArr.push(arr[i]);
        }
    }
    return nuevoArr
}
// console.log(notaFinalArray(estudiantes));


// 5. Agregar un atributo id a cada objeto que inicie en 1 y sea secuencial
function agregarId (arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].id = i + 1;
    }
    return arr
}
// console.log(agregarId(estudiantes));
