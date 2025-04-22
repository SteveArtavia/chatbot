

const chatResponses = {
    getGreeting: () => [
        `Hi! How can I help you today? Here are some options:<br><br>
        <div class="options">
            <button class="option" onclick="contactButton();">Contact</button>
            <a class="option" href="./assets/CV-SteveArtavia.pdf" download>Download CV</a>
            <a class="option" href="https://steveartavia.netlify.app/">View Portfolio</a>
        </div>
        `
    ],

    getDownload: () => [
        `I'd be happy to share my resume with you. You can download it by       clicking the button below:<br><br>
            <a class="option" href="./assets/CV-SteveArtavia.pdf" download>Download CV</a>
        `
    ],
    
    getPortfolio: () => [
        `You can check out my portfolio here: <br><br>
            <a class="option" href="https://steveartavia.netlify.app/">Portfolio</a>
        `
    ],

    getContact: () => [
        `You can reach me through the following:<br>
        📧 Email: <a href="mailto:stvartavia@gmail.com">stvartavia@gmail.com</a><br>
        🔗 LinkedIn: <a href="https://www.linkedin.com/in/steve-artavia-432b50242/" target="_blank">https://www.linkedin.com/in/steve-artavia</a><br>
        📱 Phone: <a href="tel:+50689545745">+506 8954 5745</a>`  
    ],

    getAboutMe: () => [
        `Steve is a passionate aspiring web developer with solid foundational skills in HTML, CSS, JavaScript, PHP, and MySQL. 
        He is highly motivated to become a valuable part of a web development team. 
        Currently studying backend development to further strengthen his expertise, 
        Steve is eager to contribute his full effort and make a meaningful impact on every project he joins.`
    ],

    getDefaultMessage: () => [
        `I can help you with this info: <hr>
            <div class="options">
                <a class="option" href="./assets/CV-SteveArtavia.pdf" download>Download CV</a>
                <button class="option" onclick="contactButton();">Contact</button>
                <a class="option" href="https://steveartavia.netlify.app/">Portfolio</a>
                <button class="option" onclick="aboutMeButton();">About me</button>
            </div>
        `
    ]

};

export default chatResponses;
