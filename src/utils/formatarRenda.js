export function formatarRenda(valor) {
  let stringValor = String(valor).trim();

  // Remove zeros à frente
  stringValor = stringValor.replace(/^0+(?=\d)/, "");

  // Separa inteiros e decimais
  const partes = stringValor.split(",");
  let inteiros = partes[0];
  const decimais = partes[1] || "";

  // Adiciona ponto a cada 3 dígitos da esquerda para direita
  inteiros = inteiros.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Retorna o valor formatado
  return decimais ? `${inteiros},${decimais}` : inteiros;
}
