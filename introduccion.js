const prompt = require("prompt-sync")({ sigint: true });

let nombreDelUsuario = prompt("Por favor ingresa tu nombre de usuario ")

console.log( "Hola " + nombreDelUsuario )