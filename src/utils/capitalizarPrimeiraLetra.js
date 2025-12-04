export function capitalizarPrimeiraLetra(texto) {
  if (!texto || typeof texto !== "string") return "";

  return texto
    .trim()
    .toLowerCase()
    .replace(/(?:^|\s)([a-záéíóúâêôãõç])/g, (match, letra) =>
      match[0] === " " ? " " + letra.toUpperCase() : letra.toUpperCase()
    );
}
