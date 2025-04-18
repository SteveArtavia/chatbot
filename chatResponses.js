
const chatResponses = {
    getGreeting: () => [
        `Hi! How can I help you?`
    ],

    getOptions: () => [
        `<button class="option">Download CV</button>`
    ],

    getDefault: () => [
        `I can help you with this info: <hr>
            <button class="option">Contact</button>
            <button class="option">Download CV</button>
            <button class="option">Portfolio link</button>

        `
    ]

};

export default chatResponses;
