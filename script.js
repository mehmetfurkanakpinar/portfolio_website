
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("typewriter");

    const content = [
        { type: "text", value: "Hi! My name is Furkan, and I am aspiring to be a " },
        { type: "highlight", value: "data analyst" },
        { type: "text", value: " with a strong interest in SQL, Python, and machine learning. I have compiled a portfolio showcasing various projects that I have worked on during my Master’s program and as a personal practice to enhance my skills." }
    ];

    let partIndex = 0;
    let charIndex = 0;

    function type() {
        if (partIndex >= content.length) return;

        const part = content[partIndex];

        if (charIndex < part.value.length) {
            if (part.type === "highlight") {
                if (!container.querySelector(".highlight-keyword:last-of-type")) {
                    const span = document.createElement("span");
                    span.className = "highlight-keyword";
                    container.appendChild(span);
                }
                const span = container.querySelector(".highlight-keyword:last-of-type");
                span.textContent += part.value.charAt(charIndex);
            } else {
                container.innerHTML += part.value.charAt(charIndex);
            }
            charIndex++;
            setTimeout(type, 28);
        } else {
            partIndex++;
            charIndex = 0;
            setTimeout(type, 50);
        }
    }

    type();
});