let chatBox = document.getElementById('chat-box');
let userInput = document.getElementById('user-input');
let sendBtn = document.getElementById('send-btn');

// array that will contain all the data for the chatbot to display for users
const saludo = [
    'Hola',
    'Como estas?',
    'Encantando de verte!',
    'Me alegra verte!',
    'Como puedo ayudarte?'
];

const comoEstas = [
    'Muy bien, como te ayudo',
    'Me encuentro muy bien',
    'Estoy excelentemente bien',
    'Estoy fantasticamente bien'
]


let output = '';

// funcion de pedir nombre y guardar el nombre en una variable para reutilizarla.
// const nameRequest = () => {
    
// }

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
        let index = Math.floor(Math.random() * saludo.length);
        let response = saludo[index];
        let botMessage = document.createElement('p');
        botMessage.classList.add('botMessage');
        botMessage.textContent = response;
        chatBox.appendChild(botMessage);

    }

    if(input.includes('como estas')){
        let index = Math.floor(Math.random() * comoEstas.length);
        let response = comoEstas[index];
        let botMessage = document.createElement('p');
        botMessage.classList.add('botMessage');
        botMessage.textContent = response;
        chatBox.appendChild(botMessage);

    }

    userInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener('click', interaction);
