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

const comoEstas = [
    'Muy bien, dime como puedo servirte hoy',
    'Me encuentro muy bien, hay algo en lo que pueda ayudarte?',
    'Estoy excelentemente bien, cuentame como puedo serte de ayuda?',
    'Estoy fantasticamente bien, dime en que te puedo ayudar'
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

    if(input === 'hola'){
        const saludo = getSaludo();
        let index = Math.floor(Math.random() * saludo.length);
        response = saludo[index];
    } else if (input.includes('como estas')){
        let index = Math.floor(Math.random() * comoEstas.length);
        response = comoEstas[index];
    } else if(input.includes('mi nombre es')){
        userName = input.split('mi nombre es ')[1].trim();
        response = `Un gusto ${userName}`
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