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
