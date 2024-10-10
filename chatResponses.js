
const chatResponses = {
    getGreeting: (userName) => [
        `Hello, I'm glad to see you, ${userName}`,
        `Hi ${userName}, I'm delighted to see you!`,
        `I'm really happy to see you!`,
        `Hello ${userName}, how can I help you?`,
        `Hello, ${userName}! How can I assist you today?`,
        `Hi, ${userName}! What can I do for you?`,
        `Hi, ${userName}! I'm here to help with whatever you need.`,
        `Greetings, ${userName}! How can I assist you today?`,
        `Hello, ${userName}! Nice to see you. How are you?`,
        `Hi, ${userName}! How's your day going?`,
        `Hello, ${userName}! What can I do for you today?`,
        `Hi, ${userName}! Do you need any help?`,
        `Hello, ${userName}! How can I assist you right now?`,
        `Hi, ${userName}! I'm ready to help with anything you need.`,
        `Hello, ${userName}! Is there anything specific I can help you with today?`,
        `Hi, ${userName}! I hope you're having a great day. How can I help you?`,
        `Hello, ${userName}! How can I make your day easier?`,
        `Hello, ${userName}! If you have any questions, I'm here to answer them.`,
        `Hi, ${userName}! How can I help you today?`,
        `Hi, ${userName}! Is there anything you need to know or do?`,
        `Hi, ${userName}! Tell me, how can I help you today?`,
        `Hi, ${userName}! Are you looking for something in particular?`,
        `Hi, ${userName}! I'm here to help with whatever you need.`,
        `Hello, ${userName}! What can I do for you right now?`,
        `Hello, ${userName}! I'm available to help with any questions.`,
        `Hello, ${userName}! How can I assist you today?`,
        `Hi, ${userName}! Do you have any questions for me?`,
        `Hi, ${userName}! What do you need today?`,
        `Hello, ${userName}! Is there anything in particular I can help you with?`,
        `Hi, ${userName}! How can I be of help?`,
        `Hello, ${userName}! I'm here to answer your questions.`,
        `Hello, ${userName}! What would you like to know today?`,
        `Hi, ${userName}! How can I make things easier for you today?`,
        `Hi, ${userName}! How can I assist you right now?`,
        `Hello, ${userName}! Is there anything you need help with?`,
        `Hello, ${userName}! What can I do to help you today?`,
        `Hello, ${userName}! Is there anything specific you need assistance with?`,
        `Hi, ${userName}! I'm here to help with anything you need.`,
        `Hi, ${userName}! How can I help?`,
        `Hello, ${userName}! What can I do for you right now?`,
        `Hi, ${userName}! How can I assist you today?`,
        `Hi, ${userName}! How can I make your day better?`,
        `Hello, ${userName}! I'm here to help with whatever you need.`,
        `Hello, ${userName}! How's your day? How can I help?`,
        `Hi, ${userName}! Do you have any questions for me?`,
        `Hello, ${userName}! How can I assist you today?`,
        `Hello, ${userName}! Is there anything specific I can help you with?`
    ],
    getHowAreYou: (userName) => [
        `I'm doing great, tell me how I can assist you today, ${userName}.`,
        `I'm feeling very well, ${userName}. Is there anything I can help you with?`,
        `I'm doing excellently, tell me, ${userName}, how can I be of help?`,
        `I'm fantastically well, ${userName} Tell me, how can I assist you?`
    ],
    getGoodbye: (userName) => [
        `Goodbye ${userName}, hope to see you soon!`,
        `See you later ${userName}, take care.`,
        `See you ${userName}, have a great day!`,
        `Bye ${userName}, hope everything goes well!`,
        `Until next time ${userName}, it was a pleasure!`,
        `Have an excellent day, ${userName}.`,
        `Take care ${userName}, see you!`,
        `I hope everything goes well for you, ${userName}.`,
        `Have a good day, ${userName}, see you later!`,
        `See you soon, ${userName}, take care!`,
        `Have a great time, ${userName}, until next time!`,
        `I hope you have a good rest, ${userName}.`,
        `It was nice talking to you, ${userName}, goodbye!`,
        `See you soon, ${userName}, hope everything goes well!`,
        `See you next time, ${userName}, take care!`
    ],
    getInfo: () => [
        `<ul>
            Here are some of the things I can do:<br><br>
            <li><strong>Download my resume:</strong> You can get a copy of my resume from a download link.</li>
            <li><strong>Provide contact information:</strong> I can give you contact details, including email and phone number.</li>
            <li><strong>Answer frequently asked questions:</strong> I can respond to questions about services offered.</li>
            <li><strong>Website links:</strong> I can provide you with a link to my website for more information.</li>
        </ul>`,
        `<ul>
            I am capable of doing various things to assist you. Here are some:<br><br>
            <li><strong>Resume:</strong> I can provide you with a link to download my resume.</li>
            <li><strong>Contact:</strong> I can give you my email address and phone number for contact.</li>
            <li><strong>Information:</strong> I can answer questions about the services offered.</li>
            <li><strong>Website:</strong> I can offer you a link to our website for more information.</li>
        </ul>`,
        `<ul>
            Here are some of the things I can do:<br><br>
            <li><strong>Download my resume:</strong> I offer a link so you can download my resume.</li>
            <li><strong>Provide contact:</strong> I can give you my email address and phone number.</li>
            <li><strong>Answer common questions:</strong> Like information about services.</li>
            <li><strong>More details:</strong> I can direct you to our website for more information.</li>
        </ul>`,
        `<ul>
            These are some of the things I can do:<br><br>
            <li><strong>Download resume:</strong> I can provide you with a link to download my resume.</li>
            <li><strong>Contact information:</strong> I offer details like email and phone.</li>
            <li><strong>Answer questions:</strong> I can answer questions about services.</li>
            <li><strong>Website link:</strong> I can give you a link to our website for more details.</li>
        </ul>`
    ],
    getThanks: (userName) => [
        `You're welcome, ${userName}! I'm here to help you.`,
        `You're welcome, ${userName}! If you need anything else, just let me know.`,
        `It's a pleasure, ${userName}! Is there anything else I can assist you with?`,
        `Glad to help, ${userName}! I'm here for whatever you need.`,
        `You're welcome, ${userName}! If you have more questions, I'll be happy to answer.`,
        `You're very welcome, ${userName}! Feel free to come back if you need more help.`,
        `It's always a pleasure to help, ${userName}! Is there anything else I can do for you?`,
        `You're welcome, ${userName}! Hope you have a great day.`,
        `No problem, ${userName}! I'm here for whatever you need.`,
        `I'm happy to help, ${userName}! Is there anything else I can assist with?`,
        `You're welcome, ${userName}! Your satisfaction is my priority.`,
        `It's a pleasure to assist you, ${userName}! If you need anything else, don't hesitate to ask.`,
        `You're welcome, ${userName}! Can I help you with anything else?`,
        `Glad to help, ${userName}! If you have more questions, I'll be here.`,
        `No problem, ${userName}! I'm at your service.`,
        `With pleasure, ${userName}! Do you need additional assistance?`,
        `I'm always here to help, ${userName}! What else can I do for you?`,
        `You're welcome, ${userName}! I hope I've been helpful.`,
        `It's a pleasure to help, ${userName}! If you need more information, just let me know.`
    ],
    fallbackResponses: (userName) => [
        `I'm sorry, ${userName}, I don't understand your question. Can you rephrase it?`,
        `I'm not sure how to answer that, ${userName}. Could you be more specific?`,
        `That's a good question, ${userName}, but I don't have the answer right now.`,
        `I'm sorry, ${userName}, it seems I don't have the information you need.`,
        `I don't have the answer to that, ${userName}, but I'm here to help with other things.`,
        `That's beyond my scope for now, ${userName}, but I'll try to learn more about it.`,
        `It seems I'm not understanding well, ${userName}. Could you give me more details?`,
        `I can't help with that at the moment, ${userName}. Is there something else I can assist you with?`,
        `I'm not programmed to respond to that, ${userName}. Would you like to ask another question?`,
        `It seems I'm having trouble understanding, ${userName}. Can you simplify your question?`,
        `I'm sorry, ${userName}, my ability to answer complex questions is still under development.`,
        `I don't have an answer for that, ${userName}. Would you like to try another question?`,
        `My knowledge on that topic is limited, ${userName}. Could I help you with another inquiry?`,
        `I'm not sure how to help with that, ${userName}. Is there something else you need?`,
        `I'm not quite sure what you're asking, ${userName}. Could you be clearer?`,
        `That's not in my database, ${userName}, but I can help with other topics.`,
        `I don't have the information you're looking for, ${userName}, but I'm here to assist you in other areas.`,
        `That question is a bit tricky for me, ${userName}. Would you like to try another one?`,
        `My capabilities are limited at the moment, ${userName}. How else can I assist you?`,
        `I'm sorry, ${userName}, I don't have the capacity to answer that right now.`
    ]
};

export default chatResponses;
