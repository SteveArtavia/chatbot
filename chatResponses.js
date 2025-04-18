
const chatResponses = {
    getGreeting: () => [
        `Hi! How can I help you?`
    ],

    getOptions: () => [
        `<button class="option">Download CV</button>`
    ],

    getDefault: () => [
        `I can help you with this info: <hr>
            <div class="options">
                <button class="option">Contact</button>
                <button class="option">Download CV</button>
                <button class="option">Portfolio link</button>
                <button class="option">About me</button>
                <button class="option">Skills</button>
                <button class="option">Education</button>
                <button class="option">Social Media</button>
            </div>

        `
    ]

};

export default chatResponses;
