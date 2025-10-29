document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos el botón por su ID
    const boton = document.getElementById('cambiarEstiloBtn');
    
    // Obtenemos el body para cambiar su clase
    const cuerpo = document.body;

    // Añadimos un "escuchador de eventos" al botón
    boton.addEventListener('click', function() {
        // Toggle: si tiene la clase 'modo-oscuro', la quita; si no la tiene, la añade.
        cuerpo.classList.toggle('modo-oscuro');
        
        // Opcional: cambiar el texto del botón
        if (cuerpo.classList.contains('modo-oscuro')) {
            boton.textContent = 'Desactivar Modo Oscuro';
        } else {
            boton.textContent = 'Activar Modo Oscuro';
        }
    });

    // Opcional: Alerta al cargar la página
    console.log("El sitio web de DAW se ha cargado correctamente.");
});