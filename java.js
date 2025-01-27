// Interatividade para engajar o cliente

// Mensagem de boas-vindas personalizada
window.onload = function() {
    setTimeout(() => {
        alert("Bem-vindo ao Bem-estar e Psicologia! Estamos aqui para cuidar de você.");
    }, 1000);
};

// Função para destacar seções ao passar o mouse
const sections = document.querySelectorAll("section");
sections.forEach(section => {
    section.addEventListener("mouseover", () => {
        section.style.backgroundColor = "#fff";
        section.style.transition = "background-color 0.5s";
    });
    section.addEventListener("mouseout", () => {
        section.style.backgroundColor = "#fff";
    });
});

// Pop-up para incentivar contato ao sair da página
window.addEventListener("beforeunload", (event) => {
    event.returnValue = "Antes de sair, que tal marcar sua consulta? Estamos prontos para ajudar!";
});
