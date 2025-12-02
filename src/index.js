import { configurarEventosCadastro } from "./modules/cadastro.js";

// Função para inicializar tudo quando a página carregar
const initApp = function () {
  const anoElement = document.getElementById("ano");
  if (anoElement) {
    anoElement.textContent = new Date().getFullYear();
  }
  configurarEventosCadastro();
};

// Aguarda o DOM carregar completamente
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
