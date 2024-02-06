function agendarCita(dayElement) {
    var dayNumber = dayElement.innerText;
    var paciente = prompt("Ingrese el nombre del paciente:");
    var hora = prompt("Ingrese la hora de la cita:");

    console.log("Cita agendada para el día " + dayNumber + " con " + paciente + " a las " + hora);
}