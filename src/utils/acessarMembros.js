export function acessarMembros() {
  const todosMembros = { ...localStorage };

  if (Object.keys(todosMembros).length === 0) {
    listaMembros.innerHTML =
      '<div class="sem-membros">Nenhum membro cadastrado.</div>';
  }

  const membros = Object.entries(todosMembros).map(([chave, valor]) => {
    try {
      const membro = JSON.parse(valor);
      membro.chave = chave; // Guarda a chave para caso queira deletar o usuario
      return membro;
    } catch (error) {
      console.error(chave, error);
      return null;
    }
  });

  return membros.filter((membro) => membro !== null);
}
