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
// console.log(edades);



// EJERICIO 2

const arrayCuentas =
[
    {
        titular: "Arlene Barr",
        estaHabilitada: false,
        saldo: 3253.40,
        edadTitular: 33,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Roslyn Torres",
        estaHabilitada: false,
        saldo: 3229.45,
        edadTitular: 27,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Cleo Lopez",
        estaHabilitada: true,
        saldo: 1360.19,
        edadTitular: 34,
        tipoCuenta: "corriente"
    },
    {
        titular: "Daniel Malone",
        estaHabilitada: true,
        saldo: 3627.12,
        edadTitular: 30,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: 1616.52,
        edadTitular: 34,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: 1408.68,
        edadTitular: 25,
        tipoCuenta: "corriente"
    }
]

// Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

let arrayCuentasUno = [];

for (let i = 0; i < arrayCuentas.length; i ++) {
    if (arrayCuentas[i].edadTitular > 30) {
        arrayCuentasUno.push(arrayCuentas[i]);
    }
}

// console.log(arrayCuentasUno);

// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.

let arrayCuentasDos = [];

for (let i = 0; i < arrayCuentas.length; i ++) {
    if (arrayCuentas[i].edadTitular >= 30) {
        arrayCuentasDos.push(arrayCuentas[i]);
    }
}

// console.log(arrayCuentasDos);


// Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.

let arrayCuentasTres = [];

for (let i = 0; i < arrayCuentas.length; i ++) {
    if (arrayCuentas[i].edadTitular <= 30) {
        arrayCuentasTres.push(arrayCuentas[i]);
    }
}

// console.log(arrayCuentasTres);

// TODO
// Obtener la cuenta con el titular de la misma más joven.



// Obtener un array con las cuentas habilitadas.

let arrayCuentasCinco = [];

for (let i = 0; i < arrayCuentas.length; i ++) {
    if (arrayCuentas[i].estaHabilitada === true) {
        arrayCuentasCinco.push(arrayCuentas[i])
    }
}

// console.log(arrayCuentasCinco);


// Obtener un array con las cuentas deshabilitadas.

let arrayCuentasSeis = [];

for (let i = 0; i < arrayCuentas.length; i ++) {
    if (arrayCuentas[i].estaHabilitada === false) {
        arrayCuentasSeis.push(arrayCuentas[i])
    }
}

// console.log(arrayCuentasSeis);

// TODO
// Obtener la cuenta con el menor saldo.

// TODO
// Obtener la cuenta con el mayor saldo.



// EJERICIO 3

// Desarrollar una función llamada generarID que reciba como parámetro el 
// array de cuentas y agregue a cada elemento (objeto literal) 
// una propiedad llamada id con un valor Numérico

function generarID(array) {
    for (let i = 0; i < array.length; i ++) {
        array[i].id = i + 1;
    }
    return array
}
console.log(generarID(arrayCuentas))





