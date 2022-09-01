// EJERICIO 1

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// Obtener en un nuevo array las edades menores a 18.

let nuevoArray = [];

for (let i = 0; i < edades.length; i++) {
    if (edades[i] < 18) {
        nuevoArray.push(edades[i]);
    }
};
// console.log(nuevoArray);


// Obtener en un nuevo array las edades mayor o igual a 18.

let nuevoArrayDos = [];

for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 18) {
        nuevoArrayDos.push(edades[i]);
    }
};
// console.log(nuevoArrayDos);


// Obtener en un nuevo array las edades igual a 18.

let nuevoArrayTres = [];

for (let i = 0; i < edades.length; i++) {
    if (edades[i] === 18) {
        nuevoArrayTres.push(edades[i]);
    }
};
// console.log(nuevoArrayTres);


// Obtener el menor.
var minimoEdades = Math.min(...edades);
// console.log(minimoEdades);


// Obtener el mayor. 

var maximoEdades = Math.max(...edades);
// console.log(maximoEdades);


// Obtener el promedio de edades.

let suma = 0;
for (let i = 0; i < edades.length; i++) {
    suma += edades[i];
};
let promedio = suma / (edades.length);
// console.log(promedio);


// Incrementar en 1 todas las edades.

for (let i = 0; i < edades.length; i++) {
    edades[i] += 1;
};
console.log(edades);

