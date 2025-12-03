"use strict";
const formulario = document.getElementById("cadastro-form");

const cadastrar = function () {
  const email = formulario["cadastro-email"].value.toLowerCase();
  const dadosCliente = {
    nome: formulario["cadastro-nome"].value,
    email: email,
    senha: formulario["cadastro-senha"].value,
    rendaMedia: formulario["cadastro-renda"].value,
    plano: formulario["cadastro-plano"].value,
    //Verificar se o campo estado existe, se não existir, definir como ativo
    estado: formulario["cadastro-status"]
      ? formulario["cadastro-status"].value
      : "ativo",
    dataNascimento: formulario["cadastro-data-nascimento"].value,
  };

  try {
    localStorage.setItem(email, JSON.stringify(dadosCliente));
    alert("Cadastro realizado com sucesso!");
    formulario.reset();
  } catch (error) {
    alert("Cadastro não foi realizado, estamos trabalhando para realiza-lo!");
    console.error("Erro ao cadastrar cliente:", error);
  }
};

if (formulario) {
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    cadastrar();
  });
}
