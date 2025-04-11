
// script.js

document.addEventListener("DOMContentLoaded", function () {
    const text = "Hi! My name is Furkan, and I am aspiring to be a data analyst with a strong interest in SQL, Python, and machine learning. I have compiled a portfolio showcasing various projects that I have worked on during my Master’s program and as a personal practice to enhance my skills.";
    let i = 0;
    const typing = () => {
        if (i < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 28);
        }
    };
    typing();
});