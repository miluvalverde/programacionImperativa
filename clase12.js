// EJERCICIO 1

// const alicia = [10, 80, 75];
// const bob = [90, 20, 25];

// let concurso = {
//     etapas: [],
//     ganador: "",
//     encontrarGanador: function(participanteUno, participanteDos) {
//         let nombreParticipanteUno = "alicia";
//         let nombreParticipanteDos = "bob";
//         let puntosPrimerParticipante = 0;
//         let puntosSegundoParticipante = 0;
//         for (let i = 0; i < 3; i ++) {
//             if (participanteUno[i] > participanteDos[i]) {
//                 puntosPrimerParticipante += 1;
//                 this.etapas.push(nombreParticipanteUno);
//             } else if (participanteUno[i] < participanteDos[i]){
//                 puntosSegundoParticipante +=1;
//                 this.etapas.push(nombreParticipanteDos);
//             } else if (participanteUno[i] == participanteDos[i]) {
//                 console.log("Ambos se encuentran empatados en puntos así que no gana ninguno esta etapa")
//             }
//         }
//         if (puntosPrimerParticipante > puntosSegundoParticipante) {
//             console.log("El ganador es: " + nombreParticipanteUno);
//             this.ganador = nombreParticipanteUno
//         } else if (puntosPrimerParticipante < puntosSegundoParticipante) {
//             console.log("El ganador es: " + nombreParticipanteDos);
//             this.ganador = nombreParticipanteDos
//         } else {
//             console.log("No hay ganador");
//         }
//     }
// }

// concurso.encontrarGanador(alicia, bob)



// EJERCICIO 2

// function digitalHouse(numeroUno, numeroDos) {
//     for (let i = 1; i <= 100; i ++) {
//         if ((i % numeroUno === 0) && (i % numeroDos === 0)) {
//             console.log("Digital House");
//         } else if (i % numeroUno === 0) {
//             console.log("Digital");
//         } else if (i % numeroDos === 0) {
//             console.log("House")
//         } else {
//             console.log(i)
//         }
//     }
// }

// digitalHouse(2, 3);