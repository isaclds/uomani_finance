export function capitalizarPrimeiraLetra(texto) {
  if (!texto || typeof texto !== "string") return "";

  return texto
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (letra) => letra.toUpperCase());
}