import { acessarMembros } from "/src/utils/acessarMembros.js";

const formulario = document.getElementById("login-form");

const login = function () {
  const email = formulario["login-email"].value;
  const senha = formulario["login-senha"].value;
  const clientes = acessarMembros();
  let clienteVerificado;
  let contador = 0;

  try {
    for (const cliente of clientes) {
      //Verifica se email é igual
      if (cliente["email"] !== email) continue;
      clienteVerificado = cliente;
      break;
    }
    //Verifica se foi existe um email daquele
    if (clienteVerificado === undefined) {
      formulario.reset();
      alert("Usuário ou senha incorretos!");
      return;
    }
    //Verifica se a senha é igual
    if (clienteVerificado["senha"] === senha) {
      window.location.href = "/pages/client.html";
    } else {
      formulario.reset();
      alert("Usuário ou senha incorretos!");
    }
  } catch (error) {
    console.log(error);
  }
};

if (formulario) {
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    login();
  });
}
