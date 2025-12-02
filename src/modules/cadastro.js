const formulario = document.getElementById("cadastro-form");

function cadastrar() {
  const email = formulario["cadastro-email"].value.toLowerCase();
  console.log("entrou");

  const dadosCliente = {
    nome: formulario["cadastro-nome"].value,
    email: email,
    senha: formulario["cadastro-senha"].value,
    rendaMedia: parseFloat(formulario["cadastro-renda"].value),
    dataNascimento: formulario["cadastro-data-nascimento"].value,
  };

  try {
    localStorage.setItem(email, JSON.stringify(dadosCliente));
    console.log("Cadastro realizado com sucesso!");
    formulario.reset();
    // Redireciona para página de clientes após o cadastro
    window.location.href = "/pages/client.html";
  } catch (error) {
    console.error("Erro ao salvar no localStorage:", error);
  }
}

export function configurarEventosCadastro() {
  formulario.addEventListener("submit", cadastrar);
}
