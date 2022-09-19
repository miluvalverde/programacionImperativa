let personas = [
	{
		nombre: "Dua",
		apellido: "Lipa",
		ocupacion: "cantante",
		estatura: 173
	},
	{
		nombre: "Ariana",
		apellido: "Grande",
		ocupacion: "cantante",
		estatura: 160
	},
	{
		nombre: "Taylor",
		apellido: "Swift",
		ocupacion: "cantante",
		estatura: 180
	}
];
// Ordenar cantantes según estatura

function ordenarEstatura (arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1; j++) {
			if (arr[j].estatura > arr[j + 1].estatura) {
                let temporal = arr[j].estatura;
                arr[j].estatura = arr[j + 1].estatura;
                arr[j + 1].estatura = temporal;
            }
		}
	}
	return arr
}
console.log(ordenarEstatura(personas));