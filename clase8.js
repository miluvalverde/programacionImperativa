const prompt = require("prompt-sync")({ sigint: true });

// EJERCICIO 1
// Crear una función que pida un valor por parámetro y muestre los 10
// números siguientes.

// function diezNumerosSiguientes() {
//     let numero = parseInt(prompt("Ingrese un número: "))
//     for (let i = 1; i <= 10; i++) {
//         numero++;
//         console.log(numero);
//     }
//     return numero
// }
// diezNumerosSiguientes()


// EJERCICIO 2
// Imprimir los números entre el 5 y el 20, saltando de tres en tres.

// for (let i = 5; i < 20; i) {
//     i = i + 3;
//     console.log(i);
// }


// EJERCICIO 3
// Escribir un programa que muestre la sumatoria de todos los números
// entre el 0 y el 100

// function sumatoriaHastaCien() {
//     let suma = 0
//     for (let i = 0; i <= 100; i++) {
//         suma = suma + i
//     }
//     return suma;
// }
// sumatoriaHastaCien()


// EJERCICIO 4
// Dado un número entero positivo, mostrar su factorial. El factorial de
// un número se obtiene multiplicando todos los números enteros
// positivos que hay entre el 1 y ese número.

// let numero = parseInt(prompt("Eliga un número entero positivo para obtener su factorial: "));
// function factorial(numero) {
//     let num = numero
//     for (let i = 1; i < num; i++) {
//         numero *= i;
//     }
//     console.log(numero);
//     return numero;
// }
// factorial(numero)


// EJERCICIO 5
// Crear una función que muestre todos los números de la secuencia de
// fibonacci hasta el valor ingresado por parámetro.