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

    if (input.includes("hola")) {
        const greeting = chatResponses.getGreeting();
        let index = Math.floor(Math.random() * greeting.length);
        response = greeting[index];

    } else if (input.includes("help")) {
        const option = chatResponses.getOptions();
        response = option[0];
    } else {
        const defaultOption = chatResponses.getDefault();
        response = defaultOption[0];
    }

    return response;
};