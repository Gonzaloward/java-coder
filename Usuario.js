

// funcion principal iniciar sesion

//aca se le dice a la funcion que variables tomar en cuenta con una sec for
function iniciarSesion(intentosMaximos, usuario, clave) {
    for (var intento = 1; intento <= intentosMaximos; intento++) {
        var usuarioIng = prompt("Ingrese su nombre de usuario:");
        var claveIng = prompt("Ingrese su clave:");

        if (verificarCredenciales(usuarioIng, claveIng, usuario, clave)) {
            mostrarMensaje("Inicio de sesión exitoso");
            break;
        } else {
            mostrarMensaje("Nombre de usuario o clave incorrectos. Intento " + intento + " de " + intentosMaximos);
        }

        if (intento === intentosMaximos) {
            mostrarMensaje("Número máximo de intentos alcanzado. La página se cerrará.");
            cerrarVentana();
        }
    }
}


//funciones


function verificarCredenciales(usuarioIng, claveIng, usuario, clave) {
    return usuarioIng === usuario && claveIng === clave;
}

function mostrarMensaje(mensaje) {
    alert(mensaje);
}

function cerrarVentana() {
    window.close();
}


// variables


var intentosMaximos = 5;
var usuario = "#01";
var clave = "Mn12345";

//funcion principal
iniciarSesion(intentosMaximos, usuario, clave);
