import { gerarIdComPrefixo } from "../utils/gerarID.js";

("use strict");
const formulario = document.getElementById("cadastro-form");
const listaMembros = document.getElementById("lista-membros");
let identificacao = false;

const cadastrar = function () {
  const id = identificacao ? identificacao : gerarIdComPrefixo();
  identificacao = false;

  const dadosCliente = {
    id: id,
    nome: formulario["cadastro-nome"].value,
    email: formulario["cadastro-email"].value.toLowerCase(),
    senha: formulario["cadastro-senha"].value,
    rendaMedia: formulario["cadastro-renda"].value,
    plano: formulario["cadastro-plano"].value,
    //Verificar se o campo estado existe, se não existir, definir como ativo
    status: formulario["cadastro-status"]
      ? formulario["cadastro-status"].value
      : "ativo",
    dataNascimento: formulario["cadastro-data-nascimento"].value,
  };

  try {
    localStorage.setItem(id, JSON.stringify(dadosCliente));
    alert("Cadastro realizado com sucesso!");
    formulario.reset();
    document.getElementById("cadastro").close();
    if (!formulario["cadastro-status"]) {
      window.location.href = "/pages/client.html";
    }
    console.log(formulario);
  } catch (error) {
    alert("Cadastro não foi realizado, estamos trabalhando para realiza-lo!");
    console.error("Erro ao cadastrar cliente:", error);
  }
};

if (formulario) {
  //Editar
  listaMembros.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-editar")) {
      identificacao = event.target.dataset.id;

      const dialogCadastro = document.getElementById("cadastro");
      dialogCadastro.showModal();
    }
  });
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    cadastrar();
  });
}
