let introClicked = false;
let visionClicked = false;
let passionClicked = false;

function AboutPressed(){
    window.scrollTo(0, 925);
}

function ContactPressed(){
    window.scrollTo(0, 1350);
}

function Disappear(){
    let telegramAnchor = document.getElementById("telegram-link");
    let gmailAnchor = document.getElementById("gmail-link");
    let githubAnchor = document.getElementById("github-link");

    if(telegramAnchor)
        telegramAnchor.style.display = 'none';   
    if(gmailAnchor)
        gmailAnchor.style.display = 'none';
    if(githubAnchor)
        githubAnchor.style.display = 'none';
}

function GmailClicked(){
    let anchor = document.createElement("a");
    let footer = document.getElementById("footer");
    let telegramLink = document.getElementById('telegram-link');    
    let githubLink = document.getElementById('github-link');
    let gmailLink = document.getElementById('gmail-link');
    let anchorLink = document.createTextNode("Gmail: dagmnebiat@gmail.com");

    anchor.setAttribute("href", "https://gmail.com");
    anchor.setAttribute('id', 'gmail-link');
    anchor.appendChild(anchorLink);
    
    if(telegramLink)
        footer.removeChild(telegramLink);
    if(githubLink)
        footer.removeChild(githubLink);

    if(!gmailLink)
        footer.appendChild(anchor);
    else
        gmailLink.style.display = "inline";
}

function TelegramClicked(){
    let anchor = document.createElement("a");
    let footer = document.getElementById("footer");
    let gmailLink = document.getElementById('gmail-link');
    let githubLink = document.getElementById('github-link');
    let telegramLink = document.getElementById('telegram-link');
    let anchorLink = document.createTextNode("Telegram Username: @DagimN");

    anchor.setAttribute("href", "https://t.me/DagimN");
    anchor.setAttribute('id', 'telegram-link');
    anchor.appendChild(anchorLink);
    anchor.style.display = "inline";
    
    if(gmailLink)
        footer.removeChild(gmailLink);
    if(githubLink)
        footer.removeChild(githubLink);

    if(!telegramLink)
        footer.appendChild(anchor);
    else
        telegramLink.style.display = "inline";
}

function GithubClicked(){
    let anchor = document.createElement("a");
    let footer = document.getElementById("footer");
    let telegramLink = document.getElementById('telegram-link');
    let githubLink = document.getElementById('github-link');
    let gmailLink = document.getElementById('gmail-link');
    let anchorLink = document.createTextNode("Github Username: @DagimN");

    anchor.setAttribute("href", "https://github.com/DagimN");
    anchor.setAttribute('id', 'github-link');
    anchor.appendChild(anchorLink);

    if(telegramLink)
        footer.removeChild(telegramLink);
    if(gmailLink)
        footer.removeChild(gmailLink);

    if(!githubLink)
        footer.appendChild(anchor);
    else
        githubLink.style.display = "inline";
}

function IntroClicked(){
    let display = document.getElementById('intro-id');
    let monitor = document.getElementById('monitor-id');
    let heading = document.getElementById('intro-heading');
    let paragraph = document.getElementById('intro-para');
    
    if(passionClicked)
        PassionClicked();
    if(visionClicked)
        VisionClicked();

    if(introClicked){
        monitor.style.height = null;
        monitor.style.width = null;
        monitor.style.left = null;

        display.style.top = "60px";
        display.style.left = "13%";
        display.style.height = "80px";
        display.style.width = "80px";

        heading.style.display = "none";
        paragraph.style.display = "none";

        introClicked = false;
    }
    else{
        monitor.style.height = "200px";
        monitor.style.width = "200px";
        monitor.style.left = "9%";

        display.style.top = "47px";
        display.style.left = "10.19%";
        display.style.height = "400px";
        display.style.width = "600px";

        heading.style.display = "block";
        paragraph.style.display = "inline";

        introClicked = true;
    }
}

function VisionClicked(){
    let display = document.getElementById('vision-id');
    let watch = document.getElementById('watch-id');
    let heading = document.getElementById('vision-heading');
    let paragraph = document.getElementById('vision-para');
    
    if(passionClicked)
        PassionClicked();
    if(introClicked)
        IntroClicked();

    if(visionClicked){
        watch.style.height = null;
        watch.style.width = null;
        watch.style.left = null;

        display.style.top = "62px";
        display.style.left = "46%";
        display.style.height = "80px";
        display.style.width = "80px";

        heading.style.display = "none";
        paragraph.style.display = "none";

        visionClicked = false;
    }
    else{
        watch.style.height = "200px";
        watch.style.width = "200px";
        watch.style.left = "42.2%";

        display.style.top = "47px";
        display.style.left = "28%";
        display.style.height = "400px";
        display.style.width = "600px";

        heading.style.display = "block";
        paragraph.style.display = "inline";

        visionClicked = true;
    }
}

function PassionClicked(){
    let display = document.getElementById('passion-id');
    let joystick = document.getElementById('joystick-id');
    let heading = document.getElementById('passion-heading');
    let paragraph = document.getElementById('passion-para');
    
    if(introClicked)
        IntroClicked();
    if(visionClicked)
        VisionClicked();

    if(passionClicked){
        joystick.style.height = null;
        joystick.style.width = null;
        joystick.style.left = null;

        display.style.top = "60px";
        display.style.left = "81.5%";
        display.style.height = "80px";
        display.style.width = "80px";

        heading.style.display = "none";
        paragraph.style.display = "none";

        passionClicked = false;
    }
    else{
        joystick.style.height = "200px";
        joystick.style.width = "200px";
        joystick.style.left = "79%";

        display.style.top = "45px";
        display.style.left = "48.8%";
        display.style.height = "400px";
        display.style.width = "600px";
        display.style.borderRadius = "23.5%";

        heading.style.display = "block";
        paragraph.style.display = "inline";

        passionClicked = true;
    }
}
