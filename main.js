import { handleChatInteraction } from './chatLogic.js';

let chatBox = document.getElementById('chat-box');
let userInput = document.getElementById('user-input');
let sendBtn = document.getElementById('send-btn');

const sendMessage = () => {
    let input = userInput.value;

    if (input) {
        let userMessage = document.createElement('p');
        userMessage.classList.add('userMessage');
        userMessage.textContent = input;
        chatBox.appendChild(userMessage);

        setTimeout(() => {
            let botResponse = handleChatInteraction(input);
            let botMessage = document.createElement('p');
            botMessage.classList.add('botMessage');
            botMessage.innerHTML = botResponse;
            chatBox.appendChild(botMessage);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 600)

        userInput.value = '';

        chatBox.scrollTop = chatBox.scrollHeight;
    }
}


sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener('keypress', (event) => {
    if(event.key === "Enter"){
        sendMessage();
    }
});