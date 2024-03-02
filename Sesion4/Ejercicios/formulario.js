function validacion() {
    var exito = false;
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var domicilio = document.getElementById("domicilio").value;
    var cp = document.getElementById("cp").value
    var provincia = document.getElementById("provincia").value;
    var telefono = document.getElementById("telefono").value;
    
    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        alert("El campo nombre no puede estar vacío");
        exito = !exito;
    }
    if (apellidos == null || apellidos.length == 0 || /^\s+$/.test(apellidos)) {
        alert("El campo apellidos no puede estar vacío");
        exito = !exito;
    }
    if (domicilio == null || domicilio.length == 0 || /^\s+$/.test(domicilio)) {
        alert("El campo domicilio no puede estar vacío");
        exito = !exito;
    }
    // Comprobamos que el código postal no este vacío y que sea un número
    if (cp == null || cp.length == 0 || /^\s+$/.test(cp)) {
        alert("El campo código postal no puede estar vacío");
        exito = !exito;
    } else if (isNaN(cp)) {
        alert("El campo código postal debe ser un número");
        exito = !exito;
    }
    if (provincia == null || provincia.length == 0 || /^\s+$/.test(provincia)) {
        alert("El campo provincia no puede estar vacío");
        exito = !exito;
    }


    return true;
}
