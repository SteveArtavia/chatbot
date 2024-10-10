import chatResponses from './chatResponses.js';

let userName = '';

export const handleChatInteraction = (input) => {
    input = input.trim().toLowerCase();
    let response = '';

    if (input.includes('hi') || input.includes('hello')) {
        const greeting = chatResponses.getGreeting(userName);
        let index = Math.floor(Math.random() * greeting.length);
        response = greeting[index];
    } else if (input.includes('how are you')) {
        const howAreYou = chatResponses.getHowAreYou(userName);
        let index = Math.floor(Math.random() * howAreYou.length);
        response = howAreYou[index];
    } else if (input.includes('my name is') || input.includes('i am')) {
        if (input.includes('my name is')) {
            userName = input.split('my name is ')[1].trim();
        } else if (input.includes('i am')) {
            userName = input.split('i am ')[1].trim();
        }
        response = `Nice to meet you, ${userName}!`;
    } else if (input.includes('goodbye') || input.includes('bye')) {
        const goodbye = chatResponses.getGoodbye(userName);
        let index = Math.floor(Math.random() * goodbye.length);
        response = goodbye[index];
    } else if (input.includes('thanks')) {
        const thanks = chatResponses.getThanks(userName);
        let index = Math.floor(Math.random() * thanks.length);
        response = thanks[index];
    } else {
        const fallback = chatResponses.fallbackResponses(userName);
        let index = Math.floor(Math.random() * fallback.length);
        response = fallback[index];
    }

    return response;
};