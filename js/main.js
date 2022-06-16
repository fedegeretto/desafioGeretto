const vendedoresDatos = [];

function guardarDatos() {
    function VendedorUSDT(nombre, apellido, edad, usdt) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.usdt = usdt;
    }

    let nombreGuardado = document.getElementById("nombre").value;
    let apellidoGuardado = document.getElementById("apellido").value;
    let edadGuardado = document.getElementById("edad").value;
    let usdtGuardado = parseInt(document.getElementById("usdt").value);

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
