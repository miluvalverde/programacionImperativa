// Matrices:
// 1. Crear una matriz de 3 x 4
let matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

// 2. Crear una funcion que suma todos los valores de la matriz que sean pares
function sumarPares (matrix) {
    let suma = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] % 2 === 0) {
                suma += matrix[i][j]
            }
        }
    }
    return suma
};
// console.log(sumarPares(matriz));


// 3. Crear una funcion que cambie todos los valores de la matriz que sean 
// multiplos de 5 por un numero 1
function cambiarValores (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] % 5 === 0) {
                matrix[i][j] = 1
            }
        }
    }
    return matrix
};
// console.table(cambiarValores(matriz));


// 4. Crear una funcion que genere un nuevo array donde se guarden 
// todos los numeros impares de la matriz
function nuevoArray (matrix) {
    let nuevoArr = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] % 2 != 0) {
                nuevoArr.push(matrix[i][j])
            }
        }
    }
    return nuevoArr
}
// console.log(nuevoArray(matriz));


// 5. Crear una funcion que retorne la multiplicacion de todos los 
// elementos de la fila 1
function multiplicacionFila (matrix) {
    let multiplicacion = 1;
    for (let i = 0; i < matrix[0].length; i++) {
        multiplicacion *= matrix[0][i]
    }
    return multiplicacion
};
// console.log(multiplicacionFila(matriz));






// Bubble Sort:
// 1. Armá un array llamado estudiantes de 3 objetos, que cada uno de ellos 
// tenga: nombre, edad y notaFinal.
let estudiantes = [
    {
        nombre: "Milagros",
        edad: 22,
        notaFinal: 10
    },
    {
        nombre: "Fabian",
        edad: 42,
        notaFinal: 8
    },
    {
        nombre: "Nicolas",
        edad: 34,
        notaFinal: 5
    }
]


// 2. Crear una funcion que ordene esos objetos por edad de forma ascendente
function ordenarEdadAsc (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j].edad > arr[j + 1].edad) {
                let temporal = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temporal;
            }
        }
    }
    return arr
}
// console.log(ordenarEdadAsc(estudiantes));


// 3. Crear una funcion que reciba por parametro el array y un string que 
// indique de que modo se deberà ordenarlo (de forma ascendente o descendente)
function ordenado (arr, str) {
    str = str.toUpperCase()
    if (str === "ASC") {
        ordenarEdadAsc(arr);
    } else if (str === "DESC") {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[j].edad < arr[j + 1].edad) {
                    let temporal = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temporal;
                }
            }
        }
    } else {
        console.log("El método de ordenamiento es incorrecto. Vuelva a ingresar");
    }
    return arr
};
// console.log(ordenado(estudiantes, "desc"));


// 4. Crear una funcion que retorne un nuevo array. Este deberá contener 
// solo los objetos cuya notaFinal sean mayores o iguales a 7
function arrayNotaFinal (arr) {
    let nuevoArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].notaFinal >= 7) {
            nuevoArray.push(arr[i])
        }
    };
    return nuevoArray
};
// console.log(arrayNotaFinal(estudiantes));


// 5. Agregar un atributo id a cada objeto que inicie en 1 y sea secuencial
function agregarID (arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].id = i + 1
    }
    return arr
};
// console.log(agregarID(estudiantes));

