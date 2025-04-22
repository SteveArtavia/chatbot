import chatResponses from './chatResponses.js';

let response = '';
let option = null;
let index = 0;


export const handleChatInteraction = (input) => {
    input = input.trim().toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
        option = chatResponses.getGreeting();
        index = Math.floor(Math.random() * option.length);
        response = option[index];

    } else if (input.includes("curriculum") || input.includes("cv") || input.includes("resume")) {
        option = chatResponses.getDownload();
        response = option[0];

    } else if (input.includes("portfolio")) {
        option = chatResponses.getPortfolio();
        response = option[0];

    } else if (input.includes("about")) {
        option = chatResponses.getAboutMe();
        response = option[0];

    } else {
        option = chatResponses.getDefaultMessage();
        response = option[0];
    }

    return response;
};