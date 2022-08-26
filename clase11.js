// ============== EJERCICIO 1 ==============

// Lista de clientes
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

// Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
// nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
// objeto cliente que corresponda con ese nombre ingresado.

// Crear otro método llamado depósito que recibirá dos parámetros: el titular de
// cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
// correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
// Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
// nuevo saldo es: XXXX”.

// Crear un último método llamado extracción que recibirá también dos parámetros:
// el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
// correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
// menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
// De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
// saldo es: XXXX”.

let banco = {
    clientes: arrayCuentas,
    consultarCliente: function(nombre) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (nombre === this.clientes[i].titularCuenta) {
                return(this.clientes[i]);
            }
        }
    },
    deposito: function(nombre, dineroDepositar) {
        let clienteADepositar = this.consultarCliente(nombre);
        clienteADepositar.saldoEnPesos += dineroDepositar;
        console.log(`Depósito realizado, su nuevo saldo es: ${clienteADepositar.saldoEnPesos}`)
        return clienteADepositar.saldoEnPesos
    },
    extraccion: function (nombre, dineroExtraer) {
        let clienteADepositar = this.consultarCliente(nombre);
        if (clienteADepositar.saldoEnPesos -= dineroExtraer != 0) {
            clienteADepositar.saldoEnPesos -= dineroExtraer;
            console.log(`Extracción realizada correctamente, su nuevo saldo es: ${clienteADepositar.saldoEnPesos}`);
        } else {
            console.log("Saldo insuficiente")
        }
    }
}
// console.log(banco);
// console.log(banco.consultarCliente("Ansel Ardley"));
// banco.deposito("Ansel Ardley", 1000)
// banco.extraccion("Ansel Ardley", 1000)



// ============== EJERCICIO 2 - PROPIEDAD ÚNICA ==============

// Crear una función llamada propiedadUnica que reciba un arreglo de objetos como
// parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como
// parámetro la propiedad que fue pasada como string.

let array = [ 
    { 
        nombre: "Lean", 
        edad: 27, 
    }, 
    { 
        nombre: "Eze", 
        edad: 49,
    } 
]

function propiedadUnica(arr, str) {
    let nuevoArray = [];
    for (let i = 0; i < arr.length; i++) {
        nuevoArray.push({
            [str]: arr[i][str],
        });
    }
    console.log(nuevoArray);
    return nuevoArray;
}
propiedadUnica(array, "edad")

