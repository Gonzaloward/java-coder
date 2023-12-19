let saldo= 100000

while (true) {
    let gastos = parseInt(prompt("Ingrese un gasto"));

    if (gastos <= 0 ){
        alert("Ingrese un valor valido");
        continue;

    }

    if (gastos > saldo){
        let reiniciar = prompt("Saldo insuficiente. ¿Desea empezar de nuevo? (Sí/No)").toLowerCase();
        if (reiniciar === 'si') {
            saldo = 100000;
            continue;
        } else {
            break;
        }
    }

    saldo -= gastos;
        alert("Su saldo disponible es: " + saldo);
        
        let mas = prompt("otro gasto? (si/no) ").toLocaleLowerCase();
        if(mas !== "si"){
            break;
        }

    }
alert("Gracias por usar el sistema. Saldo final " + saldo);