
const chatResponses = {
    getGreeting: () => [
        `Hi! How can I help you?`
    ],

    getOptions: () => [
        `<button class="option">Download CV</button>`,
        `<button class="option">Contact</button>`,
        `<button class="option">Portfolio link</button>`,
        `<button class="option">About me</button>`,
        `<button class="option">Skills</button>`,
        `<button class="option">Education</button>`,
        `<button class="option">Social Media</button>`

    ],

    getDownload: () => [
        `I'd be happy to share my resume with you. You can download it by       clicking here:
            <button class="option" href="./assets/CV-SteveArtavia.pdf" download>Download CV</button>
        `
    ],

    getDefaultMessage: () => [
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
