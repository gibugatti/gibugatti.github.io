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

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel-items");
  const pages = document.querySelectorAll(".skill-page");
  const dots = document.querySelectorAll(".nav-dot");

  let currentIndex = 0;

  function changePage(index) {
    if (index < 0 || index >= pages.length) return;

    currentIndex = index;
    const offset = -currentIndex * 100; 
    carousel.style.transform = `translateX(${offset}%)`;

    // Atualiza a classe ativa nos botões de navegação
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }
 
  // Adiciona evento para cada bolinha
  dots.forEach((dot, index) => {
    dot.addEventListener("click", (event) => {
      event.preventDefault();
      changePage(index);
    });
  });

  // Define o primeiro como ativo
  changePage(0);
});

