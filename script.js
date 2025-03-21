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
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript carregado corretamente");


const roles = ["Desenvolvedora", "Cientista de Dados", "Especialista em IA"];
let currentRole = 0;
let charIndex = 0;
const typingSpeed = 150; // Velocidade da digitação
const deletingSpeed = 100; // Velocidade de apagar
const delayBetweenRoles = 2000; // Intervalo entre os cargos
const typingEffectElement = document.getElementById("typing-effect");

function typeRole() {
    if (charIndex < roles[currentRole].length) {
        typingEffectElement.textContent += roles[currentRole].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, typingSpeed);
    } else {
        setTimeout(deleteRole, delayBetweenRoles);
    }
}

function deleteRole() {
    if (charIndex > 0) {
        typingEffectElement.textContent = roles[currentRole].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteRole, deletingSpeed);
    } else {
        currentRole = (currentRole + 1) % roles.length; // Avança para o próximo cargo
        setTimeout(typeRole, typingSpeed);
    }
}

typeRole(); // Inicia o efeito


