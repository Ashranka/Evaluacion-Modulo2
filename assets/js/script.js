$(document).ready(function() {

    // Validación del formulario de contacto
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();

        const nombre = $('#nombre').val().trim();
        const email = $('#email').val().trim();
        const mensaje = $('#mensaje').val().trim();

        if (nombre === '') {
            mostrarMensaje('Por favor, ingresa tu nombre', 'danger');
            return;
        }

        if (!validarEmail(email)) {
            mostrarMensaje('Por favor, ingresa un email válido', 'danger');
            return;
        }

        if (mensaje === '') {
            mostrarMensaje('Por favor, escribe un mensaje', 'danger');
            return;
        }

        // es un mockup
        mostrarMensaje('¡Mensaje enviado correctamente! Te contactaremos pronto.', 'success');
        this.reset();
    });

    // Test de seguridad
    $('#submitTest').on('click', function() {
        evaluarTest();
    });

    // Efectos de hover en las tarjetas de amenazas
    $('.threat-card').hover(
        function() {
            $(this).addClass('shadow-lg');
        },
        function() {
            $(this).removeClass('shadow-lg');
        }
    );

    // Efecto de escritura en el título principal
    if ($('.hero-section h1').length) {
        animarTexto('.hero-section h1');
    }
});

// Función para validar email funcion obtenida desde internet, no se usa regex
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Función para mostrar mensajes
function mostrarMensaje(mensaje, tipo) {
    const alerta = `
        <div class="alert alert-${tipo} alert-dismissible fade show mt-3" role="alert">
            ${mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;

    $('#contactForm').after(alerta);

    // Auto-remover después de 5 segundos
    setTimeout(function() {
        $('.alert').fadeOut();
    }, 5000);
}

function evaluarTest() {
    const respuestas = {
        q1: $('input[name="q1"]:checked').val(),
        q2: $('input[name="q2"]:checked').val(),
        q3: $('input[name="q3"]:checked').val()
    };

    // se verifica que todas las respuestas testen respondidas
    if (!respuestas.q1 || !respuestas.q2 || !respuestas.q3) {
        alert('Por favor, responde todas las preguntas');
        return;
    }

    let puntaje = 0;
    let mensaje = '';

    if (respuestas.q1 === 'no') puntaje += 2;
    if (respuestas.q2 === 'always') puntaje += 2;
    else if (respuestas.q2 === 'sometimes') puntaje += 1;
    if (respuestas.q3 === 'yes') puntaje += 2;
    else if (respuestas.q3 === 'manual') puntaje += 1;

    if (puntaje >= 5) {
        mensaje = '🛡️ ¡Excelente! Tienes buenos hábitos de seguridad. Sigue así para mantenerte protegido en línea.';
    } else if (puntaje >= 3) {
        mensaje = '⚠️ Bien, pero puedes mejorar. Considera implementar más medidas de seguridad para estar mejor protegido.';
    } else {
        mensaje = '🚨 Necesitas mejorar urgentemente tus hábitos de seguridad. Te recomendamos seguir nuestros consejos.';
    }

    // Mostrar resultado
    $('#testContent').hide();
    $('#resultText').text(mensaje);
    $('#testResult').show();
    $('#submitTest').hide();
}

// Función para animar texto obtenedio desde stackoverflow, creditos correspondientes
function animarTexto(selector) {
    const elemento = $(selector);
    const texto = elemento.text();
    elemento.text('');
    elemento.show();

    let i = 0;
    const intervalo = setInterval(function() {
        elemento.text(texto.slice(0, i + 1));
        i++;
        if (i >= texto.length) {
            clearInterval(intervalo);
        }
    }, 100);
}

// Resetear modal cuando se cierre
$('#securityTestModal').on('hidden.bs.modal', function() {
    $('#testContent').show();
    $('#testResult').hide();
    $('#submitTest').show();
    $('input[type="radio"]').prop('checked', false);
});

// Efecto parallax simple para el hero
$(window).scroll(function() {
    const scrolled = $(this).scrollTop();
    const rate = scrolled * -0.5;

    if ($('.hero-section').length) {
        $('.hero-section').css('transform', 'translateY(' + rate + 'px)');
    }
});

