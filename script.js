document.addEventListener("DOMContentLoaded", function() {
    // Animação de escrita no título
    function typeWriterEffect(element, text, speed) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        element.innerHTML = ""; // Limpa antes de iniciar
        type();
    }

    const title = document.querySelector("h1");
    if (title) {
        typeWriterEffect(title, "Giulia", 150);
    }

    // Efeito de fade-in ao rolar a página
    const sections = document.querySelectorAll(".animate-slide");
    const options = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Efeito de hover nos links do portfólio
    document.querySelectorAll(".portfolio a").forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ff0";
            link.style.transform = "scale(1.1)";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "#0ff";
            link.style.transform = "scale(1)";
        });
    });

    // Botão de download com animação
    const resumeButton = document.querySelector(".resume a");
    if (resumeButton) {
        resumeButton.addEventListener("mouseover", () => {
            resumeButton.style.backgroundColor = "#ff0";
            resumeButton.style.color = "#000";
        });
        resumeButton.addEventListener("mouseout", () => {
            resumeButton.style.backgroundColor = "#0ff";
            resumeButton.style.color = "#000";
        });
    }
});
