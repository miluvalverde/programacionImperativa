const prompt = require("prompt-sync")({ sigint: true });

// EJERCICIO 1

// let edad = parseInt(prompt("Ingrese su edad"));
// if (edad < 0) {
//     console.log("Error, edad inválida. Por favor ingrese un número válido.")
// } else if (edad < 18) {
//     console.log("No puede pasar al bar.")
// } else if (edad < 21){
//     console.log("Puede pasar al bar, pero no puede tomar alcohol.")
// } else if (edad = 21) {
//     console.log("Puede pasar al bar y tomar alcohol. Felecitaciones por ser mayor de edad!")
// } else {
//     console.log("Puede pasar al bar y tomar alcohol")
// }
// if (edad % 2 != 0) {
//     console.log("¿Sabías que tu edad es impar?")
// }


// EJERCICIO 2 

// let vehiculo = prompt("Que tipo de vehiculo tienes (coche, moto o autobus)? ");
// let litrosConsumidos = parseInt(prompt("Cuantos litros consume? "))

// function totalPagar(vehiculo, litrosConsumidos) {
//     let aumento;
//     if (litrosConsumidos >= 0 && litrosConsumidos <= 25) {
//         aumento = 50;
//     } else if (litrosConsumidos >25) {
//         aumento = 25;
//     }
//     if (vehiculo == "coche") {
//         aumento = litrosConsumidos * 86
//         console.log("Debes pagar en total " + aumento + " pesos");
//         return litrosConsumidos;
//     } else if (vehiculo == "moto") {
//         aumento = litrosConsumidos * 70
//         console.log("Debes pagar en total " + aumento + " pesos");
//         return litrosConsumidos;
//     } else if (vehiculo == "autobus") {
//         aumento = litrosConsumidos * 55
//         console.log("Debes pagar en total " + aumento + " pesos");
//         return litrosConsumidos;
//     }
// }

// totalPagar(vehiculo,litrosConsumidos);


// EJERCICIO 3

// let baseSandwich = prompt("Qué tipo de sandwich quiere (Pollo, Carne o Vegetariano)? ");
// let panSandwich = prompt("Qué tipo de pan quiere? Opciones (coloque el número indicado en paréntesis): blanco c/orégano y parmesano (1), negro c/avena (2) o sin gluten (3)? ");
// let preguntaQueso = prompt("Desea que el sandwich posea queso? (Responder con un true o false) ");
// let preguntaTomate = prompt("Desea que el sandwich posea tomate? (Responder con un true o false) ");
// let preguntaLechuga = prompt("Desea que el sandwich posea lechuga? (Responder con un true o false) ");
// let preguntaCebolla = prompt("Desea que el sandwich posea cebolla? (Responder con un true o false) ");
// let preguntaMayonesa = prompt("Desea que el sandwich posea mayonesa? (Responder con un true o false) ");
// let preguntaMostaza = prompt("Desea que el sandwich posea mostaza? (Responder con un true o false) ");

// function sandwiches(strBase, strPan, booleanQueso, booleanTomate, booleanLechuga, booleanCebolla, booleanMayonesa,
//     booleanMostaza) {
//     let precio = 0;
//     if (strBase == "pollo") {
//         precio = 150;
//     } else if (strBase == "carne") {
//         precio = 200;
//     } else if (strBase == "vegetariano") {
//         precio = 100
//     } else {
//         console.log("Ingrese otra vez una base de sandwich de las especificadas")
//     }
//     if (strPan == "1") {
//         precio += 50;
//     } else if (strPan == "2") {
//         precio += 60;
//     } else if (strPan == "3") {
//         precio += 75;
//     } else {
//         console.log("Ingrese otra vez la base y el tipo de pan especificados")
//     }
//     if (preguntaQueso === "true") {
//         precio += 20;
//     }
//     if (preguntaTomate == "true") {
//         precio +=15;
//     }
//     if (preguntaLechuga == "true") {
//         precio +=10;
//     }
//     if (preguntaCebolla == "true") {
//         precio +=15;
//     }
//     if (preguntaMayonesa == "true") {
//         precio +=5;
//     }
//     if (preguntaMostaza == "true") {
//         precio +=5;
//     }
//     console.log(`El precio total del sandwich elegido es ${precio}`);
//      return precio;
// }
// sandwiches(baseSandwich, panSandwich, preguntaQueso, preguntaTomate, preguntaLechuga, preguntaCebolla, preguntaMayonesa, preguntaMostaza);


// EJERCICIO 4

// let preguntaNumero = parseInt(prompt("Qué número crees que eligió la computadora? "));

// function numeroSecreto(numero) {
//     let numeroRandom = Math.floor(Math.random() * 10) + 1;
//     if (numero === numeroRandom) {
//         console.log("Felicitaciones, acertaste");
//     } else {
//         console.log(`Lo siento! ${numero} no es igual a ${numeroRandom}`);
//     }
// }

// numeroSecreto(preguntaNumero)


// EJERCICIO 5

// function abrirParacaidas(velocidad, altura) {
//     if (velocidad < 1000 && altura >= 2000 && altura < 3000) {
//         console.log("El paracaídas se ha abierto");
//     } else {
//         console.log("Debido a valores de velocidad y altura incorrectos el paracaídas no se abrirá");
//     }
// }

// abrirParacaidas(500, 2200);


// EJERCICIO 6

// const perro = "perro";
// const pelota = "pelota";
// const arbol = "árbol";
// const genio = "genio";
// const hola = "hola";

// switch(hola) {
//     case "perro":
//         console.log("dog");
//         break;
//     case "pelota":
//         console.log("ball");
//         break;
//     case "ábrol":
//         console.log("tree");
//         break;
//     case "genio":
//         console.log("genius");
//         break;
//     default: 
//         console.log("La palabra ingresada es incorrecta");
// }
