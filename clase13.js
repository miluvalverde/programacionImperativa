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
    return suma
};

// console.log(sumatoria(3));