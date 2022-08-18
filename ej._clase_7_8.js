const prompt = require("prompt-sync")({ sigint: true });

// ----------------------------- EJERCICIO -----------------------------
// Escribí un programa que le pida al usuario ingresar una frase y la imprima en la consola.
// Recordá que para pedirle al usuario que escriba una frase debés utilizar el método prompt() 
// y para escribir en la consola
// debés utilizar el método console.log().

// let pregunta = prompt("Ingresa una frase: ");
// console.log(pregunta);


// ----------------------------- EJERCICIO -----------------------------
// Escribí un programa que le pregunte al usuario su nombre e imprima "Hola " 
// seguido del nombre y un signo de
// exclamación. Por ejemplo, si el usuario ingresa "Pedro" el programa debe
// imprimir en la consola "Hola Pedro!".

// let pregunta = prompt("Cuál es tu nombre? ");
// console.log(`Hola ${pregunta}!`);


// ----------------------------- EJERCICIO -----------------------------
// Escribí un programa que le pida al usuario ingresar un número,
// luego le pida un segundo número, e imprima en la consola la
// suma de los dos números que ingresó el usuario.

// let preguntaUno = parseInt(prompt("Ingresa un número: "));
// let preguntaDos = parseInt(prompt("Ingresa un segundo número: "));
// let suma = (a, b) => a + b;
// console.log("La suma de los dos números elegidos es " + suma(preguntaUno, preguntaDos));


// ----------------------------- EJERCICIO -----------------------------
// Escribí un programa que le pida al usuario su año de
// nacimiento e imprima su edad actual en la consola con la frase
// "Tienes X años" (siendo X la cantidad de años).
// Por ejemplo, asumiendo que el año actual es 2019 y el usuario
// ingresa 1999, el programa debe imprimir en la consola: “Tienes 20 años”.

// let pregunta = parseInt(prompt("En que año naciste? "));
// let fechaNacimiento = (numero) => 2022 - numero;
// console.log("Tienes " + fechaNacimiento(pregunta) + " años")


// ----------------------------- EJERCICIO -----------------------------
// Escribí un programa que piense un número de forma aleatoria
// del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el
// número es correcto debe imprimir en la consola "Felicitaciones,
// ese era!", de lo contrario, debe imprimir "Lo siento, intenta
// nuevamente!"

// let numeroRandom = Math.ceil(Math.random() * 10);
// function adivinar(numero) {
//     let pregunta = parseInt(prompt("Qué número (del 1 al 10) crees que eligió la computadora? "));
//     if (numero == pregunta) {
//         console.log("Felicitaciones, ese era!");
//     } else {
//         console.log("Lo siento, el número elegido por la computadora es " + numeroRandom + ". Intenta nuevamente!");
//     }
// } 
// adivinar(numeroRandom);



// ----------------------------- EJERCICIO -----------------------------
// Escribí un programa que imprima los números pares del 0 al 100.

// function numerosParesHasta100() {
//     for (i = 1; i <= 100; i++) {
//         if (i % 2 == 0) {
//             console.log(i);
//         }
//     }
// }
// numerosParesHasta100()


// ----------------------------- EJERCICIO -----------------------------
// Escribí un programa que itere sobre el arreglo nombres e
// imprima cada uno en la consola: const nombres = ["Pedro",
// "Pablo", "Maria", "Juan", "Diana"];

// let arreglo = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];
// function iterarArreglo() {
//     for (let i = 0; i <= 4; i++) {
//         console.log(arreglo[i]);
//     }
// }
// iterarArreglo();

// ----------------------------- EJERCICIO -----------------------------
// Construí un pseudocódigo que permita ingresar un número, si
// el número es mayor de 500, se debe calcular y mostrar en
// pantalla el 18% de este.

// function calculoDel18Porciento() {
//     let numero = parseInt(prompt("Ingresa un número: "));
//     let porciento = 0;
//     if (numero > 500) {
//         porciento = (18 * numero) / 100;
//     }
//     console.log(porciento);
//     return porciento;
// } 
// calculoDel18Porciento();


// ----------------------------- EJERCICIO -----------------------------
// Escribí una función llamada elemento que recibe un arreglo
// como parámetro. La función debe devolver el valor que se
// encuentra en la tercera posición. Si el arreglo no tiene al menos
// 3 elementos deberá retornar -1.

// const arreglo = ["hola", "como"];
// function elemento(arreglo) {
//     if (arreglo.length >= 3) {
//         console.log(arreglo[2]);
//         return arreglo[2];
//     } else {
//         console.log("-1")
//         return "-1";
//     }
// }
// elemento(arreglo);

// ----------------------------- EJERCICIO -----------------------------
// Se ingresa por teclado un número natural de hasta 2 cifras, si
// tiene una cifra que muestre lo mínimo que le falta para ser un
// número de 2 cifras; de lo contrario, que muestre lo mínimo que
// le falta para ser un número de 3 cifras. Considerar que el
// usuario ingresa números de hasta dos cifras.

// let numeroNatural = parseInt(prompt("Elige un número natural de hasta 2 cifras "));
// if (numeroNatural.toString().length == 1) {
//     numeroNatural = Math.abs(numeroNatural - 10);
//     console.log(numeroNatural);
// } else if (numeroNatural.toString().length == 2) {
//     numeroNatural = Math.abs(numeroNatural - 100)
//     console.log(numeroNatural);
// } else {
//     console.log("Recuerde ingresar un número de máximo 2 cifras")
// }


// ----------------------------- EJERCICIO -----------------------------
// Hacer un algoritmo que muestre el promedio de varias
// notas o de N notas ingresadas, se debe definir el valor de N
// para conocer la cantidad de notas a ingresar.




// ----------------------------- EJERCICIO -----------------------------
// Hacer un programa que calcule la suma de los N primeros
// números naturales, dónde N es el número límite ingresado por
// teclado.




