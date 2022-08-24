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

