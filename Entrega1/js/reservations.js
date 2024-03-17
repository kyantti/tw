$(document).ready(function() {
    // Inicializar el selector de fecha
    $("#date").datepicker({
        minDate: 0, // La fecha mínima permitida es la de hoy
        dateFormat: "yy-mm-dd" // Formato de fecha
    });
});