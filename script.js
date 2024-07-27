let chatBox = document.getElementById('chat-box');
let userInput = document.getElementById('user-input');
let sendBtn = document.getElementById('send-btn');

let userName = '';

// arrays that will contain all the data for the chatbot to display for users depending on the topic
const getSaludo = () => [
    `Hola, me alegra saludarte ${userName}`,
    `Hola ${userName}, estoy encantado de verte!`,
    'Me alegra mucho verte!',
    `Hola ${userName}, como puedo ayudarte?`,
    `¡Hola, ${userName}! ¿Cómo puedo asistirte hoy?`,
    // ... [Rest of the greetings]
];

const getComoEstas = () => [
    `Muy bien, dime como puedo servirte hoy ${userName}`,
    `Me encuentro muy bien ${userName}, hay algo en lo que pueda ayudarte?`,
    // ... [Rest of the responses]
];

const getDespedida = () => [
    `Adiós ${userName}, ¡espero verte pronto!`,
    `Hasta luego ${userName}, cuídate mucho.`,
    // ... [Rest of the farewells]
];

const fallbackResponses = () => [
    `Lo siento, ${userName}, no entiendo tu pregunta. ¿Puedes reformularla?`,
    `No estoy seguro de cómo responder a eso, ${userName}. ¿Podrías ser más específico?`,
    // ... [Rest of the fallback responses]
];

const getInfo = () => [
    `<ul>
        Aquí tienes algunas de las cosas que puedo hacer:<br><br>
        <li><strong>Descargar mi currículum:</strong> Puedes obtener una copia de mi currículum desde un enlace de descarga.</li>
        <li><strong>Proporcionar información de contacto:</strong> Puedo darte detalles de contacto, incluyendo correo electrónico y número de teléfono.</li>
        // ... [Rest of the information]
    </ul>`,
    // ... [Other responses]
];

const getGracias = () => [
    `¡De nada, ${userName}! Estoy aquí para ayudarte.`,
    `No hay de qué, ${userName}! Si necesitas algo más, solo dímelo.`,
    // ... [Rest of the thank you responses]
];

const curriculum = '/assets/CV.pdf';

// crear la interacción de enviar un mensaje y recibir una respuesta
const interaction = () => {
    let input = userInput.value.trim().toLowerCase();
    let response = ''; // Define response variable here

    if (input) {
        let userMessage = document.createElement('p');
        userMessage.classList.add('userMessage');
        userMessage.textContent = input;
        chatBox.appendChild(userMessage);

        if (input.includes('hola')) {
            const saludo = getSaludo();
            let index = Math.floor(Math.random() * saludo.length);
            response = saludo[index];
        } else if (input.includes('como estas')) {
            const comoEstas = getComoEstas();
            let index = Math.floor(Math.random() * comoEstas.length);
            response = comoEstas[index];
        } else if (input.includes('mi nombre es') || input.includes('me llamo')) {
            if (input.includes('mi nombre es')) {
                userName = input.split('mi nombre es ')[1].trim();
            } else if (input.includes('me llamo')) {
                userName = input.split('me llamo ')[1].trim();
            }
            response = `¡Hola ${userName}! ¿Cómo puedo asistirte hoy?`;
        } else if (input.includes('adios') || input.includes('chao') || input.includes('hasta luego')) {
            const despedida = getDespedida();
            let index = Math.floor(Math.random() * despedida.length);
            response = despedida[index];
        } else if (input.includes('curriculum') || input.includes('cv')) {
            response = `Claro aquí tienes el link de descarga: <a href='${curriculum}' download>currículum</a>`;
        } else if (input.includes('informacion') || input.includes('info') || input.includes('que puedes hacer')) {
            const informacion = getInfo();
            let index = Math.floor(Math.random() * informacion.length);
            response = informacion[index];
        } else if (input.includes('gracias')) {
            const gracias = getGracias();
            let index = Math.floor(Math.random() * gracias.length);
            response = gracias[index];
        } else {
            const fallback = fallbackResponses();
            let index = Math.floor(Math.random() * fallback.length);
            response = fallback[index];
        }

        setTimeout(() => {
            let botMessage = document.createElement('p');
            botMessage.classList.add('botMessage');
            botMessage.innerHTML = response;
            chatBox.appendChild(botMessage);
        }, 500);

        userInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

sendBtn.addEventListener('click', interaction);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        interaction();
    }
});
