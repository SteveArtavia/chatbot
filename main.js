import { handleChatInteraction } from './chatLogic.js';
import chatResponses from './chatResponses.js';

let chatBox = document.getElementById('chat-box');
let userInput = document.getElementById('user-input');
let sendBtn = document.getElementById('send-btn');

const displayUserMessage = (input) => {
    let userMessage = document.createElement('p');
        userMessage.classList.add('userMessage');
        userMessage.textContent = input;
        chatBox.appendChild(userMessage);
}

const displayBotMessage = (input) => {
    setTimeout(() => {
        let botResponse = handleChatInteraction(input);
        let botMessage = document.createElement('p');
        botMessage.classList.add('botMessage');
        botMessage.innerHTML = botResponse;
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 400);
}

const sendMessage = () => {
    let input = userInput.value;

    if (input) {
        
        displayUserMessage(input);

        displayBotMessage(input);

        userInput.value = '';

        chatBox.scrollTop = chatBox.scrollHeight;
        userInput.blur();

    }
}

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener('keypress', (event) => {
    if(event.key === "Enter"){
        event.preventDefault();
        sendMessage();
    }
});


/// BUTTON RESPONSES FUNCTIONS ///
const contactButton = () => {
    setTimeout(() => {
        let botMessage = document.createElement('p');
        botMessage.classList.add('botMessage');
        botMessage.innerHTML = chatResponses.getContact();
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 400);
}

window.contactButton = contactButton;

const aboutMeButton = () => {
    setTimeout(() => {
        let botMessage = document.createElement('p');
        botMessage.classList.add('botMessage');
        botMessage.innerHTML = chatResponses.getAboutMe();
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 400);
}
window.aboutMeButton = aboutMeButton;
