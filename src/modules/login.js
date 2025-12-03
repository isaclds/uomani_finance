const formulario = document.getElementById("login-form");

const login = function () {
  const email = formulario["login-email"].value;
  const senha = formulario["login-senha"].value;
  const dadosCliente = JSON.parse(localStorage.getItem(email));
  try {
    if (dadosCliente["senha"] === senha) {
      window.location.href = "/pages/client.html";
    } else {
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
