export function filtraMembro(
  membro,
  statusFiltro = "todos",
  planoFiltro = "todos",
  idFiltro = ""
) {
  const statusOk = statusFiltro === "todos" || membro.status === statusFiltro;
  const planoOk = planoFiltro === "todos" || membro.plano === planoFiltro;
  const idOk = !idFiltro || membro.id === idFiltro; // Se idFiltro estiver vazio, considera OK

  return statusOk && planoOk && idOk;
}
