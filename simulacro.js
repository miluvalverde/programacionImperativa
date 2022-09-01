// Realizar una función que reciba por parámetro un valor numérico. 
// Si este es un número par y múltiplo de 5, entonces retornar true. 
// Si en cambio, es un número impar o es múltiplo de 3 entonces retornar 
// “cumple con los requisitos”. Para cualquier otra situación, 
// retornar false.

function numero (num) {
    if (num % 2 === 0 && num % 5 === 0) {
        return true;
    } else if (num % 2 != 0 || num % 3 === 0) {
        return "cumple con los requisitos";
    } else {
        return false;
    }
};

// console.log(numero(4));


// . Realizar una función que reciba dos valores por parámetro,  
// el primero un booleano y el segundo un número entero:
// -	Si el primer parámetro es true y el segundo es múltiplo de 10, 
// deberá retornar el triple del segundo parámetro.
// -	Si el primer parámetro es true y el segundo no es múltiplo de 3, 
// deberá retornar el doble del segundo parámetro.
// -	Si el primer parámetro es false, deberá retornar el valor 
// del segundo parámetro màs el primer parámetro.
// -	Para cualquier otro caso, retorna “Parámetro incorrecto”

function otraFuncion (boolean, num) {
    if (boolean === true) {
        if (num % 10 === 0) {
            return 3 * num;
        } else if (num % 3 != 0) {
            return 2 * num;
        }
    } else if (boolean === false) {
        return num;
    } else {
        return "Parámetro incompleto"
    }
}

// console.log(otraFuncion(true, 40));


// Crear un array vacío de cervezas y agregar mediante un método de array 
// 3 objetos en èl, cuyos atributos sean: nombre, precio e IBU (amargor, dato numérico)
// Luego, realizar una función que reciba por parámetro el 
// array y un valor numérico que represente al precio máximo, 
// deberá retornar un nuevo array con las cervezas cuyo precio sea mayor 
// al indicado.

let cervezas = [
    {
        nombre: "IPA",
        precio: 300,
        IBU: 3,
    },
    {
        nombre: "Pilsen",
        precio: 150,
        IBU: 1,
    },
    {
        nombre: "Heineken",
        precio: 430,
        IBU: 8,
    }
];

function agregarPrecioMaximo (array, num) {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].precio > num) {
            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
};

// console.log(agregarPrecioMaximo(cervezas, 200));