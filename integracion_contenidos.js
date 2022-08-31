// INTEGRACIÓN DE CONTENIDO


// Crear un array llamado misMascotas 
// Dentro de este array crearemos un objeto literal para cada mascota.

let misMascotas = [
    {
        nombre: "Firulais",
        raza: "salchicha",
        edad: 7,
        sonido: "Guau",
        sonidoDosVeces: function () {
            return this.sonido + this.sonido
        }
    },
    {
        nombre: "Estrella",
        raza: "bull dog",
        edad: 14,
        sonido: "Guauuu",
        sonidoDosVeces: function () {
            return this.sonido + this.sonido
        }
    },
    {
        nombre: "Luna",
        raza: "callejera",
        edad: 2,
        sonido: "Grrrr",
        sonidoDosVeces: function () {
            return this.sonido + this.sonido
        }
    }
];

// console.log(misMascotas[0].sonidoDosVeces());


// Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1.

function aumentarEdad(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].edad += 1;
    }
}
// aumentarEdad(misMascotas);
// console.log(misMascotas);


// Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
// Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
// Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
// Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad

function aumentarEdad2(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].edad > 6 && array[i].edad < 10) {
            array[i].edad += 1;
        } else if (array[i].edad < 6) {
            array[i].edad += 2;
        } else if (array[i].edad > 10) {
            array[i].edad += (array[i].edad / 2)
        }
    }
}

// aumentarEdad2(misMascotas);
// console.log(misMascotas)


// Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, que será secuencial 
// y que empezará en 1.

function generarId (array) {
    for (let i = 0; i < array.length; i++) {
        array[i].id = i + 1;
    }
}

// generarId(misMascotas);
// console.log(misMascotas)


// Por último eliminaremos la propiedad ‘raza’ , ya que para nosotros todos los animalitos son iguales 💘💞

function eliminarRaza (array) {
    for (let i = 0; i < array.length; i++) {
        delete array[i].raza;
    }
}

// eliminarRaza(misMascotas);
// console.log(misMascotas)