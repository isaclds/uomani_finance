import {acessarMembros} from "/src/utils/acessarMembros.js"

const formulario = document.getElementById("login-form");

const login = function () {
  const email = formulario["login-email"].value;
  const senha = formulario["login-senha"].value;
  const clientes = acessarMembros()
  let clienteVerificado;

  try {
    for (const cliente of clientes) {
      if(cliente["email"] == email)  clienteVerificado = cliente
    }
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
