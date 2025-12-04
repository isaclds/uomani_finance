import { verificaPagamento } from "../utils/verificaPagamento.js";

const btn = document.getElementById("btn-adicionar-membro");

const excluirPagamento = function () {
  const idPagamento = document.getElementById("exclui-pagamento").value;

  const pagamento = verificaPagamento(idPagamento);
  if (pagamento) {
    pagamento.excluido = true;
    localStorage.setItem(idPagamento, JSON.stringify(pagamento));
    //Dentro do relatório para verificar se o relatório foi excluido
    alert("Pagamento excluído com sucesso!");
  } else alert("Esse pagamento não está presente no nosso sistema!");
};

if (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    excluirPagamento();
  });
}
