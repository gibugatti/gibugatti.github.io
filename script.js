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

 let currentPage = 0;

document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelector('.carousel-items');
    const navDots = document.querySelectorAll('.nav-dot');

    let currentIndex = 0;

    function changePage(index) {
        const offset = -index * 100;
        carouselItems.style.transform = `translateX(${offset}%)`;
        navDots.forEach(dot => dot.classList.remove('active'));
        navDots[index].classList.add('active');
        currentIndex = index;
    }

    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => changePage(index));
    });

    // Inicializar o carrossel na primeira página
    changePage(currentIndex);
});
