const contactButton = () => {
    option = chatResponses.getContact();
    response = option[0];
}

const chatResponses = {
    getGreeting: () => [
        `Hi! How can I help you?`
    ],

    getDownload: () => [
        `I'd be happy to share my resume with you. You can download it by       clicking here:<br><br>
            <a class="option" href="./assets/CV-SteveArtavia.pdf" download>Download CV</a>
        `
    ],
    
    getPortfolio: () => [
        `You can check out my portfolio here: <br><br>
            <a class="option" href="https://steveartavia.netlify.app/">Portfolio</a>
        `
    ],

    getContact: () => [
        `You can reach me through the following:
        Email: [Your Email Address]
        LinkedIn: [Your LinkedIn Profile URL (Optional)]
        Phone: [Your Phone Number (Optional)]`  
    ],

    getDefaultMessage: () => [
        `I can help you with this info: <hr>
            <div class="options">
                <a class="option" href="./assets/CV-SteveArtavia.pdf" download>Download CV</a>
                <button class="option" onclick="contactButton();">Contact</button>
                <a class="option" href="https://steveartavia.netlify.app/">Portfolio</a>
                <button class="option">About me</button>
                <button class="option">Skills</button>
                <button class="option">Education</button>
                <button class="option">Social Media</button>
            </div>
        `
    ]

};

export default chatResponses;
