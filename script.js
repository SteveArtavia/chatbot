let chatBox = document.getElementById('chat-box');
let userInput = document.getElementById('user-input');
let sendBtn = document.getElementById('send-btn');

let userName = '';

// arrays that will contain all the data for the chatbot to display for users depending on the topic
const  getSaludo = () => [
    `Hola, me alegra saludarte ${userName}`,
    `Hola ${userName}, estoy encantado de verte!`,
    'Me alegra mucho verte!',
    `Hola ${userName}, como puedo ayudarte?`,
    `¡Hola, ${userName}! ¿Cómo puedo asistirte hoy?`,
    `¡Hola, ${userName}! ¿Qué puedo hacer por ti?`,
    `¡Hola, ${userName}! Estoy aquí para ayudarte con lo que necesites.`,
    `¡Saludos, ${userName}! ¿En qué puedo ayudarte hoy?`,
    `¡Hola, ${userName}! Me alegra verte. ¿Cómo estás?`,
    `¡Hola, ${userName}! ¿Qué tal va tu día?`,
    `¡Hola, ${userName}! ¿Qué puedo hacer por ti hoy?`,
    `¡Hola, ${userName}! ¿Necesitas alguna ayuda?`,
    `¡Hola, ${userName}! ¿Cómo puedo asistirte en este momento?`,
    `¡Hola, ${userName}! Estoy listo para ayudarte con cualquier cosa que necesites.`,
    `¡Hola, ${userName}! ¿Hay algo específico en lo que pueda asistirte hoy?`,
    `¡Hola, ${userName}! Espero que estés teniendo un gran día. ¿Cómo puedo ayudarte?`,
    `¡Hola, ${userName}! ¿Cómo puedo hacer tu día más fácil?`,
    `¡Hola, ${userName}! Si tienes alguna pregunta, estoy aquí para responder.`,
    `¡Hola, ${userName}! ¿En qué puedo ser de ayuda hoy?`,
    `¡Hola, ${userName}! ¿Hay algo que necesites saber o hacer?`,
    `¡Hola, ${userName}! Cuéntame, ¿cómo puedo ayudarte hoy?`,
    `¡Hola, ${userName}! ¿Estás buscando algo en particular?`,
    `¡Hola, ${userName}! Estoy aquí para ayudarte con lo que necesites.`,
    `¡Hola, ${userName}! ¿Qué puedo hacer por ti en este momento?`,
    `¡Hola, ${userName}! Estoy disponible para ayudarte con cualquier consulta.`,
    `¡Hola, ${userName}! ¿Cómo puedo asistirte hoy?`,
    `¡Hola, ${userName}! ¿Tienes alguna pregunta para mí?`,
    `¡Hola, ${userName}! ¿Qué necesitas hoy?`,
    `¡Hola, ${userName}! ¿Hay algo en particular en lo que pueda ayudarte?`,
    `¡Hola, ${userName}! ¿En qué puedo ser útil?`,
    `¡Hola, ${userName}! Estoy aquí para responder a tus preguntas.`,
    `¡Hola, ${userName}! ¿Qué te gustaría saber hoy?`,
    `¡Hola, ${userName}! ¿Cómo puedo facilitarte las cosas hoy?`,
    `¡Hola, ${userName}! ¿En qué puedo asistirte ahora mismo?`,
    `¡Hola, ${userName}! ¿Hay algo en lo que necesites ayuda?`,
    `¡Hola, ${userName}! ¿Qué puedo hacer para ayudarte hoy?`,
    `¡Hola, ${userName}! ¿Hay algo específico en lo que necesites asistencia?`,
    `¡Hola, ${userName}! Estoy aquí para ayudarte con cualquier cosa que necesites.`,
    `¡Hola, ${userName}! ¿Cómo puedo ser de ayuda?`,
    `¡Hola, ${userName}! ¿Qué puedo hacer por ti en este momento?`,
    `¡Hola, ${userName}! ¿En qué puedo asistirte hoy?`,
    `¡Hola, ${userName}! ¿Cómo puedo hacer tu día mejor?`,
    `¡Hola, ${userName}! Estoy aquí para ayudarte con cualquier cosa que necesites.`,
    `¡Hola, ${userName}! ¿Qué tal tu día? ¿Cómo puedo ayudarte?`,
    `¡Hola, ${userName}! ¿Tienes alguna pregunta para mí?`,
    `¡Hola, ${userName}! ¿Cómo puedo asistirte hoy?`,
    `¡Hola, ${userName}! ¿Hay algo específico en lo que pueda ayudarte?`
];

const getComoEstas = () => [
    `Muy bien, dime como puedo servirte hoy ${userName}`,
    `Me encuentro muy bien ${userName}, hay algo en lo que pueda ayudarte?`,
    `Estoy excelentemente bien, cuentame ${userName} como puedo serte de ayuda?`,
    `Estoy fantasticamente bien ${userName}, dime en que te puedo ayudar`
]

const getDespedida = () => [
    `Adiós ${userName}, ¡espero verte pronto!`,
    `Hasta luego ${userName}, cuídate mucho.`,
    `Nos vemos ${userName}, ¡que tengas un gran día!`,
    `Chao ${userName}, ¡que todo vaya bien!`,
    `Hasta la próxima ${userName}, ¡ha sido un placer!`,
    `Que tengas un excelente día ${userName}.`,
    `Cuídate mucho ${userName}, ¡nos vemos!`,
    `Espero que todo te vaya bien ${userName}.`,
    `Que tengas un buen día ${userName}, ¡hasta luego!`,
    `Nos veremos pronto ${userName}, ¡cuídate!`,
    `Que la pases bien ${userName}, ¡hasta la próxima!`,
    `Espero que tengas un buen descanso ${userName}.`,
    `Fue un gusto hablar contigo ${userName}, ¡adiós!`,
    `Hasta pronto ${userName}, ¡que todo te salga bien!`,
    `Nos vemos en la próxima ${userName}, ¡cuídate!`
]

const fallbackResponses = () => [
    `Lo siento, ${userName}, no entiendo tu pregunta. ¿Puedes reformularla?`,
    `No estoy seguro de cómo responder a eso, ${userName}. ¿Podrías ser más específico?`,
    `Esa es una buena pregunta, ${userName}, pero no tengo la respuesta en este momento.`,
    `Lo siento, ${userName}, parece que no tengo la información que necesitas.`,
    `No tengo la respuesta a eso, ${userName}, pero estoy aquí para ayudarte con otras cosas.`,
    `Eso está fuera de mi alcance por ahora, ${userName}, pero intentaré aprender más sobre ello.`,
    `Parece que no comprendo bien, ${userName}. ¿Podrías darme más detalles?`,
    `No puedo ayudarte con eso en este momento, ${userName}. ¿Hay algo más en lo que pueda asistirte?`,
    `No estoy programado para responder a eso, ${userName}. ¿Te gustaría hacer otra pregunta?`,
    `Parece que estoy teniendo problemas para entender, ${userName}. ¿Puedes simplificar tu pregunta?`,
    `Lo siento, ${userName}, mi capacidad para responder a preguntas complejas aún está en desarrollo.`,
    `No tengo una respuesta para eso, ${userName}. ¿Te gustaría intentar otra pregunta?`,
    `Mi conocimiento sobre ese tema es limitado, ${userName}. ¿Podría ayudarte con otra consulta?`,
    `No estoy seguro de cómo ayudarte con eso, ${userName}. ¿Hay algo más que necesites?`,
    `No comprendo bien lo que estás preguntando, ${userName}. ¿Podrías ser más claro?`,
    `Eso no está en mi base de datos, ${userName}, pero puedo ayudarte con otros temas.`,
    `No tengo la información que buscas, ${userName}, pero estoy aquí para asistirte en otras áreas.`,
    `Esa pregunta es un poco difícil para mí, ${userName}. ¿Te gustaría probar con otra?`,
    `Mis capacidades son limitadas en este momento, ${userName}. ¿Cómo más puedo asistirte?`,
    `Lo siento, ${userName}, no tengo la capacidad para responder eso ahora mismo.`
];

const getInfo = () => [
    `<ul>
        Aquí tienes algunas de las cosas que puedo hacer:<br><br>
        <li><strong>Descargar mi currículum:</strong> Puedes obtener una copia de mi currículum desde un enlace de descarga.</li>
        <li><strong>Proporcionar información de contacto:</strong> Puedo darte detalles de contacto, incluyendo correo electrónico y número de teléfono.</li>
        <li><strong>Responder a preguntas frecuentes:</strong> Puedo responder a preguntas servicios ofrecidos.</li>
        <li><strong>Enlaces a redes sociales:</strong> Puedo proporcionarte enlaces a mis perfiles de redes sociales para que te conectes conmigo.</li>
        <li><strong>Enlaces a mi sitio web:</strong> Puedo proporcionarte el enlace a mi sitio web para que obtengas más información.</li>
        <li><strong>Ayuda general:</strong> Estoy aquí para ayudarte con cualquier otra consulta que tengas. Solo pregúntame.</li>
    </ul>`,
    `<ul>
        Soy capaz de hacer varias cosas para asistirte. Aquí tienes algunas:<br><br>
        <li><strong>Currículum:</strong> Puedo proporcionarte un enlace para descargar mi currículum.</li>
        <li><strong>Contacto:</strong> Puedo darte mi correo electrónico y número de teléfono para que te pongas en contacto conmigo.</li>
        <li><strong>Información:</strong> Puedo responder preguntas sobrelos servicios ofrecidos.</li>
        <li><strong>Redes sociales:</strong> Puedo proporcionarte enlaces a mis perfiles en LinkedIn, Behance, y GitHub.</li>
        <li><strong>Sitio web:</strong> Puedo ofrecerte el enlace a mi sitio web para más información.</li>
        <li><strong>Asistencia general:</strong> Si tienes alguna otra pregunta o necesitas ayuda, no dudes en decírmelo.</li>
    </ul>`,
    `<ul>
        Aquí están algunas de las cosas que puedo hacer:<br><br>
        <li><strong>Descargar mi currículum:</strong> Ofrezco un enlace para que puedas descargar mi currículum.</li>
        <li><strong>Proporcionar contacto:</strong> Puedo darte mi dirección de correo electrónico y número de teléfono.</li>
        <li><strong>Responder a preguntas comunes:</strong> Como información sobre servicios.</li>
        <li><strong>Enlaces a redes sociales:</strong> Puedo proporcionarte enlaces a mis perfiles profesionales.</li>
        <li><strong>Más detalles:</strong> Puedo dirigirte a mi sitio web para obtener más información.</li>
        <li><strong>Asistencia adicional:</strong> Estoy aquí para ayudarte con cualquier otra pregunta.</li>
    </ul>`,
    `<ul>
        Estas son algunas de las cosas que puedo hacer:<br><br>
        <li><strong>Descargar currículum:</strong> Puedo darte un enlace para descargar mi currículum.</li>
        <li><strong>Información de contacto:</strong> Ofrezco detalles como correo electrónico y teléfono.</li>
        <li><strong>Responder preguntas:</strong> Puedo responder preguntas sobre servicios.</li>
        <li><strong>Redes sociales:</strong> Puedo proporcionarte enlaces a mis perfiles en redes sociales.</li>
        <li><strong>Enlace al sitio web:</strong> Puedo darte el enlace a mi sitio web para más detalles.</li>
        <li><strong>Asistencia:</strong> Estoy disponible para ayudarte con cualquier otra consulta.</li>
    </ul>`
];

const getGracias = () => [
    `¡De nada, ${userName}! Estoy aquí para ayudarte.`,
    `No hay de qué, ${userName}! Si necesitas algo más, solo dímelo.`,
    `¡Es un placer, ${userName}! ¿Hay algo más en lo que pueda asistirte?`,
    `¡Con gusto, ${userName}! Estoy aquí para ayudarte con lo que necesites.`,
    `¡De nada, ${userName}! Si tienes más preguntas, estaré encantado de responder.`,
    `¡Con mucho gusto, ${userName}! No dudes en volver si necesitas más ayuda.`,
    `¡Siempre es un placer ayudar, ${userName}! ¿Hay algo más que pueda hacer por ti?`,
    `¡De nada, ${userName}! Espero que tengas un gran día.`,
    `¡No es nada, ${userName}! Estoy aquí para lo que necesites.`,
    `¡Estoy feliz de poder ayudarte, ${userName}! ¿Alguna otra cosa en la que pueda colaborar?`,
    `¡De nada, ${userName}! Tu satisfacción es mi prioridad.`,
    `¡Es un placer ayudarte, ${userName}! Si necesitas algo más, no dudes en decirlo.`,
    `¡De nada, ${userName}! ¿Te puedo ayudar con algo más?`,
    `¡Con gusto, ${userName}! Si tienes más dudas, aquí estaré.`,
    `¡No hay problema, ${userName}! Estoy a tu disposición.`,
    `¡Con placer, ${userName}! ¿Necesitas asistencia adicional?`,
    `¡Siempre estoy aquí para ayudarte, ${userName}! ¿Qué más puedo hacer por ti?`,
    `¡De nada, ${userName}! Espero haber sido útil.`,
    `¡Es un placer ayudar, ${userName}! Si necesitas más información, solo dímelo.`
];

const curriculum = '/assets/CV.pdf';

//crear la interaccion de enviar un mensaje y recibir una respuesta
//// Interacciones Basicas
const interaction = () => {
    let input = userInput.value.trim().toLowerCase();

    if(input){
        let userMessage = document.createElement('p');
        userMessage.classList.add('userMessage');
        userMessage.textContent = input;
        chatBox.appendChild(userMessage);
    }

    if(input.includes('hola')){
        const saludo = getSaludo();
        let index = Math.floor(Math.random() * saludo.length);
        response = saludo[index];
    } else if (input.includes('como estas')){
        let comoEstas = getComoEstas();
        let index = Math.floor(Math.random() * comoEstas.length);
        response = comoEstas[index];
    } else if(input.includes('mi nombre es') || input.includes('me llamo') || input.includes('hola soy')){
        if(input.includes('mi nombre es')){
            userName = input.split('mi nombre es ')[1].trim();
        } else if(input.includes('me llamo')){
            userName = input.split('me llamo ')[1].trim();
        } else if(input.includes('adios') || input.includes('chao') || input.includes('hasta luego')){
        let despedida = getDespedida();
        let index = Math.floor(Math.random() * despedida.length);
        response = despedida[index];
    } else if(input.includes('curriculum') || (input.includes('cv'))){
        response = `Claro aqui tienes el link de descarga: <a href='${curriculum}' download> curriculum</a>`
    } else if(input.includes('informacion') || input.includes('info') || input.includes('que puedes hacer')){
        let informacion = getInfo();
        let index = Math.floor(Math.random() * informacion.length);
        response = informacion[index];
    } else if(input.includes('gracias')){
        let gracias = getGracias();
        let index = Math.floor(Math.random()*gracias.length);
        response = gracias[index];
    } else {
        let fallback = fallbackResponses();
        let index = Math.floor(Math.random() * fallback.length);
        response = fallback[index]
    }

    setTimeout(()=> {
        let botMessage = document.createElement('p');
        botMessage.classList.add('botMessage');
        botMessage.innerHTML = response;
        chatBox.appendChild(botMessage);
    }, 500);

    userInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener('click', interaction);
userInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        interaction();
    }
})