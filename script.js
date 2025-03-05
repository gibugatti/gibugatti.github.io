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
        element.innerHTML = "";
        type();
    }

    const title = document.querySelector("h1");
    if (title) {
        typeWriterEffect(title, "Giulia", 100);
    }

    // Efeito de fade-in ao rolar a página
    const sections = document.querySelectorAll(".animate-slide");
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Animação de hover nos links do portfólio
    document.querySelectorAll(".portfolio a").forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.transition = "all 0.3s ease";
            link.style.color = "#ff0";
            link.style.transform = "scale(1.1)";
        });
        link.addEventListener("mouseleave", () => {
            link.style.color = "#0ff";
            link.style.transform = "scale(1)";
        });
    });

    // Botão de download com animação
    const resumeButton = document.querySelector(".resume a");
    if (resumeButton) {
        resumeButton.addEventListener("mouseenter", () => {
            resumeButton.style.transition = "all 0.3s ease";
            resumeButton.style.backgroundColor = "#ff0";
            resumeButton.style.color = "#000";
            resumeButton.style.transform = "scale(1.05)";
        });
        resumeButton.addEventListener("mouseleave", () => {
            resumeButton.style.backgroundColor = "#0ff";
            resumeButton.style.color = "#000";
            resumeButton.style.transform = "scale(1)";
        });
    }

    // Preloader
    const preloader = document.getElementById("splash");
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = "0";
            preloader.style.transition = "opacity 0.5s ease-out";
            setTimeout(() => preloader.style.display = "none", 500);
        }, 2000);
    }
});
