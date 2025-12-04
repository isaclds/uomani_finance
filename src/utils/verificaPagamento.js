export function verificaPagamento(pagamento) {
  if (pagamento && !!localStorage.getItem(pagamento)) {
    const verificaExcluido = JSON.parse(localStorage.getItem(pagamento));
    if (!verificaExcluido.excluido) return verificaExcluido;
  } else return false;
}
