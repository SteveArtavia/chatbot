

const chatResponses = {

    getInitialMessage: () => [
        `Hello! I'm Artie, Steve's assistant. You can ask me about his resume, his portfolio, or how to contact him.`
    ],

    getGreeting: () => [
        `Hi! How can I help you today? Here are some options:<br><br>
        <div class="options">
            <button class="option" onclick="contactButton();">Contact Steve</button>
            <a class="option" href="./assets/CV-SteveArtavia.pdf" download>Download CV</a>
            <a class="option" href="https://steveartavia.netlify.app/">View Portfolio</a>
        </div>
        `, 

        `Hello! What can I do for you? Feel free to explore the options below:<br><br>
        <div class="options">
            <button class="option" onclick="contactButton();">Contact Steve</button>
            <a class="option" href="./assets/CV-SteveArtavia.pdf" download>Download Resume</a>
            <a class="option" href="https://steveartavia.netlify.app/">See Steve's Portfolio</a>
        </div>`
    ],

    getDownload: () => [
        `I'd be happy to share Steve's resume with you. You can download it by clicking the button below:<br><br>
            <a class="option" href="./assets/SteveArtavia - CV.pdf" download>Download Resume</a>
        `
    ],
    
    getPortfolio: () => [
        `You can check out his portfolio here: <br><br>
            <a class="option" href="https://steveartavia.netlify.app/">Go to Steve's portfolio</a>
        `
    ],

    getContact: () => [
        `You can reach Steve through the following:<br>
        📧 Email: <a href="mailto:stvartavia@gmail.com">stvartavia@gmail.com</a><br>
        🔗 LinkedIn: <a href="https://www.linkedin.com/in/steve-artavia-432b50242/" target="_blank">https://www.linkedin.com/in/steve-artavia</a><br>` 
    ],

    getAboutMe: () => [
        `Steve has experience building websites using HTML, CSS, Bootstrap and JavaScript. His interest in expanding his skillset has led him to study backend development with Java. He is looking for opportunities where he can continue learning, contribute and grow professionally.`
    ],

    getHelp: () => [
        `It seems you need some assistance! You can interact with me by typing keywords like: <br>- "resume"<br>- "cv"<br>- "portfolio"<br>- "contact"<br>- "about"<br> Try typing one of those!`
    ],

    getSkills: () => [
        `Steve's skillset includes: <br>
        - Front-end: HTML, CSS, JavaScript, JQuery, Bootstrap, Tailwind.<br>
        - Back-end: Java, PHP.<br>
        - Other: Figma, MySQL, Git, Wordpress, Postman.`
    ],

    getExperience: () => [
        `Building on his experience with various web development projects, Steve has recently been focused on backend development, including building programs and consuming APIs with Java. He is also actively learning Spring Boot to further enhance his capabilities in this area. You can find a comprehensive overview of his experience in his <a href="./assets/CV-SteveArtavia.pdf" download>resume</a>, and his portfolio showcases some of his web-focused projects at his <a href="https://steveartavia.netlify.app/">portfolio</a>.`
    ],

    getDefaultMessage: () => [
        `I couldn't understand your request. However, I can help you with the following:<hr>
        <div class="options">
            <a class="option" href="./assets/CV-SteveArtavia.pdf" download>Download Resume</a>
            <button class="option" onclick="contactButton();">Contact Steve</button>
            <a class="option" href="https://steveartavia.netlify.app/">View Portfolio</a>
            <button class="option" onclick="aboutMeButton();">About Steve</button>
        </div>
        `
    ]

};

export default chatResponses;
