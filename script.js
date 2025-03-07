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
   const matrixElement = document.querySelector('.matrix');
    const letters = '01';  // Usando números binários
    const fontSize = 30;
    const columns = Math.floor(window.innerWidth / fontSize); // Calculando a quantidade de colunas
    const rows = Math.floor(window.innerHeight / fontSize);   // Calculando a quantidade de linhas

    // Função para criar o efeito de queda
    function createMatrixEffect() {
      matrixElement.innerHTML = '';  // Limpa o conteúdo da div a cada ciclo

      for (let i = 0; i < columns; i++) {
        // Para cada coluna, geramos vários números caindo
        for (let j = 0; j < rows; j++) {
          const char = letters[Math.floor(Math.random() * letters.length)]; // Gera números binários aleatórios
          const span = document.createElement('span');
          span.textContent = char;
          span.style.left = `${i * fontSize}px`;  // Posiciona em cada coluna
          span.style.top = `${j * fontSize}px`;  // Posiciona cada número verticalmente
          span.style.animationDuration = `${Math.random() * 5 + 5}s`; // Tempo aleatório de animação
          span.style.animationDelay = `${Math.random() * 5}s`; // Delay aleatório
          matrixElement.appendChild(span);
        }
      }
    }

    // Chama a função para criar o efeito continuamente
    setInterval(createMatrixEffect, 300);
