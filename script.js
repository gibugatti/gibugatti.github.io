document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Mensagem enviada com sucesso!");
});
function toggleSection(sectionId) {
  // Esconde todas as seções
  document.querySelectorAll("section:not(#home)").forEach(section => {
    section.classList.add("hidden");
  });

  // Exibe a seção clicada
  document.getElementById(sectionId).classList.remove("hidden");
}
let currentPage = 0;

function changePage(pageIndex) {
  const carousel = document.querySelector('.carousel-items');
  const navDots = document.querySelectorAll('.nav-dot');

  // Atualiza a página visível
  carousel.style.transform = `translateX(-${pageIndex * 100}%)`;

  // Marca o ponto ativo
  navDots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === pageIndex) {
      dot.classList.add('active');
    }
  });

  currentPage = pageIndex;
}

document.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  document.querySelector(".title").style.transform = `translateY(${scrollTop * 0.5}px)`;
});
 const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    document.body.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "01"; // Apenas números binários
    const fontSize = 30; // Tamanho da fonte aumentado
    const columns = canvas.width / fontSize;

    const drops = Array(Math.floor(columns)).fill(0);

    function drawMatrix() {
        // Log para depuração
        console.log("Desenhando...");
        
        // Removido o clearRect para depuração
        // ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0F0"; // Verde Matrix
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;

            // Desenha a letra na posição
            ctx.fillText(text, x, y);

            // Reinicia a "gota" quando ela atinge a parte inferior da tela
            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    // Chama a função de desenhar a cada 50ms
    setInterval(drawMatrix, 50);

    // Ajusta o tamanho do canvas quando a tela for redimensionada
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
