import { gerarIdComPrefixo } from "../utils/gerarID.js";
import { capitalizarPrimeiraLetra } from "../utils/capitalizarPrimeiraLetra.js";

("use strict");
const formulario = document.getElementById("cadastro-form");
const listaMembros = document.getElementById("lista-membros");
let identificacao = false;

const cadastrar = function () {
  const id = identificacao ? identificacao : gerarIdComPrefixo();
  identificacao = false;

  const nome = capitalizarPrimeiraLetra(
    formulario["cadastro-nome"].value.toLowerCase()
  );
  const email = formulario["cadastro-email"].value.toLowerCase();
  const senha = formulario["cadastro-senha"].value;
  const rendaMedia = formulario["cadastro-renda"].value;
  const plano = formulario["cadastro-plano"].value;
  //Verificar se o campo estado existe, se não existir, definir como ativo
  const status = formulario["cadastro-status"]
    ? formulario["cadastro-status"].value
    : "ativo";
  const dataNascimento = formulario["cadastro-data-nascimento"].value;
  console.log(dataNascimento);

  const dadosCliente = {
    id: id,
    nome: nome,
    email: email,
    senha: senha,
    rendaMedia: rendaMedia,
    plano: plano,
    status: status,
    dataNascimento: dataNascimento,
  };

  try {
    localStorage.setItem(id, JSON.stringify(dadosCliente));
    alert("Cadastro realizado com sucesso!");
    formulario.reset();
    document.getElementById("cadastro").close();
    if (!formulario["cadastro-status"]) {
      window.location.href = "/pages/client.html";
    } else {
      window.location.reload();
    }
    console.log(formulario);
  } catch (error) {
    alert("Cadastro não foi realizado, estamos trabalhando para realiza-lo!");
    console.error("Erro ao cadastrar cliente:", error);
  }
};

//Editar
if (listaMembros) {
  listaMembros.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.classList.contains("btn-editar")) {
      identificacao = event.target.dataset.id;

      const dialogCadastro = document.getElementById("cadastro");
      dialogCadastro.showModal();
    }
  });
}

if (formulario) {
  const campoData = document.getElementById("cadastro-data-nascimento");
  const dataMinima = new Date().toISOString().split("T")[0];

  campoData.setAttribute("max", dataMinima);

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    cadastrar();
  });
}
