export function acessarMembros() {
  const todosElementos = Object.entries(localStorage);

  // Filtra apenas as chaves que começam com "membro_"
  const todosMembros = todosElementos.filter(([chave]) =>
    chave.startsWith("membro_")
  );

  const membros = todosMembros.map(([chave, valor]) => {
    try {
      const membro = JSON.parse(valor);
      return membro;
    } catch (error) {
      console.error(chave, error);
      return null;
    }
  });

  return membros.filter((membro) => membro !== null);
}
