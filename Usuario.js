var intentosMaximos = 5;
var usuario = "#01";
var clave = "Mn12345";

for (var intento = 1; intento <= intentosMaximos; intento++) {
    var usuarioIng = prompt("Ingrese su nombre de usuario:");
    var claveIng = prompt("Ingrese su clave:");

    if (usuarioIng === usuario && claveIng === clave) {
        alert("Inicio de sesion exitoso");
        break;
    } else {
        alert("Nombre de usuario o clave incorrectos. Intento " + intento + " de " + intentosMaximos);
    }

    if (intento === intentosMaximos) {
        alert("Numero maximo de intentos alcanzado. Cierre la ventana.");
    }
}

    
