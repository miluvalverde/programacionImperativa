// CLASE 5

function pulgadasACentimetros (num) {
    return num * 2.54;
};
// console.log(pulgadasACentimetros(1));

function stringAUrl (str) {
    return `http://www.${str}.com`
};
// console.log(stringAUrl("pepito"));

function admiracion (str) {
    return `${str}!!!!`
};
// console.log(admiracion("hola"));

function edadPerros (num) {
    return num * 7
};
// console.log(edadPerros(6));

function horaTrabajoMensual (num) {
    return num / 40;
};
// console.log(horaTrabajoMensual(40000));

function calculadoraIMC (numAltura, numPeso) {
    let calculo = numPeso / (numAltura * numAltura)
    return calculo;
}
// console.log(calculadoraIMC(1.57, 57));

function stringMayuscula (str) {
    let mayuscula = str.toUpperCase();
    return mayuscula;
};
// console.log(stringMayuscula("hola"));

function tipoDeDato (dato) {
    return typeof dato;
}
// console.log(tipoDeDato(4));

function circunferencia (num) {
    let calculoCircunferencia = num * 2 * Math.PI;
    return calculoCircunferencia;
};
// console.log(circunferencia(5));







// CLASE 6

function sumar (num1, num2) {
    return num1 + num2;
};
function restar (num1, num2) {
    return num1 - num2;
};
function multiplicar (num1, num2) {
    return num1 * num2;
};
function dividir (num1, num2) {
    return num1 / num2;
}

// console.log("-------------- Testeo de Operaciones / Calculadora --------------");
// console.log(sumar(3, 4));
// console.log(restar(23, 78));
// console.log(multiplicar(2355, 347));
// console.log(dividir(125, 78));
// console.log(dividir(20, 0));

function cuadradoDeUnNumero (num) {
    return multiplicar(num, num);
};
function promedioDeTresNumeros (num) {
    return dividir(sumar(sumar(num, num), num), num);
};
function calcularPorcentaje (num1, num2) {
    return dividir(multiplicar(num2, num1), 100);
};
function GeneradorDePorcentaje (num1, num2) {
    return dividir(multiplicar(num2, 100), num1);
};







// CLASE 7

// if(edad < 18) {
//         console.log("No puede pasar al bar.")
//     } else if (edad < 0) {
//         console.log("Error, edad inálida. Por favor ingrese un número válido.");
//     } else if (edad < 21){
//         console.log("Puede pasar al bar, pero no puede tomar alcohol.")
//     } else if (edad === 21) {
//         console.log("Puede pasar al bar y tomar alcohol. Felicitaciones por ser mayor de edad!!");
//     }
//     else {
//         console.log("Puede pasar al bar y tomar alcohol.")
// }
// if (edad % 2 != 0) {
//     console.log("¿Sabías que tu edad es impar?");
// }

function totalAPagar(strVehiculo, numLitros) {
    let precioPorLitro = 0;
    if (strVehiculo === "coche") {
        precioPorLitro = 86 * numLitros;
    } else if (strVehiculo === "moto") {
        precioPorLitro = 70 * numLitros;
    } else if (strVehiculo === "autobús") {
        precioPorLitro = 55 * numLitros;
    }
    if (numLitros > 0 && numLitros < 25) {
        precioPorLitro += 50;
    } else if (numLitros > 25) {
        precioPorLitro += 25;
    }
    return precioPorLitro;
};
// console.log(totalAPagar("coche", 1));

function localSandwiches (strBase, strPan, strQueso, strTomate, strLechuga,
    strCebolla, strMayonesa, strMostaza) {
        let precio = 0;
        // condición base sandwich
        if (strBase === "pollo") {
            precio = 150;
        } else if (strBase === "carne") {
            precio = 200;
        } else if (strBase === "veggie") {
            precio = 100;
        }
        // condición pan
        if (strPan === "blanco") {
            precio += 50;
        } else if (strPan === "negro") {
            precio += 60;
        } else if (strPan === "s/gluten") {
            precio += 75;
        }
        // condición adicionales
        if (strQueso === "si") {
            precio += 20;
        } 
        if (strTomate === "si") {
            precio += 15;
        } 
        if (strLechuga === "si") {
            precio += 10;
        } 
        if (strCebolla === "si") {
            precio += 15;
        } 
        if (strMayonesa === "si") {
            precio += 5;
        } 
        if (strMostaza === "si") {
            precio += 5;
        } 
};

function numeroSecreto (num) {
    let numeroRandom = Math.floor(Math.random() * 10) + 1;
    if (num === numeroRandom) {
        console.log("Felicitaciones! Ese era.");
    } else {
        console.log("Lo siento! Tendrás más suerte la próxima.")
    }
};

function abrirParacaidas (numVelocidad, numAltura) {
    if (numVelocidad < 1000 && numAltura >= 2000 && numAltura < 3000) {
        console.log("El paracaídas puede abrirse");
    } else {
        console.log("Debido a valores de velocidad y altura incorrectos el paracaídas no se abrirá");
    }
};

let traductor = "perro";
// switch (traductor) {
//     case "perro":
//         console.log("dog");
//         break;
//     case "casa":
//         console.log("house");
//         break;
//     case "pelota":
//         console.log("ball");
//         break;
//     case "árbol":
//         console.log("tree");
//         break;
//     case "genio":
//         console.log("genius");
//         break;
//     default:
//         console.log("La palabra ingresada es incorrecta");
// };

// switch (valoracion) {
//     case "Muy mala":
//         console.log("Calificaste la pregunta como Muy mala. Lo lamentamos mucho");
//         break;
//     case "Mala":
//         console.log("Calificaste la pregunta como Mala. Lo lamentamos mucho");
//         break;
//     case "Mediocre":
//         console.log("Calificaste la pregunta como Mediocre. Lo lamentamos mucho");
//         break;
//     case "Buena":
//         console.log("Calificaste la pregunta como Buena. Me alegro");
//         break;
//     case "Muy buena":
//         console.log("Calificaste la pregunta como Muy buena. Me alegro");
//         break;
//     default:
//         console.log("Ingresaste un valor inválido");
// }







// CLASE 8

function numerosSiguientes (num) {
    let numeros = [];
    for (let i = 1; i <= 10; i++) {
        numeros.push(num + i)
    }
    return numeros;
};
// console.log(numerosSiguientes(10));

// for (let i = 5; i <= 20; i += 3) {
//     console.log(i);
// };

let suma = 0;
for (let i = 0; i < 100; i++) {
    suma = suma + i;
}
// console.log(suma);

function factorial (num) {
    let numero = num;
    for (let i = 1; i < num; i++) {
        numero *= i;
    }
    return numero;
};
// console.log(factorial(4));







// CLASE 9

const nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];
function iterarArreglo (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
};
// iterarArreglo(nombres);

function mayorA500 (num) {
    let porcentaje = 0;
    if (num > 500) {
        porcentaje = (18 * num) / 100;
        console.log(porcentaje);
    }
}

let arrayElemento = ["hola", "como", "estas", "?"]
function elemento (array) {
    if (array.length >= 3) {
        console.log(array[2]);
    } else {
        console.log(-1);
    }
};
// elemento(arrayElemento);

function minimo (num) {
    if (num < 10) {
        console.log(10 - num);
    } else if (num < 100) {
        console.log(100 - num);
    }
};
// minimo(30);







// CLASE 10

const peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

function convertirMayusculas (array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();
    }
    console.log(array);
}
// convertirMayusculas(peliculas);

const peliculas_animadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

const videojuego = []
let juego = peliculas_animadas.pop();
videojuego.push(juego);
// console.log(videojuego);
// console.log(peliculas_animadas);

function unSoloArray (array1, array2) {
    let array2Length = array2.length
    for (let i = 0; i < array2Length; i++) {
        array1.push(array2[i]);
    }
    return(array1)
}
// console.log(unSoloArray(peliculas, peliculas_animadas));

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
function compararCalificaciones (array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        console.log(array1[i] === array2[i]);
    }
};
// compararCalificaciones(asiaScores, euroScores);

function imprimirInverso (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[array.length - i - 1]);
    }
};
// imprimirInverso(asiaScores);

function inverso (array) {
    let arrayInverso = [];
    for (let i = 0; i < array.length; i++) {
        arrayInverso.push(array[array.length - i - 1]);
    }
    return arrayInverso
}
// console.log(inverso(asiaScores));

let ejemploSuma = [1, 4, 5]

function sumaArray (array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma = suma + array[i];
    }
    return suma
}
// console.log(sumaArray(ejemploSuma));

function arrayJoin (array) {
    let arrayString = array.toString();
    let arrayStringSinComas = arrayString.replace(/,/g, "");
    return(arrayStringSinComas);
} 