function guardarDatos(){
    function VendedorUSDT(nombre, apellido, edad, usdt) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.usdt = usdt;
    }

    let nombreGuardado = document.getElementById("nombre").value;
    let apellidoGuardado = document.getElementById("apellido").value;
    let edadGuardado = document.getElementById("edad").value;
    let usdtGuardado = document.getElementById("usdt").value;

    // Creando NUEVO OBJETO

    vendedorNuevo = new VendedorUSDT (nombreGuardado, apellidoGuardado, edadGuardado, usdtGuardado)
    console.log(vendedorNuevo);
    agregarOrden();
}

// Creando ARRAY

let vendedoresDatos = [];
function agregarOrden() {
    vendedoresDatos.push(vendedorNuevo);
    console.log(vendedoresDatos);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+vendedorNuevo.nombre+'</td><td>'+vendedorNuevo.apellido+'</td><td>'+vendedorNuevo.edad+'</td><td>'+vendedorNuevo.usdt+'</td></tbody>';
}
