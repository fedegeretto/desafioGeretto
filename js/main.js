const vendedoresDatos = [];

function guardarDatos() {
    function VendedorUSDT(nombre, apellido, edad, usdt) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.usdt = usdt;
    }

    let nombreGuardado = document.getElementById("nombre").value;
    // localStorage.setItem("nombre", nombreGuardado)

    let apellidoGuardado = document.getElementById("apellido").value;
    // localStorage.setItem("apellido", apellidoGuardado)

    let edadGuardado = document.getElementById("edad").value;
    // localStorage.setItem("edad", edadGuardado)

    let usdtGuardado = parseInt(document.getElementById("usdt").value);
    // localStorage.setItem("usdt", usdtGuardado)



    // Creando NUEVO OBJETO
    const vendedorNuevo = new VendedorUSDT(nombreGuardado, apellidoGuardado, edadGuardado, usdtGuardado)
    vendedoresDatos.push(vendedorNuevo);
    imprimirTabla(vendedoresDatos); // Se agrega un nuevo vendedor y se guarda en el array

    // Obtener los vendedores que vendan mas 500 usts
    const vendedoresSuperioresA500 = vendedoresDatos.filter(vendedor => { return vendedor.usdt > 500 });
    console.log(vendedoresSuperioresA500);
}

// Creando ARRAY
function imprimirTabla(datosTabla) {
    const table = document.getElementById("cuerpoTabla");
    table.innerHTML = "";

    for (const vendedor of datosTabla) {
        table.innerHTML += '<tbody><td>' + vendedor.nombre + '</td><td>' + vendedor.apellido + '</td><td>' + vendedor.edad + '</td><td>' + vendedor.usdt + '</td></tbody>';
    }
}

// console.log(localStorage.getItem("nombre"));
// console.log(localStorage.getItem("apellido"));
// console.log(localStorage.getItem("edad"));
// console.log(localStorage.getItem("usdt"));

// let parrafoOne = document.getElementById("parrafoOne");
// parrafoOne.innerText = localStorage.getItem("nombre")

// let parrafoTwo = document.getElementById("parrafoTwo");
// parrafoTwo.innerText = localStorage.getItem("apellido")

// let parrafoThree = document.getElementById("parrafoThree");
// parrafoThree.innerText = localStorage.getItem("edad")

// let parrafoFour = document.getElementById("parrafoFour");
// parrafoFour.innerText = localStorage.getItem("usdt")


// const mostrar = document.getElementById("boton")

