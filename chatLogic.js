import chatResponses from './chatResponses.js';

let response = '';
let option = null;
let index = 0;


export const handleChatInteraction = (input) => {
    input = input.trim().toLowerCase();

    if (input.includes("hello")){
        option = chatResponses.getGreeting();
        index = Math.floor(Math.random() * option.length);
        response = option[index];

    } else if (input.includes("resume") || input.includes("cv") || input.includes("curriculum")) {
        option = chatResponses.getDownload();
        response = option[0];

    } else if (input.includes("portfolio")) {
        option = chatResponses.getPortfolio();
        response = option[0];

    } else if (input.includes("about")) {
        option = chatResponses.getAboutMe();
        response = option[0];

    } else if (input.includes("contact")) {
        option = chatResponses.getContact();
        response = option[0];

    } else if (input.includes("help")) {
        option = chatResponses.getHelp();
        response = option[0];

    } else {
        option = chatResponses.getDefaultMessage();
        response = option[0];
    }

    return response;
};