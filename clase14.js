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
// Obtener la cuenta con el titular de la misma m??s joven.



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

// Desarrollar una funci??n llamada generarID que reciba como par??metro el 
// array de cuentas y agregue a cada elemento (objeto literal) 
// una propiedad llamada id con un valor Num??rico

function generarID(array) {
    for (let i = 0; i < array.length; i ++) {
        array[i].id = i + 1;
    }
    return array
}
generarID(arrayCuentas);



// EJERICIO 4

// Desarrollar una funci??n llamada buscarPorId que reciba como par??metro 
// el array de cuentas y un id, en caso de encontrar retornar la
// cuenta (??l objeto literal completo), caso contrario retornar null

function buscarPorId(array, id) {
    for (let i = 0; i < array.length; i ++) {
        if (array[i].id === id) {
            console.log(array[i]);
        } else {
            console.log(null);
        }
    }
};
// buscarPorId(arrayCuentas, 3);



// EJERICIO 5

// Desarrollar una funci??n llamada filtrarPorSaldos que reciba 
// como par??metro el array de cuentas y un saldo (Number), 
// deber?? retornar un array que cuyas cuentas se encuentren 
// por debajo del saldo enviado por par??metro

function filtrarPorSaldos (array, saldo) {
    let arraySaldo = [];
    for (let i = 0; i < array.length; i ++) {
        if (array[i].saldo < num) {
            arraySaldo.push(array[i]);
        }
    }
    return arraySaldo;
}

// console.log(filtrarPorSaldos(arrayCuentas, 100000));



// EJERICIO 6

// Desarrollar una funci??n llamada incrementarSaldo que reciba 
// como par??metro el array de cuentas, un id y un saldo, 
// deber?? incrementar ??l saldo de la cuenta, en caso de encontrar, 
// caso contrario retornar undefined 

function incrementarSaldo (array, id, saldo) {
    for (let i = 0; i < array.length; i ++) {
        if (array[i].id === id) {
            array[i].saldo += saldo;
            console.log(array[i]);
        } else {
            console.log(undefined);
        }
    }
}
incrementarSaldo(arrayCuentas, 3, 1000);