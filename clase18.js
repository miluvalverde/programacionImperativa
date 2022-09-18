// Se está realizando el desarrollo de una aplicación para control de gastos. 
// Cada día, el usuario ingresa sus gastos cotidianos.
// La idea es solo registrar el total de los gastos, al finalizar la jornada.
// Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
// Los gastos estarán en una matriz de 4x7, cada fila representa una 
// semana y cada columna un día. Es decir fila 0, semana 1, fila 1, semana 2, etc. 
// Columna 0, dia 1, columna 1, dia 2, etcétera. 
let gastos = [
    [123, 4444, 6572, 1998, 564, 239, 7779],
    [9832, 23, 097, 345, 167, 3335, 984],
    [435, 927, 640, 100, 456, 238, 90],
    [429, 789, 45, 1233, 34, 561, 985]
]

// a)  Lo que nos solicitan es dar el total de gastos en una semana. 
// Recordemos que cada fila representa una semana, es decir, 
// si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. 
// Recordar que las matrices comienzan siempre en posición 0. 
function gastosSemana (matrix, semana) {
    let suma = 0;
    semana -= 1
    for (let i = 0; i < matrix.length; i++) {
        if (i === semana) { 
            for (let j = 0; j < matrix[i].length; j++) {
                suma += matrix[i][j];
            }
        }
    }
    return suma
}
// console.log(gastosSemana(gastos, 1));

// b) La aplicación también tendrá una parte de estadísticas, 
// para esto nos solicitan dar el total de un día en particular, 
// por ejemplo del día 3, acá también tengamos en cuenta 
// lo que ocurre con las filas, 
// ya que las columnas también comienzan en 0.
function totalDia (matrix, dia) {
    let suma = 0;
    dia -= 1;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (j === dia) {
                suma += matrix[i][j];
            }
        }
    };
    return suma
}
// console.log(totalDia(gastos, 1));


// c) Por último, es necesario tener el total de gastos realizados en el mes.
// Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para 
// resolver este último punto?
function totalMes (matrix) {
    let suma = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            suma += matrix[i][j];
        }
    };
    return suma
}
// console.log(totalMes(gastos));

// d) Obtener cuál fue la semana que más gastos se realizaron. 
// Indicar el día que más gastos se realizaron.
function gastoMayor (matrix) {
    let maxSemana = 0;
    for (i = 1; i < matrix.length; i++) {
        if (gastosSemana(matrix, i) > maxSemana) {
            maxSemana = matrix[i - 1];
        }
    };
    return maxSemana
};
// gastoMayor(gastos);

function mayordia (matrix) {
    let maxdia = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j= 0; j < matrix[i].length; j++) {
            if (maxdia < matrix[i][j]) {
                maxdia = matrix[i][j];
            } 
        }
    };
    return maxdia;
};
// console.log(mayordia(gastos));