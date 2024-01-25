function exportarDatos() {
    var datosJSON = JSON.stringify(datosExportados, null, 2);

    // Crear un nuevo objeto jsPDF
    var pdf = new jsPDF();

    // Agregar título al PDF
    pdf.text("Resumen del día - " + obtenerFechaActual(), 20, 20);

    // Convertir la tabla a HTML
    var tablaHTML = document.getElementById('tablaDatos').outerHTML;

    // Agregar la tabla al PDF
    pdf.fromHTML(tablaHTML, 20, 30);

    // Descargar el PDF
    pdf.save('resumen_del_dia_' + obtenerFechaActual() + '.pdf');
}

function obtenerFechaActual() {
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1; // Los meses comienzan desde 0
    var anio = fecha.getFullYear();

    // Formatear la fecha como DD-MM-YYYY
    return dia + '-' + mes + '-' + anio;
}