// EJERCICIO 1 - LOOP DE PARES

// Deberás crear una función llamada loopDePares que reciba como parámetro un número y 
// haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
// En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, 
// mostrará en la consola: “El número X es par”.

function loopDePares (num) {
    let suma;
    for (let i = 0; i < 101; i++) {
        suma = i + num
        console.log(i);
        if (suma % 2 === 0) {
            console.log(`El número ${suma} es par`)
        }
    }
};

// loopDePares(3);



// EJERCICIO 2 - LOOP DE IMPARES CON PALABRA

// Deberás crear una función llamada loopDeImpares que reciba como parámetros un número y una palabra, 
// y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
// Luego, modificar el código para que, en caso de que ese número sumado con el 
// número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.

function loopDeImpares (num, str) {
    let suma;
    for (let i = 0; i < 101; i++) {
        suma = i + num
        console.log(i);
        if (suma % 2 === 0) {
            console.log(str)
        }
    }
};

// loopDeImpares(4, "hola");



// EJERCICIO 3 - SUMATORIA

// Deberás crear una función llamada sumatoria que reciba un número como parámetro 
// y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.

function sumatoria (num) {
    let suma = 0;
    for (let i = 1; i <= num; i++) {
        suma += i;
    }
    console.log(suma)
};

// (sumatoria(3));



// EJERCICIO 4 - NUEVO ARREGLO

// Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro 
// y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.

function nuevoArreglo (num) {
    let nuevoArreglo = [];
    for (let i = 1; i <= num; i++) {
        nuevoArreglo.push(i);
    }
    console.log(nuevoArreglo)
}

// nuevoArreglo(5);



// EJERCICIO 5 - SIMILAR STRING.SPLIT()

// Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. 
// Importante: no podés usar el String.split().

function split (str) {
    let nuevoArray = [];
    for (let i = 0; i < str.length; i++) {
        nuevoArray.push(str.charAt(i))
    }
    console.log(nuevoArray)
};

// split("hola")



// EJERCICIO 6 - MANEJANDO DOS ARREGLOS

// Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como 
// parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”. 

let arregloUno = [1, 2, 3, 4];
let arregloDos = ["h", "o", "l", "a"]; 

function arrayHandler (arrayUno, arrayDos) {
    for (let i = 0; i < arrayUno.length; i++) {
        console.log(`Soy ${arrayUno[i]} y yo soy ${arrayDos[i]}`)
    }
};

// arrayHandler(arregloUno, arregloDos)



// EJERCICIO 7 - PALÍNDROMO

// Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. 
// Debe retornar “true” en caso de que lo sea, y “false” en caso de que no. 

function palindromo (str) {
    let array = Array.from(str)
    for (let i = 0; i < str.length; i++) {
        if (array[i] != array[array.length - i - 1]) {
            return false;
        } else {
            return true
        }
    }
};

// console.log(palindromo("anilina"))