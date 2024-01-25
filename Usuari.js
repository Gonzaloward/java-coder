var usuarios = [
    { usuario: "#01", clave: "Mn12345" }
];

function Usuario(usuario, clave) {
    this.usuario = usuario;
    this.clave = clave;
}

usuarios.push(
    new Usuario("#02", "Mn12345"),
    new Usuario("#03", "Mn12345"),
    new Usuario("#04", "Mn12345")
);


function iniciarSesion(intentosMaximos, usuarios) {
    var sesionGuardada = sessionStorage.getItem("sesion");

    if (sesionGuardada) {
        mostrarMensaje("Sesión iniciada automáticamente");
        return;
    }

    for (var intento = 1; intento <= intentosMaximos; intento++) {
        var decision = mostrarMensajeConBoton("¿Deseas iniciar sesión o crear un usuario?", "Iniciar Sesión", "Crear Usuario");

        if (decision === true) {
            var usuarioIng = prompt("Ingrese su nombre de usuario:");
            var claveIng = prompt("Ingrese su clave:");

            if (verificarCredenciales(usuarioIng, claveIng, usuarios)) {
                mostrarMensaje("Inicio de sesión exitoso");

                sessionStorage.setItem("sesion", JSON.stringify({ usuario: usuarioIng }));
                break;
            } else {
                mostrarMensaje("Nombre de usuario o clave incorrectos. Intento " + intento + " de " + intentosMaximos);
            }
        } else {
            crearUsuario();
        }

        if (intento === intentosMaximos) {
            mostrarMensaje("Número máximo de intentos alcanzado. La página se cerrará.");
            cerrarVentana();
        }
    }
}

function verificarCredenciales(usuarioIng, claveIng, usuarios) {
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === usuarioIng && usuarios[i].clave === claveIng) {
            return true;
        }
    }
    return false;
}

function mostrarMensajeConBoton(mensaje, opcion1, opcion2) {
    return confirm(mensaje) ? true : false;
}

function crearUsuario() {
    var nuevoUsuario = prompt("Ingrese nuevo usuario:");
    var nuevaClave = prompt("Ingrese la clave para el nuevo usuario:");

    if (nuevoUsuario && nuevaClave) {
        usuarios.push(new Usuario(nuevoUsuario, nuevaClave));
        mostrarMensaje("Usuario creado con éxito");
    } else {
        mostrarMensaje("Debe ingresar un usuario y una clave válidos.");
    }
}

function mostrarMensaje(mensaje) {
    alert(mensaje);
}

function cerrarVentana() {
    sessionStorage.removeItem("sesion");
    window.close();
}

var intentosMaximos = 5;

iniciarSesion(intentosMaximos, usuarios);

