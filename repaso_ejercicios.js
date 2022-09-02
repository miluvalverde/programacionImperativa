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

console.log("-------------- Testeo de Operaciones / Calculadora --------------");
console.log(sumar(3, 4));
console.log(restar(23, 78));
console.log(multiplicar(2355, 347));
console.log(dividir(125, 78));
console.log(dividir(20, 0));

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