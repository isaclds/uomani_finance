"use strict";

export * from "./modules/login.js";
export * from "./modules/buttons/entrar.js";
// export * from "./modules/cadastro.js";

// Função para inicializar tudo quando a página carregar
const initApp = function () {
  const anoElement = document.getElementById("ano");
  if (anoElement) {
    anoElement.textContent = new Date().getFullYear();
  }
};

// Aguarda o DOM carregar completamente
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
