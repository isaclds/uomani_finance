import { gerarIdPagamento } from "../utils/gerarIdPagamento.js";

const formulario = document.getElementById("gerar-pagamento");

const validarMembro = function (idMembro) {
  return !!localStorage.getItem(idMembro);
};

const exibirErro = function (mensagem) {
  alert(` Erro: ${mensagem}`);
};

const cadastrarPagamento = function () {
  const valor = formulario["valor-pagamento"].value;
  const membroId = formulario["membro-associado"].value;
  const descricao = formulario["descricao-pagamento"].value;
  const data = formulario["data-pagamento"].value;

  if (!validarMembro(membroId)) {
    exibirErro("O membro selecionado não existe no sistema!");
    return;
  }

  const id = gerarIdPagamento();

  const dadosPagamento = {
    id: id,
    valor: valor,
    membro: membroId,
    descricao: descricao,
    data: data,
  };

  try {
    localStorage.setItem(id, JSON.stringify(dadosPagamento));
    alert("Cadastro realizado com sucesso!");
    formulario.reset();
  } catch (error) {
    exibirErro(
      "Cadastro não foi realizado, estamos trabalhando para realiza-lo!"
    );
    console.error("Erro ao cadastrar Pagamento:", error);
  }
};

if (formulario) {
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    cadastrarPagamento();
  });
}
