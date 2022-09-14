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
let edad = 20 //(el número es a modo de ejemplo, podés cambiarlo o
// crear otras para tener varias pruebas)
// if(edad < 18) {
//     console.log("No puede pasar al bar.")
// } else if (edad < 21){
//     console.log("Puede pasar al bar, pero no puede tomar alcohol.")
// } else {
//     console.log("Puede pasar al bar y tomar alcohol.")
// }
// Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
// inválida. Por favor ingrese un número válido."
// Importante: no se deberá mostrar ningún otro mensaje.
// ● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
// la mayoría de edad.
// ● Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu
// edad es impar?".


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


// ¿Cuál es el número secreto?
// Creá una función que reciba un parámetro numérico y verifique si el mismo es el
// número secreto. El número secreto deberá ser seleccionado de manera random de
// entre 1 y 10 —investigá qué hace la función Math.random()—. En caso de ser correcto,
// retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un
// mensaje de aliento junto con el número ingresado y el secreto.


// abrirParacaidas()
// Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
// altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
// siguiente:
// ● La velocidad debe ser menor a 1000 km/h.
// ● La altura debe ser mayor o igual a 2000 m y menor a 3000 m.


// Traductor condicional
// Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
// "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
// inglés.
// En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
// informe que la palabra ingresada es incorrecta.


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
// Cuando el usuario haya valorado la película, agradecerle su visita.





// =================== Bucles y repeticiones ===================
// 1) Crear una función que pida un valor por parámetro y muestre los 10
// números siguientes.


// 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.


// 3) Escribir un programa que muestre la sumatoria de todos los números
// entre el 0 y el 100


// 4) Dado un número entero positivo, mostrar su factorial. El factorial de
// un número se obtiene multiplicando todos los números enteros
// positivos que hay entre el 1 y ese número.


// 5) Crear una función que muestre todos los números de la secuencia de
// fibonacci hasta el valor ingresado por parámetro.





// =================== Más ejercicios ===================

// 1) Escribí un programa que le pida al usuario ingresar una frase y
// la imprima en la consola.
// Recordá que para pedirle al usuario que escriba una frase
// debés utilizar el método prompt() y para escribir en la consola
// debés utilizar el método console.log().


// 2) Escribí un programa que le pregunte al usuario su nombre e
// imprima "Hola " seguido del nombre y un signo de
// exclamación.
// Por ejemplo, si el usuario ingresa "Pedro" el programa debe
// imprimir en la consola "Hola Pedro!".


// 3) Escribí un programa que le pida al usuario ingresar un número,
// luego le pida un segundo número, e imprima en la consola la
// suma de los dos números que ingresó el usuario.


// 4) Escribí un programa que le pida al usuario su año de
// nacimiento e imprima su edad actual en la consola con la frase
// "Tienes X años" (siendo X la cantidad de años).
// Por ejemplo, asumiendo que el año actual es 2019 y el usuario
// ingresa 1999, el programa debe imprimir en la consola: “Tienes
// 20 años”.


// 5) Escribí un programa que piense un número de forma aleatoria
// del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el
// número es correcto debe imprimir en la consola "Felicitaciones,
// ese era!", de lo contrario, debe imprimir "Lo siento, intenta
// nuevamente!"


// 6) Escribí un programa que imprima los números pares del 0 al
// 100.


// 7) Escribí un programa que itere sobre el arreglo nombres e
// imprima cada uno en la consola: const nombres = ["Pedro",
// "Pablo", "Maria", "Juan", "Diana"];


// 8) Construí un pseudocódigo que permita ingresar un número, si
// el número es mayor de 500, se debe calcular y mostrar en
// pantalla el 18% de este.


// 9) Escribí una función llamada elemento que recibe un arreglo
// como parámetro. La función debe devolver el valor que se
// encuentra en la tercera posición. Si el arreglo no tiene al menos
// 3 elementos deberá retornar -1.


// 10) Se ingresa por teclado un número natural de hasta 2 cifras, si
// tiene una cifra que muestre lo mínimo que le falta para ser un
// número de 2 cifras; de lo contrario, que muestre lo mínimo que
// le falta para ser un número de 3 cifras. Considerar que el
// usuario ingresa números de hasta dos cifras.


// Hacer un algoritmo que muestre el promedio de varias
// notas o de N notas ingresadas, se debe definir el valor de N
// para conocer la cantidad de notas a ingresar.


// 12) Hacer un programa que calcule la suma de los N primeros
// números naturales, dónde N es el número límite ingresado por
// teclado.





// =================== Arrays y colecciones ===================
// Crear la estructura adecuada para guardar las siguientes películas:
// "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
// Importante: verificá que todo funciona correctamente accediendo a alguna de
// las películas una vez creada la estructura correspondiente.
// 2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas
// en mayúsculas. Para esto solicitan que crees una función que reciba por
// parámetro un array y convierta el contenido de cada elemento a mayúsculas.
// Pista: revisá qué hace el método de strings .toUpperCase().
// 3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
// crear otra estructura similar a la primera, pero con las siguientes películas
// animadas:
// "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
// Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
// para poder agregar los elementos contenidos en el segundo array dentro del
// primero, y así retornar un solo array con todas las películas como sus elementos.
// Importante: las películas animadas también deberían convertirse a mayúsculas.
// 4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del
// array de películas animadas es un videojuego. Ahora tenés que editar el código y
// modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
// contenido al array que contenga todas las películas.
// PD: por precaución, guardá el elemento que vas a eliminar en una variable.
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


// Array inverso
// En este ejercicio deberás crear una función que devuelva un array con sus elementos
// invertidos, sin modificarlo. Luego, deberás hacer una función que lo modifique e invierta
// el orden de sus elementos.
// Creá la función imprimirInverso que tome un array como argumento y que
// imprima en la consola cada elemento en orden inverso (no tenés que invertir el
// array).
// 2. Creá la función inversor que tome un array como argumento y devuelva uno
// nuevo invertido.


// sumaArray()
// En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de
// números (3 elementos) y devuelva la suma de todos ellos. Ejemplo:
// ● sumArray([1,2,3]) // 6
// ● sumArray([10, 3, 10]) // 23
// ● sumArray([-5,100, 19]) // 114


// Simulación Array.join()
// En este ejercicio deberás crear una función llamada join() que reciba un arreglo de
// strings de 4 elementos y simule el comportamiento del método Array.join().
// Importante: no podés usar el método Array.join() original.
// Ejemplo:
// ● join(["h","o","l","a"]) debe retornar el string "hola".
// ● join(["c","h","a,"u"]) debe retornar el string "chau".





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


// Propiedad única
// Crear una función llamada propiedadUnica que reciba un arreglo de objetos como
// parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como
// parámetro la propiedad que fue pasada como string.
// Ejemplo:
// let array = [ { nombre: “Lean”, edad: 27 }, { nombre: “Eze”, edad: 49} ]
// propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
// propiedadUnica(array, “nombre”) debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ]


// Calculador de notas
// Crear el objeto “alumno”, el cual va a consistir de las siguientes propiedades básicas:
// ● Nombre
// ● Número de legajo
// ● Lista de notas
// Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una
// nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses
// todos los métodos y propiedades que puedan hacer falta para que el programa funcione
// correctamente de la manera solicitada.





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
// Para finalizar, se necesita enviar los resultados a otra aplicación, por lo que deberás crear
// un JSON con la propiedad etapas para poder compartirlo. Creá un método
// exportarResultados que haga esta conversión.

const alicia = [10, 80, 75];
const bob = [90, 20, 25];

function encontrarGanador(a, b) {
    let puntosPrimerParticipante = 0;
    let puntosSegundoParticipante = 0;
    //continua con esto.
    }


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


// sumArray()... Reloaded
// Vamos a retomar el ejercicio sumArray() que hicimos en la clase de arrays, pero esta vez
// lo modificaremos para que pueda recibir un array de números de cualquier cantidad de
// elementos.
// Si no recordás el enunciado original: deberás crear una función sumaArray que acepte
// un arreglo de números y devuelva la suma de todos ellos.
// Ejemplo:
// ● sumArray([1,2,3]) // 6
// ● sumArray([10, 3, 10, 4]) // 27
// ● sumArray([-5,100]) // 95





// =================== ¡Preparando el cerebro! ===================
// Loop de pares
// Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”.
// Loop de impares con palabra
// Deberás crear una función llamada loopDeImpares que reciba como parámetros un número y una palabra, y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.


// Sumatoria
// Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:
// sumatoria(3) debe retornar 6 porque hace (1+2+3)
// sumatoria(8) debe retornar 36


// Nuevo arreglo
// Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
// nuevoArreglo(5) debe retornar [1,2,3,4,5]
// nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]


// Similar String.split()
// Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. Si no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]


// Manejando dos arreglos
// Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”. Ejemplo:
// arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
// Soy 1 y yo soy h
// Soy 2 y yo soy o
// Soy 3 y yo soy l
// Soy 4 y yo soy a


// Palíndromo
// Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. Debe retornar “true” en caso de que lo sea, y “false” en caso de que no. Ejemplo:
// palindromo(“anilina”) debe retornar true
// palindromo(“Ana”) debe retornar true
// palindromo(“Enrique”) debe retornar false





// =================== ¡Más prácticas! ===================
// Ejercicios
// A partir de el siguiente array de edades nos solicitan realizar lo siguiente:
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
// Obtener en un nuevo array las edades menores a 18.
// Obtener en un nuevo array las edades mayor o igual a 18.
// Obtener en un nuevo array las edades igual a 18.
// Obtener el menor.
// Obtener el mayor. 
// Obtener el promedio de edades.
// Incrementar en 1 todas las edades.


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
// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
// Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
// Obtener la cuenta con el titular de la misma más joven.
// Obtener un array con las cuentas habilitadas.
// Obtener un array con las cuentas deshabilitadas.
// Obtener la cuenta con el menor saldo.
// Obtener la cuenta con el mayor saldo.


// Desarrollar una función llamada generarID que reciba como parámetro 
// el array de cuentas y agregue a cada elemento (objeto literal) una propiedad llamada id con un valor Numérico


// Desarrollar una función llamada buscarPorId que reciba 
// como parámetro el array de cuentas y un id, en caso de encontrar retornar la cuenta (él objeto literal completo), caso contrario retornar null


// Desarrollar una función llamada filtrarPorSaldos que 
// reciba como parámetro el array de cuentas y un saldo (Number), deberá retornar un array que se cuyas cuentas se encuentren por debajo del saldo enviado por parámetro


// Desarrollar una función llamada incrementarSaldo que 
// reciba como parámetro el array de cuentas, un id y un saldo, deberá incrementar él saldo de la cuenta, en caso de encontrar, caso contrario retornar undefined 
// Reutilizando la función  buscarPorId 





// =================== ¡Hagamos un pequeño algoritmo! ===================
// Dado los siguientes numeros:

let num1 = 43;
let num2 = 78;
let num3 = 14;

// Crea un algoritmo que te permita identificar
// el numero mayor. Utiliza condicionales como el
// if, else, o else if.

// Escribe tu código debajo de estas lineas,
// y observa los resultados por la consola.
// especificamente para este conjunto de datos
// deberias ver por consola el numero 78,
// adicional, cambia los valores de num1, num2 y num3
// para verificar que tu algoritmo funcione con
// cualquiera 3 valores.

// Ahora bien. dado los siguientes numeros:


let num11 = 13;
let num22 = 1663;
let num33 = 3363;
// agrega una variable mas, llamada num4
// con un valor numerico

// Crea un algoritmo que te permita identificar
// el numero mayor de los 4 anteriores.

// Escribe tu código debajo de esta linea,
// y observa los resultados por la consola.
// Adicional, cambia los valores de los 4 numeros
// para ver que algoritmo funciona con cualquier
// conjunto de 4 numeros.


/**
 * Extra: que puedes hacer para identificar
 * el numero mayor de una lista de numeros,
 * como la siguiente? Utiliza Javascript.
 *
 * Tip: es valido buscar en google :)
 *
 * Adicional: al terminar tu algoritmo,
 * cambia los valores de la lista, bien sea
 * agregando o removiendo, y asegurate
 * que tu algoritmo funcione con cualquier lista
 * de numeros
 */
const numeros = [5, 12, 2, 40, 33, 2, 8];





// =================== Ejercitación de algoritmos ===================
// Escribir un programa que muestre en pantalla los números del 1 al 100,
// sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
// “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
// por la palabra “fizzbuzz”. Visiten este sandbox
// el ejercicio ahí. Recuerden desplegar la consola para ver sus resultados, y
// utilicen la función console.log para mostrar datos en la misma.


// 2) Escriban una función que reciba dos parámetros: un array y un índice. La
// función deberá de mostrar por consola el valor del elemento según el
// índice dado. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6'. let array =
// [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1;
// Visiten este sandbox para escribir su código.


// 3) Escribir una función que, dado un número de mes, devuelva la cantidad
// de días de ese mes —suponiendo que no es un año bisiesto—.


// Escribir una función de JavaScript que invierta un número. Por ejemplo,
// si x = 32443, la salida debería ser 34423.


// 5) Escribir una función que reciba una array y solo imprima los valores que
// se repiten. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6,23,33,100'. let array =
// [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];





// =================== Mesa de trabajo ===================
/*
Declara una variable que contenga una matriz
de 5x5 llena de puros numeros enteros y positivos
Luego, escribe un algoritmo para sumar todos
los numeros en la matriz.
*/


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


// Por último, vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único.
// Rojo: 505
// Verde 505





// =================== Ejercicios ===================
// A partir de él siguiente array de edades nos solicitan realizar lo siguiente
const edadesVarias = [33, 27, 34, 30, 34, 25];
// Desarrollar una función que ordene internamente de forma ascendente las edades, la misma deberá retornar él array ordenado , es decir deberíamos obtener resultado como él siguiente.
// [25, 27, 30, 33, 34, 34]
// Desarrollar una función que ordene internamente de forma descendente las edades, la misma deberá retornar él array ordenado , es decir deberíamos obtener resultado como él siguiente.
// [34, 34, 33, 30, 27, 25]


// Dado un array de strings:
// const letras = [“C”, “A”, “D”, “E”, “H”, “Z”, “J”, “L”]
// ¿Cómo pudieras ordenar el array anterior, alfabéticamente?


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
// ascendente según él saldo de cada cuenta, la misma deberá retornar él array ordenado .
// Desarrollar una función que ordene internamente de forma 
// ascendente según la edad del titular de cada cuenta, la misma deberá retornar él array ordenado.





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





// =================== Ejercicio ===================
// Se está realizando el desarrollo de una aplicación para control de gastos. 
// Cada día, el usuario ingresa sus gastos cotidianos.
// La idea es solo registrar el total de los gastos, al finalizar la jornada.
// Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
// Los gastos estarán en una matriz de 4x7, cada fila representa una 
// semana y cada columna un día. Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera. 
// a)  Lo que nos solicitan es dar el total de gastos en una semana. 
// Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0. 
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


// Ejercicio 2
// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.





// =================== Clase 21 ===================
// Crear una función que imprima todos los dígitos decimales, del 0 al 9,
// usando un ciclo For.


// 2. Crear una función que imprima los números entre el 5 y el 20, saltando de
// tres en tres. 


// 3. Crear una función que imprima la sumatoria de todos los números entre el
// 0 y el 100.


// 4. Crear una función que reciba un string y luego imprimir la cantidad de
// vocales que se encuentran en dicha frase.


// 5. Realizar una función que, dada una lista, devuelva una nueva lista cuyo
// contenido sea igual a la original pero invertida.


// 6. Realizar una función que escriba una pirámide del 1 al 30 de la siguiente
// forma :
// 1
// 22
// 333
// 4444
// 55555
// 666666
// .......






