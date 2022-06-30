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

    // Guardar vendedores en localStorage
    localStorage.setItem("vendedores", JSON.stringify(vendedoresDatos));
}

// Creando ARRAY
function imprimirTabla(datosTabla) {
    const table = document.getElementById("cuerpoTabla");
    table.innerHTML = "";

    for (const vendedor of datosTabla) {
        table.innerHTML += '<tbody><td>' + vendedor.nombre + '</td><td>' + vendedor.apellido + '</td><td>' + vendedor.edad + '</td><td>' + vendedor.usdt + '</td></tbody>';
    }
}

const vendedoresGuardados = localStorage.getItem("vendedores");
if (vendedoresGuardados) {
    const vendedoresGuardadosJSON = JSON.parse(vendedoresGuardados);
    imprimirTabla(vendedoresGuardadosJSON);
}
