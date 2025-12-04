export function gerarIdPagamento() {
  const prefixo = "pagamento";
  const timestamp = Date.now(); // Timestamp atual
  const random = Math.floor(Math.random() * 10000); // Número aleatório
  return `${prefixo}_${timestamp}_${random}`;
}
