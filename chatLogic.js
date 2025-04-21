import chatResponses from './chatResponses.js';

let response = '';

// SOLUCIONAR COMO MOSTRAR MENSAJE INICIAL
export function showInitialMessage(){
    response = `Hola como te ayudo`;
    return;
}
//////////////////////

export const handleChatInteraction = (input) => {
    input = input.trim().toLowerCase();

    let option = null;
    let index = 0;

    if (input.includes("hola")) {
        option = chatResponses.getGreeting();
        index = Math.floor(Math.random() * option.length);
        response = option[index];

    } else if (input.includes("help")) {
        option = chatResponses.getDefaultMessage();
        response = option[0];
    } else {
        option = chatResponses.getDefaultMessage();
        response = option[0];
    }

    return response;
};