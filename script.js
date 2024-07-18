let chatBox = document.getElementById('chat-box');
let userInput = document.getElementById('user-input');
let sendBtn = document.getElementById('send-btn');

// array that will contain all the data for the chatbot to display for users
const data = [
    'Hola',
    'Como estas?',
    'Encantando de verte!',
    'Me alegra verte!',
    'Como puedo ayudarte?'
];

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
        let index = Math.floor(Math.random() * data.length);
        let response = data[index];
        let botMessage = document.createElement('p');
        botMessage.classList.add('botMessage');
        botMessage.textContent = response;
        chatBox.appendChild(botMessage);

    }

    userInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener('click', interaction);
