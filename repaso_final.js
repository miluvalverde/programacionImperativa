// =================== Trabajando con funciones ===================

// Crear una función que convierta pulgadas en centímetros.
// Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
function pulgadasCentimetros (num) {
    return num * 2.54
};
// console.log(pulgadasCentimetros(1));


// 2. Crear una función que recibe un string y lo convierte en una URL.
// Ej: “pepito” es devuelto como “http://www.pepito.com”
function convertirURL (str) {
    return `http://www.${str}.com`
};
// console.log(convertirURL("hola"));


// 3. Crear una función que recibe un string y devuelve la misma frase pero con
// admiración.
let admiracion = str => `${str}!!!`;
// console.log(admiracion("hola"));


// 4. Crear una función que calcule la edad de los perros, considerando que 1 año
// para nosotros son 7 de ellos.
let calcularEdadPerro = num => num * 7;
// console.log(calcularEdadPerro(5));


// 5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
// sueldo mensual como parámetro.
// PD: considerá que tu mes de trabajo tiene 40 horas.
let sueldoHoraTrabajo = num => num / 40;
// console.log(sueldoHoraTrabajo(40000));



// Crear la función calculadorIMC() que reciba la altura en metros y el peso en
// kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
// probando diferentes valores.
let calculadorIMC = (numAltura, numPeso) => numPeso / (numAltura * numAltura);
// console.log(calculadorIMC(1.57, 58)); 



// Crear una función que recibe un string en minúscula, 
// lo convierta a mayúsculas y lo retorne.
// Investigá qué hace el método de strings .toUpperCase()
let convertirMayuscula = str => str.toUpperCase();
// console.log(convertirMayuscula("Milagros"));


// 8. Crear una función que recibe un parámetro y devuelve qué tipo 
// de dato es ese parámetro.
// Pista: te servirá revisar qué hace la palabra reservada typeof.
let tipoParametro  = prm => typeof(prm);
// console.log(tipoParametro("h"));


// 9. Crear una función que le pasamos el radio de un círculo 
// y nos devuelve la circunferencia.
// Pista: Investigá si el objeto Math tiene entre sus 
// propiedades el número Pi.
let calculoCircunferencia = num => Math.PI * num * num;
// console.log(calculoCircunferencia(10));






// =================== Hagamos una calculadora ===================
// 2. Crear una función sumar, esta deberá recibir dos parámetros y retornar la
// suma de los mismos.
let sumar = (num1, num2) => num1 + num2;
// console.log(sumar(3, 2));


// 3. Crear una función restar, la cual deberá recibir dos parámetros y retornar la
// resta del primero menos el segundo.
let restar = (num1, num2) => num1 - num2;
// console.log(restar(3, 2));


// 4. Crear una función multiplicar, la misma deberá recibir dos parámetros y
// retornar el resultado de su multiplicación.
let multiplicar = (num1, num2) => num1 * num2;
// console.log(multiplicar(5, 6));


// 5. Crear una función dividir, la cual recibirá dos parámetros y retornar el resultado
// de la división del primero sobre el segundo.
let dividir = (num1, num2) => num1 / num2;
// console.log(dividir(5, 2));


// Crear una función que se llame cuadradoDeUnNumero, la cual recibe un
// número como parámetro y deberá retornar ese número elevado al cuadrado.
// Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para
// calcular el cuadrado del parámetro ingresado a cuadradoDeUnNumero()
let cuadradoDeUnNumero = num1 => multiplicar(num1, num1);
// console.log(cuadradoDeUnNumero(4));


// 2. Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio
// de 3 números, que serán ingresados por parámetro.
// Importante: promedioDeTresNumeros() deberá utilizar algunas funciones
// previamente creadas de nuestra calculadora.
let promedioDeTresNumeros = (num1, num2, num3) => dividir(sumar(sumar(num1, num2), num3), 3);
// console.log(promedioDeTresNumeros(3, 5, 5));


// 3. Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número
// total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total.
// Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.
// Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente
// creadas de nuestra calculadora.
let calcularPorcentaje = (numTotal, numPorcentaje) => dividir(multiplicar(numTotal, numPorcentaje), 100)
// console.log(calcularPorcentaje(300, 15));






// =================== Controlando el flujo de nuestras aplicaciones ===================
// Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
// inválida. Por favor ingrese un número válido."
// Importante: no se deberá mostrar ningún otro mensaje.
// ● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
// la mayoría de edad.
// ● Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu
// edad es impar?".
let edad = 21 
// if (edad < 0) {
//     console.log("Error, edad inválida. Por favor ingrese un número válido.");
// }
// else if(edad < 18) {
//     console.log("No puede pasar al bar.")
// } else if (edad < 21) {
//     console.log("Puede pasar al bar, pero no puede tomar alcohol.")
// } else if (edad = 21) {
//     console.log("Puede pasar al bar y tomar alcohol. Felicitaciones por llegar a la mayoría de edad!");
// }
// else {
//     console.log("Puede pasar al bar y tomar alcohol.")
// }
// if (edad % 3 === 0) {
//     console.log("¿Sabías que tu edad es impar?");
// }



// totalAPagar()
// Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
// litrosConsumidos.
// A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
// cuenta las siguientes consideraciones:
// ● Si el vehículo es “coche”, el precio por litro es de $86.
// ● Si es “moto”, ha de ser $70.
// ● Si es “autobús”, ha de ser $55.
// ● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
// ● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.
function totalAPagar (vehiculo, litrosConsumidos) {
    let precioPorLitro = 0;
    if (vehiculo === "coche") {
        precioPorLitro = 86;
    } else if (vehiculo === "moto") {
        precioPorLitro = 70;
    } else if (vehiculo === "autobús") {
        precioPorLitro = 55;
    }
    let total = 0;
    if (litrosConsumidos > 0 && litrosConsumidos < 25) {
        total = litrosConsumidos * precioPorLitro + 50;
    } else if (litrosConsumidos > 25) {
        total = litrosConsumidos * precioPorLitro + 25;
    }
    return total
}
// console.log(totalAPagar("coche", 10));


// Local de sándwiches
// Necesitamos armar el sistema para un local de venta de sándwiches. Los clientes
// eligen el sándwich base que tiene un precio y, por cada selección siguiente, se le suma
// el valor de su selección al precio. Por ejemplo, partiendo de un sándwich base
// vegetariano con un precio x, después se selecciona pan negro con un precio y, por lo
// que el total a pagar sería x+y, y así sucesivamente con el resto de los ingredientes.
// Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz
// donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros
// recibiremos los datos de la siguiente manera.
// Nos llega un string indicando el tipo de sándwich base. Estos tienen un valor base
// diferente por cada selección:
// ● Pollo = $150 (“pollo”)
// ● Carne = $200 (“carne”)
// ● Vegetariano (verduras asadas) = $100 (“veggie”)
// Luego, el sistema pregunta al cliente qué tipo de pan quiere. Tienen para elegir entre
// otras tres opciones, por lo que recibiremos también otro string con el tipo de pan
// deseado:
// ● Blanco c/orégano y parmesano = $50 (“blanco”)
// ● Negro c/avena = $60 (“negro”)
// ● Sin gluten = $75 (“s/gluten”)
// Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes
// adicionales:
// ● Queso = $20
// ● Tomate = $15
// ● Lechuga = $10
// ● Cebolla = $15
// ● Mayonesa = $5
// ● Mostaza = $5
// Cada uno de estos adicionales están representados por booleanos —es decir, true o
// false—, dependiendo de si aceptan o no cada uno de los adicionales —nos llegan un
// total de seis valores booleanos, uno por cada adicional—.
// Nuestro trabajo es crear una función que reciba estos ocho parámetros —un string
// para el sándwich base, uno para el pan y los seis booleanos de los adicionales—. La
// función deberá consultar primero qué tipo de sándwich base se seleccionó, luego el
// tipo de pan, y por último deberá verificar qué adicionales se seleccionaron.
// Finalmente, deberá retornar el valor numérico del total a pagar del cliente.
function crearSandwich (base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
    let precio = 0;
    if (base === "pollo") {
        precio = 150;
    } else if (base === "carne") {
        precio = 200;
    } else if (base === "veggie") {
        precio = 100;
    }
    if (pan === "blanco") {
        precio += 50;
    } else if (pan === "negro") {
        precio = 60;
    } else if (pan === "s/gluten") {
        precio = 75;
    }
    if (queso === true) {
        precio += 20;
    }
    if (tomate === true) {
        precio += 15;
    }
    if (lechuga === true) {
        precio += 10;
    }
    if (cebolla === true) {
        precio += 15;
    }
    if (mayonesa === true) {
        precio += 5;
    }
    if (mostaza === true) {
        precio += 5;
    }
    return precio
};


// ¿Cuál es el número secreto?
// Creá una función que reciba un parámetro numérico y verifique si el mismo es el
// número secreto. El número secreto deberá ser seleccionado de manera random de
// entre 1 y 10 —investigá qué hace la función Math.random()—. En caso de ser correcto,
// retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un
// mensaje de aliento junto con el número ingresado y el secreto.
let numeroRandom = Math.floor(Math.random() * 10) + 1;
function numeroSecreto (num) {
    if (numeroRandom === num) {
        console.log("Felicitaciones!");
    } else {
        console.log(`Lo siento! El número era ${numeroRandom}`);
    }
}
// numeroSecreto(4);


// abrirParacaidas()
// Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
// altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
// siguiente:
// ● La velocidad debe ser menor a 1000 km/h.
// ● La altura debe ser mayor o igual a 2000 m y menor a 3000 m.
function abrirParacaidas (velocidad, altura) {
    if (velocidad < 1000 && altura >= 2000 && altura < 3000) {
        console.log("El paracaídas puede abrirse");
    }
};
// abrirParacaidas(500, 2500);


// Traductor condicional
// Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
// "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
// inglés.
// En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
// informe que la palabra ingresada es incorrecta.
let objeto = "perro";
// switch (objeto) {
//     case "perro":
//         console.log("dog");
//         break;
//     case "casa":
//         console.log("house");
//         break;
//     case "pelota":
//         console.log("ball");
//         break
//     case "ábrol":
//         console.log("tree");
//         break
//     case "genio":
//         console.log("genius");
//         break
//     default:
//         console.log("Lo siento, vuelve a escribir la palabra");
// }



// Valoración de películas
// Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver
// según la siguiente escala:
// ● Muy mala.
// ● Mala.
// ● Mediocre.
// ● Buena.
// ● Muy buena.
// Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás
// por su valoración.
// Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
// En caso de que ingresara un valor distinto, mostrarle el mensaje: "Ingresaste un valor
// inválido".
let valoracion = "Muy mala";
// switch (valoracion) {
//     case "Muy mala":
//         console.log("Calificaste la película como Muy mala. Lo lamentamos mucho.");
//         break;
//     case "Mala":
//         console.log("Calificaste la película como Mala. Lo lamentamos mucho.");
//         break;
//     case "Mediocre":
//         console.log("Calificaste la película como Mediocre. Lo lamentamos mucho.");
//         break;
//     case "Buena":
//         console.log("Calificaste la película como Buena. Lo lamentamos mucho. Me alegro");
//         break;
//     case "Muy buena":
//         console.log("Calificaste la película como Muy buena. Lo lamentamos mucho. Me alegro");
//         break;
//     default:
//         console.log("Ingresaste un valor inválido");
// }





// =================== Bucles y repeticiones ===================
// 1) Crear una función que pida un valor por parámetro y muestre los 10
// números siguientes.
function numerosSiguientes (num) {
    for (i = num; i < (num + 10); i++) {
        console.log(i + 1);
    }
};
// numerosSiguientes(10);


// 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.
// for (i = 5; i <= 20; i++) {
//     i += 3;
//     console.log(i);
// }


// 3) Escribir un programa que muestre la sumatoria de todos los números
// entre el 0 y el 100
let suma = 0;
for (let i = 0; i <= 100; i++) {
    suma += i;
}
// console.log(suma);


// 4) Dado un número entero positivo, mostrar su factorial. El factorial de
// un número se obtiene multiplicando todos los números enteros
// positivos que hay entre el 1 y ese número.
let numero = 4;
let factorial = 1;
for (let i = 1; i <= numero; i++) {
    factorial *= i; 
}
// console.log(factorial);






// =================== Más ejercicios ===================
// 4) Escribí un programa que le pida al usuario su año de
// nacimiento e imprima su edad actual en la consola con la frase
// "Tienes X años" (siendo X la cantidad de años).
// Por ejemplo, asumiendo que el año actual es 2022 y el usuario
// ingresa 1999, el programa debe imprimir en la consola: “Tienes
// 20 años”.
function edadCalculada (num) {
    let añoNacimiento = 0;
    añoNacimiento = 2022 - num;
    return añoNacimiento;
};
// console.log(edadCalculada(2000));


// 6) Escribí un programa que imprima los números pares del 0 al
// 100.
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// 7) Escribí un programa que itere sobre el arreglo nombres e
// imprima cada uno en la consola: 
const nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];
// for (let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i]);
// }


// 8) Construí un pseudocódigo que permita ingresar un número, si
// el número es mayor de 500, se debe calcular y mostrar en
// pantalla el 18% de este.
let num = 510
let porciento = 0;
// if (num > 500) {
//     porciento = (18 * num) / 100;
//     console.log(porciento);
// }


// 9) Escribí una función llamada elemento que recibe un arreglo
// como parámetro. La función debe devolver el valor que se
// encuentra en la tercera posición. Si el arreglo no tiene al menos
// 3 elementos deberá retornar -1.
let arrayElemento = [1, 3, 5, 6]
function elemento (arr) {
    if (arr.length >= 3) {
        console.log(arr[2]);
    } else {
        console.log(-1);
    }
};
// elemento(arrayElemento);


// 10) Se ingresa por teclado un número natural de hasta 2 cifras, si
// tiene una cifra que muestre lo mínimo que le falta para ser un
// número de 2 cifras; de lo contrario, que muestre lo mínimo que
// le falta para ser un número de 3 cifras. Considerar que el
// usuario ingresa números de hasta dos cifras.
function minimo (num) {
    let resultado = 0;
    if (num < 10) {
        resultado = 10 - num;
        return resultado
    } else if (num < 100) {
        resultado = 100 - num;
        return resultado;
    }
}
// console.log(minimo(90));






// =================== Arrays y colecciones ===================
// Crear la estructura adecuada para guardar las siguientes películas:
// "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
// Importante: verificá que todo funciona correctamente accediendo a alguna de
// las películas una vez creada la estructura correspondiente.
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

// 2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas
// en mayúsculas. Para esto solicitan que crees una función que reciba por
// parámetro un array y convierta el contenido de cada elemento a mayúsculas.
// Pista: revisá qué hace el método de strings .toUpperCase().
function mayuscula (arr) {
    let nuevoArray = [];
    for (let i = 0; i < arr.length; i++) {
        nuevoArray.push(arr[i].toUpperCase());
    }
    return nuevoArray;
}
// console.log(mayuscula(peliculas));

// 3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
// crear otra estructura similar a la primera, pero con las siguientes películas
// animadas:
// "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
// Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
// para poder agregar los elementos contenidos en el segundo array dentro del
// primero, y así retornar un solo array con todas las películas como sus elementos.
// Importante: las películas animadas también deberían convertirse a mayúsculas.
let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
function agregar (arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    return arr1;
};
// console.log(agregar(peliculas, peliculasAnimadas));

// 4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del
// array de películas animadas es un videojuego. Ahora tenés que editar el código y
// modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
// contenido al array que contenga todas las películas.
// PD: por precaución, guardá el elemento que vas a eliminar en una variable.
let videojuegos = [];
videojuegos.push(peliculasAnimadas[peliculasAnimadas.length - 1]);
peliculasAnimadas.pop()
// console.log(peliculasAnimadas);
// console.log(videojuegos);

// 5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
// del mundo sobre las películas con el siguiente formato:
// const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
// Te piden crear una función que compare las calificaciones e indique si son iguales
// o diferentes. Te confirman que están en el orden adecuado y que solo traen
// valores numéricos del 1 al 10.
// PD: los elementos de los scores tanto de Asia como de Europa corresponden en
// orden al del array resultante de combinar películas con películas animadas. Es
// decir, el primer elemento del array de películas general corresponde al primer
// elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
function comparar (arr1, arr2) {
    let nombreArr1 = "Asia";
    let nombreArr2 = "Europa"
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > arr2[i]) {
            console.log(`En la posición ${i} ${nombreArr1} posee un puntaje más alto`); 
        } else if (arr1[i] < arr2[i]) {
            console.log(`En la posición ${i} ${nombreArr2} posee un puntaje más alto`); 
        } else {
            console.log(`En la posición ${i} ambos poseen el mismo puntaje`); 
        }
    }
}
// comparar(asiaScores, euroScores);


// Array inverso
// En este ejercicio deberás crear una función que devuelva un array con sus elementos
// invertidos, sin modificarlo. Luego, deberás hacer una función que lo modifique e invierta
// el orden de sus elementos.
// Creá la función imprimirInverso que tome un array como argumento y que
// imprima en la consola cada elemento en orden inverso (no tenés que invertir el
// array).
// 2. Creá la función inversor que tome un array como argumento y devuelva uno
// nuevo invertido.
let distinto = ["hola", "me", "llamo", "distinto"];
function imprimirInverso (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[arr.length - i -1]);
    }
};
// imprimirInverso(distinto);
function inversor (arr) {
    let nuevoArray = [];
    for (let i = 0; i < arr.length; i++) {
        nuevoArray.push(arr[arr.length - i -1])
    };
    return nuevoArray;
};
// console.log(inversor(distinto));


// sumaArray()
// En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de
// números (3 elementos) y devuelva la suma de todos ellos. Ejemplo:
// ● sumArray([1,2,3]) // 6
// ● sumArray([10, 3, 10]) // 23
// ● sumArray([-5,100, 19]) // 114
let numerosArray = [1, 2, 3]
function sumArray (arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i]
    };
    return suma
};
// console.log(sumArray(numerosArray));


// Simulación Array.join()
// En este ejercicio deberás crear una función llamada join() que reciba un arreglo de
// strings de 4 elementos y simule el comportamiento del método Array.join().
// Importante: no podés usar el método Array.join() original.
// Ejemplo:
// ● join(["h","o","l","a"]) debe retornar el string "hola".
// ● join(["c","h","a,"u"]) debe retornar el string "chau".
let letras = ["h","o","l","a"]
function join (arr) {
    let str;
    str = (arr.toString()).replace(/,/g, "");
    return str
}
// console.log(join(letras));






// =================== Objetos literales ===================
let arrayCuentas = [
    {
        nroCuenta: 5486273622,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 27771,
        titularCuenta: "Abigael Natte",
    },
    {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "Ramon Connell",
    },
    {
        nroCuenta: 9582019689,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 27363,
        titularCuenta: "Jarret Lafuente",
    },
    {
        nroCuenta: 1761924656,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 32415,
        titularCuenta: "Ansel Ardley",
    },
    {
        nroCuenta: 7401971607,
        tipoDeCuenta: "Cuenta Unica",
        saldoEnPesos: 18789,
        titularCuenta: "Jacki Shurmer",
    },
];
// Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
// propiedad llamada “clientes” que estará compuesta de la lista de objetos
// obtenidos en el punto anterior.

// 3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
// nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
// objeto cliente que corresponda con ese nombre ingresado.
// Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);

// 4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
// cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
// correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
// Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
// nuevo saldo es: XXXX”.

// 5. Crear un último método llamado extracción que recibirá también dos parámetros:
// el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
// correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
// menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
// De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
// saldo es: XXXX”.
let banco = {
    clientes: arrayCuentas,
    consultarCliente: function (nombre) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (nombre === this.clientes[i].titularCuenta) {
                return this.clientes[i];
            }
        }
    },
    deposito: function (nombre, dinero) {
        this.consultarCliente(nombre).saldoEnPesos += dinero;
        return this.consultarCliente(nombre)
    },
    extraccion: function (nombre, dinero) {
        if (this.consultarCliente(nombre).saldoEnPesos - dinero < 0) {
            console.log("Fondos insuficientes");
        } else {
            this.consultarCliente(nombre).saldoEnPesos -= dinero;
            console.log(`Extracción realizada correctamente, su nuevo saldo es: ${this.consultarCliente(nombre).saldoEnPesos}`);
        }
        
    }
}
// console.log(banco);
// banco.consultarCliente("Jacki Shurmer");
// console.log(banco.deposito("Jacki Shurmer", 1000));
// banco.extraccion("Jacki Shurmer", 1000);

// Propiedad única
// Crear una función llamada propiedadUnica que reciba un arreglo de objetos como
// parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como
// parámetro la propiedad que fue pasada como string.
// Ejemplo:
// let array = [ { nombre: “Lean”, edad: 27 }, { nombre: “Eze”, edad: 49} ]
// propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
// propiedadUnica(array, “nombre”) debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ]
let arrayObjeto = [ { nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49} ]

function propiedadUnica (arr, str) {
    let nuevoArregloObjeto = [];
    for (let i = 0; i < arr.length; i++) {
        nuevoArregloObjeto.push( {
            [str]: arr[i][str]
        } 
        )
    };
    return nuevoArregloObjeto;
}
// console.log(propiedadUnica(arrayObjeto, "edad"))

// Calculador de notas
// Crear el objeto “alumno”, el cual va a consistir de las siguientes propiedades básicas:
// ● Nombre
// ● Número de legajo
// ● Lista de notas
// Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una
// nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses
// todos los métodos y propiedades que puedan hacer falta para que el programa funcione
// correctamente de la manera solicitada.
let alumno = {
    nombre: "Milagros",
    numLegajo: 1234,
    listaNotas: [10, 10, 11],
    aprobado: function (notaAprobacion) {
        let suma = 0;
        for (let i = 0; i < this.listaNotas.length; i++) {
            suma += this.listaNotas[i];
        }
        let promedio = 0;
        promedio = suma / this.listaNotas.length;
        if (promedio >= notaAprobacion) {
            console.log("Felicitaciones! Aprobaste.");
        } else {
            console.log("Lo siento! Tu promedio no alcanzó para aprobar");
        }
    }
};
// alumno.aprobado(7);






// =================== Ejercicio para las mesas de trabajo ===================
// La tarea consiste en enfrentar estas votaciones comparando a[0] con b[0], a[1] con b[1] y
// a[2] con b[2].
// Si a[i] > b[i], entonces, Alicia recibe 1 punto.
// Si a[i] < b[i], entonces, Bob recibe 1 punto.
// Si a[i] === b[i], ninguna persona recibe un punto.
// Los puntos de comparación son los puntos totales que ganó una persona. ¡Ojo! No los
// votos, sino los puntos ganados en cada etapa.
// Ejemplo:
// const alicia = [10, 80, 75];
// const bob = [90, 20, 25];
// puntosAlicia = 2
// puntosBob = 1
// Para los elementos en el índice 0, Bob recibe un punto porque b[0] > a[0]. Para la etapa
// siguiente Alicia recibe un punto, ya que a[1] > b[1]. Finalmente, para los elementos del
// índice 2 (tercera etapa), a[2] < b[2], por lo que Alicia recibe otro punto. El ganador será
// quien haya ganado más etapas. Si hay un empate final, el ganador debe dejarse vacío
// esperando que se realice un nuevo concurso.
// Dadas las consignas y cómo funciona el sistema de puntos, deberás calcular y encontrar
// al ganador utilizando una estructura for que evite tener que calcular cada tanda por
// separado. Recordá usar las estructuras if/else en caso de ser necesario para comparar
// los votos de cada participante.
// Para organizar la información, te pedimos crear el objeto literal Concurso con una
// propiedad etapas que indicará el resultado parcial por cada etapa. Además, tendrá una
// propiedad ganador que guardará el ganador (en caso de que exista) como un string. Te
// pedimos además que la función encontrarGanador sea un método del objeto literal
// Concurso.

const alicia = [10, 80, 75];
const bob = [90, 20, 25];

let concurso = {
    etapas: [],
    ganador: "",
    encontrarGanador: function (arr1, arr2) {
        let nombreArr1 = "Alicia";
        let nombreArr2 = "Bob";
        let puntosPrimerParticipante = 0;
        let puntosSegundoParticipante = 0;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] > arr2[i]) {
                puntosPrimerParticipante += 1;
                this.etapas.push(nombreArr1);
            } else if (arr1[i] < arr2[i]) {
                puntosSegundoParticipante += 1;
                this.etapas.push(nombreArr2);
            }
        }
        if (puntosPrimerParticipante > puntosSegundoParticipante) {
            console.log(`Felicitaciones ${nombreArr1}!`);
        } else if (puntosPrimerParticipante < puntosSegundoParticipante) {
            console.log(`Felicitaciones ${nombreArr2}`);
        } else {
            console.log("Empataron");
        }
    } 
};
// concurso.encontrarGanador(alicia, bob);



// digitalHouse()
// Creá la función digitalHouse() que recibirá 2 números como parámetros. La función
// deberá imprimir por pantalla los números del 1 al 100, pero teniendo en cuenta los
// siguientes criterios:
// ● Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá
// mostrar el string “Digital” en lugar del número.
// ● Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá
// mostrar el string “House” en su lugar del número.
// ● Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string
// “Digital House” en lugar del número.
let dos = 2;
let cinco = 5;
function digitalHouse (num1, num2) {
    for (let i = 0; i <= 100; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            console.log("Digital House");
        } else if (i % num1 === 0) {
            console.log("Digital");
        } else if (i % num2 === 0){
            console.log("House");
        }
    }
}
// digitalHouse(dos, cinco)






// =================== ¡Preparando el cerebro! ===================
// Loop de pares
// Deberás crear una función llamada loopDePares que reciba como parámetro un número 
// y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
// En caso de que el número de la iteración sumado con el número pasado por 
// parámetro sea par, mostrará en la consola: “El número X es par”.
function loopDePares (num) {
    for (let i = 0; i <= 100; i++) {
        if ((i + num) % 2 === 0) {
            console.log(`El número ${i} es par`);
        } else {
            console.log(i);
        }
    }
};
// loopDePares(5);


// Sumatoria
// Deberás crear una función llamada sumatoria que reciba un número como parámetro 
// y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. 
// Ejemplo:
// sumatoria(3) debe retornar 6 porque hace (1+2+3)
// sumatoria(8) debe retornar 36
function sumatoria (num) {
    let suma = 0;
    for (let i = 0; i <= num; i++) {
        suma += i;
    }
    return suma
};
// console.log(sumatoria(8));


// Nuevo arreglo
// Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro 
// y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas 
// pasado. Ejemplo:
// nuevoArreglo(5) debe retornar [1,2,3,4,5]
// nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]
function nuevoArreglo (num) {
    let nuevoArr = [];
    for (let i = 1; i <= num; i++) {
        nuevoArr.push(i);
    };
    return nuevoArr
};
// console.log(nuevoArreglo(5));


// Similar String.split()
// Deberás crear una función llamada split que reciba un string y simule el 
// comportamiento de la función original. Si no estás seguro de cómo funciona, 
// Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]
function split (str) {
    let nuevoArr = [];
    for (let i = 0; i < str.length; i++) {
        nuevoArr.push(str[i]);
    }
    return nuevoArr
}
// console.log(split("hola"));


// Manejando dos arreglos
// Deberás crear una función llamada arrayHandler que reciba dos arreglos de 
// igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} 
// y yo soy {elemento de array 2}”. Ejemplo:
// arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
// Soy 1 y yo soy h
// Soy 2 y yo soy o
// Soy 3 y yo soy l
// Soy 4 y yo soy a
let numerosCuatro = [1,2,3,4];
let hola = ["h","o","l","a"];
function arrayHandler (arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        console.log(`Soy ${arr1[i]} y yo soy ${arr2[i]}`);
    }
};
// arrayHandler(numerosCuatro, hola);


// Palíndromo
// Deberás crear una función llamada palindromo que indique si una 
// palabra es palíndroma o no. Debe retornar "true” en caso de que lo sea, 
// y “false” en caso de que no. Ejemplo:
// palindromo(“anilina”) debe retornar true
// palindromo(“Ana”) debe retornar true
// palindromo(“Enrique”) debe retornar false

function palindromo (str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] != str[str.length - i - 1]) {
            return false
        };
    };
    return true
};
// console.log(palindromo("ansa"));





// =================== ¡Más prácticas! ===================
// Ejercicios
// A partir de el siguiente array de edades nos solicitan realizar lo siguiente:
let edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
// Obtener en un nuevo array las edades menores a 18.
let edadesMenores = [];
// for (let i = 0; i < edades.length; i++) {
//     if (edades[i] < 18) {
//         edadesMenores.push(edades[i]);
//     };
// };
// console.log(edadesMenores);


// Obtener en un nuevo array las edades mayor o igual a 18.
let edadesMayores = [];
// for (let i = 0; i < edades.length; i++) {
//     if (edades[i] >= 18) {
//         edadesMayores.push(edades[i]);
//     };
// };
// console.log(edadesMayores);


// Obtener en un nuevo array las edades igual a 18.
let edadesIgual = [];
// for (let i = 0; i < edades.length; i++) {
//     if (edades[i] = 18) {
//         edadesIgual.push(edades[i]);
//     };
// };
// console.log(edadesMayores);


// Incrementar en 1 todas las edades.
// for (let i = 0; i < edades.length; i++) {
//     edades[i] += 1;
// }
// console.log(edades);

const arrayCuentas1 =
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
let nuevoCuentasUno = [];
// for (let i = 0; i < arrayCuentas1.length; i++) {
//     if (arrayCuentas1[i].edadTitular < 30) {
//         nuevoCuentasUno.push(arrayCuentas1[i])
//     }
// }
// console.log(nuevoCuentasUno);

// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
let nuevoCuentasDos = [];
// for (let i = 0; i < arrayCuentas1.length; i++) {
//     if (arrayCuentas1[i].edadTitular >= 30) {
//         nuevoCuentasDos.push(arrayCuentas1[i])
//     }
// }
// console.log(nuevoCuentasDos);

// Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
let nuevoCuentasTres = [];
// for (let i = 0; i < arrayCuentas1.length; i++) {
//     if (arrayCuentas1[i].edadTitular <= 30) {
//         nuevoCuentasTres.push(arrayCuentas1[i])
//     }
// }
// console.log(nuevoCuentasTres);

// Obtener la cuenta con el titular de la misma más joven.
let edadAhora;
let edadDespues;
let edadJoven;
// for (let i = 0; i < (arrayCuentas1.length - 1); i++) {
//     edadAhora = arrayCuentas1[i].edadTitular;
//     edadDespues = arrayCuentas1[i + 1].edadTitular;
//     if (edadDespues < edadAhora) {
//         edadJoven = arrayCuentas1[i + 1].edadTitular
//     } else {
//         edadJoven = arrayCuentas1[i].edadTitular
//     }
// };
// console.log(edadJoven);

// Obtener un array con las cuentas habilitadas.
let nuevoCuentasCuatro = [];
// for (let i = 0; i < arrayCuentas1.length; i++) {
//     if (arrayCuentas1[i].estaHabilitada === true) {
//         nuevoCuentasCuatro.push(arrayCuentas1[i]);
//     }
// }
// console.log(nuevoCuentasCuatro);

// Obtener un array con las cuentas deshabilitadas.
let nuevoCuentasCinco = [];
// for (let i = 0; i < arrayCuentas1.length; i++) {
//     if (arrayCuentas1[i].estaHabilitada === false) {
//         nuevoCuentasCinco.push(arrayCuentas1[i]);
//     }
// }
// console.log(nuevoCuentasCinco);


// Desarrollar una función llamada generarID que reciba como parámetro 
// el array de cuentas y agregue a cada elemento (objeto literal) una propiedad llamada id con un valor Numérico
function generarID (array) {
    for (let i = 0; i < array.length; i++) {
        array[i].id = i + 1
    }
    return array;
};
generarID(arrayCuentas1);

// Desarrollar una función llamada buscarPorId que reciba 
// como parámetro el array de cuentas y un id, en caso de encontrar 
// retornar la cuenta (él objeto literal completo), caso contrario retornar null
function buscarPorId (array, id) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            return array[i];
        } else {
            return null;
        }
    }
}
// console.log(buscarPorId(arrayCuentas1, 2));

// Desarrollar una función llamada filtrarPorSaldos que 
// reciba como parámetro el array de cuentas y un saldo (Number), 
// deberá retornar un array que se cuyas cuentas se encuentren por debajo del saldo 
// enviado por parámetro
function filtrarPorSaldos (array, num) {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].saldo < num) {
            nuevoArray.push(array[i]);
        }
    };
    return nuevoArray
}
// console.log(filtrarPorSaldos(arrayCuentas1, 3000));






// =================== ¡Hagamos un pequeño algoritmo! ===================
// Dado los siguientes numeros:

let num1 = 43;
let num2 = 78;
let num3 = 14;

// Crea un algoritmo que te permita identificar
// el numero mayor. Utiliza condicionales como el
// if, else, o else if.
function numeroMayor (num1, num2, num3) {
    if (num1 > num2) {
        if(num1 > num3) {
            console.log(num1);
        }
    } else if (num2 > num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}
// numeroMayor(num1, num2, num3);


// Ahora bien. dado los siguientes numeros:
let num11 = 13;
let num22 = 1663;
let num33 = 3363;
let num44 = 3000;
// agrega una variable mas, llamada num4
// con un valor numerico

function mayorDeCuatro (num1, num2, num3, num4) {
    if (num1 > num2) {
        if(num1 > num3) {
            console.log(num1);
        }
    } else if (num2 > num3) {
        console.log(num2);
    } else if (num3 > num4) {
        console.log(num3);
    } else {
        console.log(num4);
    }
    
}
// mayorDeCuatro(num11, num22, num33, num44);


/**
 * Extra: que puedes hacer para identificar
 * el numero mayor de una lista de numeros,
 * como la siguiente? Utiliza Javascript.
 * Adicional: al terminar tu algoritmo,
 * cambia los valores de la lista, bien sea
 * agregando o removiendo, y asegurate
 * que tu algoritmo funcione con cualquier lista
 * de numeros
 */
const numeros = [5, 12, 2, 40, 33, 2, 8];
// console.log(Math.max(...numeros));

let mayor = 0;
function mayorArray (arreglo) {
    for(i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }
    return mayor;
};
// console.log(mayorArray(numeros));



// =================== Ejercitación de algoritmos ===================
// Escribir un programa que muestre en pantalla los números del 1 al 100,
// sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
// “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
// por la palabra “fizzbuzz”. Visiten este sandbox
// el ejercicio ahí. Recuerden desplegar la consola para ver sus resultados, y
// utilicen la función console.log para mostrar datos en la misma.
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("Fizzbuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     }
// };


// 2) Escriban una función que reciba dos parámetros: un array y un índice. La
// función deberá de mostrar por consola el valor del elemento según el
// índice dado. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6'. 
let arrayNumeros = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; 
var index = 1;
function devolver (arr, index) {
    for (let i = 0; i < arr.length; i++) {
        if (i === index) {
            return arr[i]
        }
    }
};
// console.log(devolver(arrayNumeros, index));


// 3) Escribir una función que, dado un número de mes, devuelva la cantidad
// de días de ese mes —suponiendo que no es un año bisiesto—.
function diasDelMes (num) {
    switch (num) {
        case 1:
        case 3:
        case 5:
        case 7: 
        case 8:
        case 10:
        case 12:
            console.log("Este mes posee 31 días");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("Este mes posee 30 días");
            break;
        default: 
            console.log("Este mes posee 28 días");
    }
};
// diasDelMes(2);


// Escribir una función de JavaScript que invierta un número. Por ejemplo,
// si x = 32443, la salida debería ser 34423.
let numInvertir = 32443;
function invertirNumero (num) {
    let convertirRevertir =  num.toString().split("").reverse().join("");
    return convertirRevertir;
}
// console.log(invertirNumero(numInvertir));


// 5) Escribir una función que reciba una array y solo imprima los valores que
// se repiten. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6,23,33,100'. 
let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
function valoresRepetidos (arr) {
    let arrayArreglado = arr.sort((a,b) => a - b);
    for (let i = 0; i < arrayArreglado.length; i++) {
        if (arr[i] === arr[i + 1] && arr[i] != numeros[i]) {
            console.log(arr[i]);
        }
    }
};
// valoresRepetidos(array);





// =================== Mesa de trabajo ===================
/*
Declara una variable que contenga una matriz
de 5x5 llena de puros numeros enteros y positivos
Luego, escribe un algoritmo para sumar todos
los numeros en la matriz.
*/
let matrizUno = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];
function sumarMatriz (matrix) {
    let suma = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            suma += matrix[i][j];
        }
    };
    return suma
}
// console.log(sumarMatriz(matrizUno));


// Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
// números. La matriz debe verse así:
// 1 2 3 4 5 6 7 8 9 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// 51 52 53 54 55 56 57 58 59 60
// 61 62 63 64 65 66 67 68 69 70
// 71 72 73 74 75 76 77 78 79 80
// 81 82 83 84 85 86 87 88 89 90
// 91 92 93 94 95 96 97 98 99 100

function generarMatriz10por10(){
    let res = [];
    for(let i = 0; i <= 100; i += 10){
        let aux = [];
        for(let j = 1; j <= 10; j++){
            if(i === 0){
                aux.push(j)
            } else {
                aux.push(i + j)
            }
        }
        res.push(aux)
    }
    return res;
}
// console.table(generarMatriz10por10());
let matriz10por10 = generarMatriz10por10();


// Por último, vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único.
// Rojo: 505
// Verde 505
function sumarRojo (matrix) {
    let suma = 0;
    for(let i = 0; i < 10; i++) {
        suma += matrix[i][i];
    }
    return suma
}
// console.log('Rojo: ' + sumarRojo(matriz10por10));

function sumarVerde(matrix){
    let suma2 = 0;
    for(let i = 9; i >= 0 ; i--) {
        suma2 += matrix[i][i]
    }
    return suma2;
}
// console.log('Verde: ' + sumarVerde(matriz10por10));




// =================== Ejercicios ===================
// A partir de él siguiente array de edades nos solicitan realizar lo siguiente
const edadesVarias = [33, 27, 34, 30, 34, 25];
// Desarrollar una función que ordene internamente de forma ascendente las edades, 
// la misma deberá retornar él array ordenado , es decir deberíamos obtener resultado 
// como él siguiente.
// [25, 27, 30, 33, 34, 34]
function ordenarAsc (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                let temporal = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temporal;
            }
        }
    }
    return arr
}
// console.log(ordenarAsc(edadesVarias));


// Desarrollar una función que ordene internamente de forma descendente las edades, 
// la misma deberá retornar él array ordenado , es decir deberíamos obtener resultado
// como él siguiente.
// [34, 34, 33, 30, 27, 25]
function ordenarDesc (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - 1); j++) {
            if (arr[j] < arr[j + 1]) {
                let temporal = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temporal;
            }
        }
    }
    return arr
}
// console.log(ordenarDesc(edadesVarias));


// Dado un array de strings:
const letrasDesordenadas = ["C", "A", "D", "E", "H", "Z", "J", "L"]
// ¿Cómo pudieras ordenar el array anterior, alfabéticamente?
function ordenarAlfabeticamente (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                let temporal = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temporal;
            }
        }
    }
    return arr
}
// console.log(ordenarAlfabeticamente(letrasDesordenadas));


// A partir del siguiente array de Objetos Literales se solicita realizar lo siguiente:
const arrayCuentas2 =
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
            estaHabilitada: false,
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
// Desarrollar una función que ordene internamente de forma 
// ascendente según él saldo de cada cuenta, la misma deberá retornar él array ordenado.
function ordenarAscSaldo (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - 1); j++) {
            if (arr[j].saldo > arr[j + 1].saldo) {
                let temporal = arr[j].saldo;
                arr[j].saldo = arr[j + 1].saldo;
                arr[j + 1].saldo = temporal;
            }
        }
    }
    return arr
}
// console.log(ordenarAscSaldo(arrayCuentas2));


// Desarrollar una función que ordene internamente de forma 
// ascendente según la edad del titular de cada cuenta, la misma deberá retornar él array ordenado.
function ordenarAscEdad (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - 1); j++) {
            if (arr[j].edadTitular > arr[j + 1].edadTitular) {
                let temporal = arr[j].edadTitular;
                arr[j].edadTitular = arr[j + 1].edadTitular;
                arr[j + 1].edadTitular = temporal;
            }
        }
    }
    return arr
}
// console.log(ordenarAscEdad(arrayCuentas2));






// =================== Ejercicio ===================
let numeros2 = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 5, 5097, 100, 4]
];
/*
Suma los valores que sean mayores
o iguales a 10, pero menor a 1000.
*/
function sumarCiertosValores (matrix) {
    let suma = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] >= 10 && matrix[i][j] < 1000) {
                suma += matrix[i][j];
            }
        }
    }
    return suma
};
// console.log(sumarCiertosValores(numeros2));






// =================== Ejercicio ===================
// Se está realizando el desarrollo de una aplicación para control de gastos. 
// Cada día, el usuario ingresa sus gastos cotidianos.
// La idea es solo registrar el total de los gastos, al finalizar la jornada.
// Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
// Los gastos estarán en una matriz de 4x7, cada fila representa una 
// semana y cada columna un día. Es decir fila 0, semana 1, fila 1, semana 2, etc. 
// Columna 0, dia 1, columna 1, dia 2, etcétera. 


// a)  Lo que nos solicitan es dar el total de gastos en una semana. 
// Recordemos que cada fila representa una semana, es decir, si nos indican semana 
// 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan 
// siempre en posición 0. 



// b) La aplicación también tendrá una parte de estadísticas, 
// para esto nos solicitan dar el total de un día en particular, 
// por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, 
// ya que las columnas también comienzan en 0.



// c) Por último, es necesario tener el total de gastos realizados en el mes.
// Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para 
// resolver este último punto?



// d) Obtener cuál fue la semana que más gastos se realizaron. 
// Indicar el día que más gastos se realizaron.







// =================== Mesa trabajo 20 ===================
// Ejercicio 1
// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.
let likes = [123, 651, 9888, 457, 190, 7634, 76, 39, 10, 539, 9834, 10456, 56, 238, 17];

function ordenarLikes (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - 1); j++) {
            if (arr[j] < arr[j + 1]) {
                let temporal = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temporal;
            }
        }
    }
    return `Primer lugar: ${arr[0]}. Segundo lugar: ${arr[1]}. Tercer lugar: ${arr[2]}. Último lugar: ${arr[arr.length -1]}`
}
// console.log(ordenarLikes(likes));


// Ejercicio 2
// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.
let meteorologico = [
    {
        dia: 1,
        mes: 3,
        temMax: 20,
        temMin: 10
    },
    {
        dia: 2,
        mes: 3,
        temMax: 15,
        temMin: 8
    },
    {
        dia: 3,
        mes: 3,
        temMax: 25,
        temMin: 15
    },
    {
        dia: 4,
        mes: 3,
        temMax: 10,
        temMin: 5
    },
    {
        dia: 5,
        mes: 3,
        temMax: 22,
        temMin: 14
    }
];
function ordenarAsc (arr) {
    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - 1); j++) {
            if (arr[j].temMin > arr[j + 1].temMin) {
                let temporal = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temporal;
            }
        }
    }
    return arr
};
console.log(ordenarAsc(meteorologico));

function ordenarDesc (arr) {
    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - 1); j++) {
                if (arr[j].temMax < arr[j + 1].temMax) {
                let temporal = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temporal;
            }
        }
    }
    return arr
};
console.log(ordenarDesc(meteorologico));






// =================== Clase 21 ===================
// 4. Crear una función que reciba un string y luego imprimir la cantidad de
// vocales que se encuentran en dicha frase.


// 6. Realizar una función que escriba una pirámide del 1 al 30 de la siguiente
// forma :
// 1
// 22
// 333
// 4444
// 55555
// 666666
// .......






