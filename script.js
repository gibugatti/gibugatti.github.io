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
