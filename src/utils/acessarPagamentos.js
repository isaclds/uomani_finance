export function acessarPagamentos() {
  const todosElementos = Object.entries(localStorage);

  // Filtra apenas as chaves que começam com "pagamento_"
  const todosPagamentos = todosElementos.filter(([chave]) =>
    chave.startsWith("pagamento_")
  );

  const pagamentos = todosPagamentos.map(([chave, valor]) => {
    try {
      const pagamento = JSON.parse(valor);
      return pagamento;
    } catch (error) {
      console.error(chave, error);
      return null;
    }
  });

  return pagamentos.filter((pagamento) => pagamento !== null);
}
