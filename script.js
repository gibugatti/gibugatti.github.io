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
  <script>
    // Seleciona o container onde os números binários vão cair
    const matrix = document.querySelector('.matrix');
    const totalColumns = 30; // Número de colunas para a "chuva" de números
    const totalNumbersPerColumn = 20; // Número de números por coluna

    // Função para gerar números binários
    function generateBinaryNumbers() {
        for (let i = 0; i < totalColumns; i++) {
            // Adiciona uma coluna de números binários
            for (let j = 0; j < totalNumbersPerColumn; j++) {
                const number = document.createElement('span');
                number.textContent = Math.random() > 0.5 ? '1' : '0'; // Alterna entre 0 e 1

                // Define a posição da coluna
                const positionX = i * (100 / totalColumns); // Divide a largura da tela entre as colunas
                const positionY = j * 30; // Controla a distância entre os números na coluna

                // Define animações aleatórias para os números
                const delay = Math.random() * 5 + 's'; // Atraso aleatório
                const duration = Math.random() * 5 + 5 + 's'; // Duração aleatória

                number.style.left = `${positionX}%`;
                number.style.top = `${positionY}px`;
                number.style.animationDelay = delay;
                number.style.animationDuration = duration;

                matrix.appendChild(number);
            }
        }
    }

    // Chama a função para gerar os números binários
    generateBinaryNumbers();
</script>
