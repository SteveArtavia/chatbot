let chatBox = document.getElementById('chat-box');
let userInput = document.getElementById('user-input');
let sendBtn = document.getElementById('send-btn');

let userName = '';

// arrays that will contain all the data for the chatbot to display for users depending on the topic
const  getSaludo = () => [
    `Hola, me alegra saludarte ${userName}`,
    `Hola ${userName}, estoy encantado de verte!`,
    'Me alegra mucho verte!',
    `Hola ${userName}, como puedo ayudarte?`
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

//crear la interaccion de enviar un mensaje y recibir una respuesta
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
    } else if(input.includes('mi nombre es') || input.includes('me llamo')){
        if(input.includes('mi nombre es')){
            userName = input.split('mi nombre es ')[1].trim();
        } else if(input.includes('me llamo')){
            userName = input.split('me llamo ')[1].trim();
        }
    }else if(input.includes('adios') || input.includes('chao') || input.includes('hasta luego')){
        let despedida = getDespedida();
        let index = Math.floor(Math.random() * despedida.length);
        response = despedida[index];
    } else {
        response = 'lo siento no te entendi. ¿Puedes intentar con otra pregunta? '
    }

    setTimeout(()=> {
        let botMessage = document.createElement('p');
        botMessage.classList.add('botMessage');
        botMessage.textContent = response;
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