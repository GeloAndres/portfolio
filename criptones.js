document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.querySelector('#contact-form input[type="text"]').value;
    const email = document.querySelector('#contact-form input[type="email"]').value;
    const mensaje = document.querySelector('#contact-form textarea').value;

    if (nombre && email && mensaje) {
        alert('Mensaje enviado con éxito');
    } else {
        alert('Por favor, completa todos los campos');
    }
});
