//Ejercicio 1
//Dada la siguiente colección:

let personas = [
    {
        id: 1,
        nombre: "Ale",
        edad: 15
    },
    {
        id: 2,
        nombre: "Javi",
        edad: 83
    },
    {
        id: 3,
        nombre: "Luis",
        edad: 26
    },
    {
        id: 4,
        nombre: "Dan",
        edad: 16
    },
    {
        id: 5,
        nombre: "Tito",
        edad: 22
    },
    {
        id: 6,
        nombre: "Marina",
        edad: 76
    },
    {
        id: 7,
        nombre: "Susy",
        edad: 35
    },
    {
        id: 8,
        nombre: "John",
        edad: 25
    },
]

/*
Realizar lo siguiente:
Ordenar la colección de menor a mayor utilizando bubble sort.
Crear una función buscarNombre que recibe como parámetros la colección de personas y una edad, y como resultado deberá imprimir por 
consola el nombre correspondiente a la persona cuya edad fue pasada como parámetro.
Para realizar la búsqueda en la colección de personas, utilizar el algoritmo de búsqueda binaria.
*/

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length -1; j++ ){
            if(arr[j].edad > arr[j + 1].edad){
                let aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            };
        };
    };
    return arr;
};

// console.log(bubbleSort(personas));

const buscarName = (arr, edad) => {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = arr[mid].edad;
        if (guess === edad) {
            return arr[mid].nombre;
        }
        if (guess > edad) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null; 
};

console.log(buscarName(personas,15));
console.log(buscarName(personas,76));