let chatBox = document.getElementById('chat-box');
let userInput = document.getElementById('user-input');
let sendBtn = document.getElementById('send-btn');

let userName = '';

// arrays that will contain all the data for the chatbot to display for users depending on the topic
const getGreeting = () => [
    `Hello, I'm glad to see you, ${userName}`,
    `Hi ${userName}, I'm delighted to see you!`,
    'I’m really happy to see you!',
    `Hello ${userName}, how can I help you?`,
    `Hello, ${userName}! How can I assist you today?`,
    `Hi, ${userName}! What can I do for you?`,
    `Hi, ${userName}! I'm here to help with whatever you need.`,
    `Greetings, ${userName}! How can I assist you today?`,
    `Hello, ${userName}! Nice to see you. How are you?`,
    `Hi, ${userName}! How’s your day going?`,
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
];


const getHowAreYou = () => [
    `I'm doing great, tell me how I can assist you today, ${userName}.`,
    `I'm feeling very well, ${userName}. Is there anything I can help you with?`,
    `I'm doing excellently, tell me, ${userName}, how can I be of help?`,
    `I'm fantastically well, ${userName} Tell me, how can I assist you?`
];

const getGoodbye = () => [
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
];

const fallbackResponses = () => [
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
];

const getInfo = () => [
    `<ul>
        Here are some of the things I can do:<br><br>
        <li><strong>Download my resume:</strong> You can get a copy of my resume from a download link.</li>
        <li><strong>Provide contact information:</strong> I can give you contact details, including email and phone number.</li>
        <li><strong>Answer frequently asked questions:</strong> I can respond to questions about services offered.</li>
        <li><strong>Website links:</strong> I can provide you with a link to my website for more information.</li>`,
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
];

const getThanks = () => [
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
];


const curriculum = '/assets/CV.pdf';

// crear la interacción de enviar un mensaje y recibir una respuesta
const interaction = () => {
    let input = userInput.value.trim().toLowerCase();
    let response = ''; // Define response variable here

    if (input) {
        let userMessage = document.createElement('p');
        userMessage.classList.add('userMessage');
        userMessage.textContent = input;
        chatBox.appendChild(userMessage);

        if (input.includes('hi') || input.includes('hello')) {
            const greeting = getGreeting();
            let index = Math.floor(Math.random() * greeting.length);
            response = greeting[index];
        } else if (input.includes('how are you')) {
            const howAreYou = getHowAreYou();
            let index = Math.floor(Math.random() * howAreYou.length);
            response = howAreYou[index];
        } else if (input.includes('my name is') || input.includes('i am')) {
            if (input.includes('my name is')) {
                userName = input.split('my name is ')[1].trim();
            } else if (input.includes('i am')) {
                userName = input.split('i am ')[1].trim();
            }
            response = `¡Hi ${userName}! ¿how can i assist you?`;
        } else if (input.includes('bye') || input.includes('see you')) {
            const goodBye = getGoodbye();
            let index = Math.floor(Math.random() * goodBye.length);
            response = goodBye[index];
        } else if (input.includes('curriculum') || input.includes('cv') || input.includes('resume') || input.includes('download')) {
            response = `Here's your download link: <a href='${curriculum}' class='link' download>click</a>`;
        } else if (input.includes('info') || input.includes('what can you do') || input.includes('help') || input.includes('what else can you do')) {
            const information = getInfo();
            let index = Math.floor(Math.random() * information.length);
            response = information[index];
        } else if (input.includes('thank')) {
            const thanks = getThanks();
            let index = Math.floor(Math.random() * thanks.length);
            response = thanks[index];
        } else if (input.includes('contact') || input.includes('mail') || input.includes('phone')){
            response = `  
            <ul>
            Sure, here's Steve's contact information:
                <li><strong>Email:</strong> <a href="mailto:stvartavia@gmail.com">stvartavia@gmail.com</a></li>
                <li><strong>Phone:</strong> <a href='tel:+50689545745'>+506 8954 5745</a></li>
                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/your-profile" target="_blank">your-profile</a></li>
                <li><strong>Website:</strong> <a href="https://steveartavia.netlify.app" target="_blank">steveartavia.netlify.app</a></li>
            If you need anything else, feel free to ask.
            </ul>
        `;
        } else if(input.includes('website') || input.includes('portfolio')){
            response = `Here's Steve's web portfolio:<a class='link' href='https://steveartavia.netlify.app'>click</a>`
        } else if(input.includes('services') || input.includes('skills') || input.includes('what can steve do') || input.includes('steve knowledge')){
            response = `
            What Steve knows how to do is quite broad. In Frontend Development, he is skilled in using HTML, CSS, and JavaScript to build and design web applications. He knows how to use CSS preprocessors like SASS and utility-first frameworks such as Tailwind CSS, and is familiar with responsive design using frameworks like Bootstrap and Bulma. Steve also knows how to enhance interactive elements with jQuery, optimize website performance, ensure cross-browser compatibility, and apply SEO best practices. He knows how to use Webflow to create responsive designs and continuously learns new technologies and trends.<br>
            
            In UI/UX Design, Steve excels in creating user interfaces and experiences that are intuitive and visually appealing. He knows how to handle wireframing, apply UX principles for a smooth user journey, and organize information logically for easy navigation. His design approach includes effective use of color theory, typography, and crafting responsive designs that adapt to various devices and screen sizes.<br>
            
            For Graphic Design, Steve is proficient with Adobe Creative Suite, including Photoshop, Illustrator, and InDesign. He has strong skills in typography, layout design, and visual identity creation. He can create digital marketing materials such as social media graphics and banners, and also has experience in animating with Adobe After Effects, editing videos with Premiere Pro, and designing content using Canva.<br>
            
            If you need more information or have any other questions, just let me know!
        `
        } else {
            const fallback = fallbackResponses();
            let index = Math.floor(Math.random() * fallback.length);
            response = fallback[index];
        }

        setTimeout(() => {
            let botMessage = document.createElement('p');
            botMessage.classList.add('botMessage');
            botMessage.innerHTML = response;
            chatBox.appendChild(botMessage);
        }, 500);

        userInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

sendBtn.addEventListener('click', interaction);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        interaction();
    }
});