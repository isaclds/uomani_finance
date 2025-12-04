export * from "./modules/cadastro.js";
export * from "./modules/login.js";
export * from "./modules/displayMembros.js";
export * from "./modules/atualizaDOMClient.js";
export * from "./modules/editarMembro.js";

// Função para inicializar tudo quando a página carregar
const initApp = function () {
  const anoElement = document.getElementById("ano");
  if (anoElement) {
    anoElement.textContent = new Date().getFullYear();
  }
};
