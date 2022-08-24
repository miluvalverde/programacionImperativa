// ============== EJERCICIO 1 ==============

// Parte 1

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

// Parte 2

function mayusculas (array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();
        console.log(array[i]);
    }
}
// mayusculas(peliculas);

// Parte 3

let peliculas_animadas = ["toy story", "finding Nemo", "kung-fu panda", "wally"];

function unirArrays (array1, array2) {
    mayusculas(array1);
    mayusculas(array2);
    let aux;
    let x = array1.length;
    for (let i = 0; i < x; i++) {
        aux = array1.pop();
        array2.push(aux);
    }
    return array2
}
// unir(peliculas, peliculas_animadas)

// Parte 4
function videojuego(array2) {
    let juego = array2.pop();
    video_juego.push(juego);
    console.log(video_juego);
    return video_juego
}
// videojuego(peliculas_animadas);

let video_juego = ["fortnite"]


// Parte 5

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];

const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararAsiaEuro (array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        console.log(array1[i] === array2[i]);
    }
}
// compararAsiaEuro(asiaScores, euroScores)




// ============== EJERCICIO 2 - ARRAY INVERSO ==============

// Creá la función imprimirInverso que tome un array como argumento y que
// imprima en la consola cada elemento en orden inverso (no tenés que invertir el
// array).

let palabras = ["hola", "como", "estas", "?"];

function imprimirInverso(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[Math.abs(i - (array.length - 1))]);
    }
}
// imprimirInverso(palabras)

// Creá la función inversor que tome un array como argumento y devuelva uno
// nuevo invertido.

let palabras2 = ["hello", "how", "are", "you", "?"];

let arrayInvertido = [];

function invertirArray(array) {
    for (let i = 0; i < array.length; i++) {
        arrayInvertido.push(array[Math.abs(i - (array.length - 1))]);
    }
    console.log(arrayInvertido);
    return arrayInvertido;
}
// invertirArray(palabras2);
