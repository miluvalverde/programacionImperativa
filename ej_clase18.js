/* a)  Lo que nos solicitan es dar el total de gastos en una semana. 
Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 
tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0.  */
let gastos = [
    [250, 695, 800, 1400, 900, 2500, 100],
    [25, 69, 80, 140, 90, 250, 1000],
    [2502, 1695, 800, 1400, 400, 250, 500],
    [252, 695, 80, 400, 1900, 2500, 450]
];
  //calcular el gasto total de la semana 3

let semana3 = 0;
for (let i = 0; i < gastos[2].length; i++) {
    semana3 += gastos[2][i];
}
console.log(semana3);

/* 
b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar 
el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con 
las filas, ya que las columnas también comienzan en 0.
  */

let gastoDia = 0;
for (let k = 0; k < gastos.length; k++) {
    gastoDia += gastos[k][2];
}
console.log(gastoDia);

  //funcion de Joel
function totalDia(matriz, dia = 1) {
    let diaReal = dia - 1;
    if (diaReal < 7) {
        return matriz[0][diaReal];
    } else if (diaReal < 14) {
        return matriz[1][diaReal - 7];
    } else if (diaReal < 21) {
        return matriz[2][diaReal - 14];
    } else {
        return matriz[3][diaReal - 21];
    }
}

/* 
c) Por último, es necesario tener el total de gastos realizados en el mes.
Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?
  */

let gastoMes = 0;
for (let i = 0; i < gastos.length; i++) {
    for (let j = 0; j < gastos[i].length; j++) {
        gastoMes += gastos[i][j];
    }
}
console.log(gastoMes);
