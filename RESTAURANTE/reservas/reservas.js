console.log("El script reservas.js se ha cargado.");

document.getElementById('formulario-reservas').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    console.log("Formulario enviado"); // Verifica si esta línea se ejecuta

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const fecha = document.getElementById('fecha').value;
    const personas = document.getElementById('personas').value;

    // Validar los campos
    if (nombre === '' || email === '' || fecha === '' || personas === '') {
        alert('Por favor, completa todos los campos.');
    } else if (!email.includes('@')) {
        alert('Por favor, ingresa un correo electrónico válido.');
    } else {
        // Si todo es correcto, puedes enviar el formulario
        this.submit();
    }
});


