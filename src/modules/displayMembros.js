import { capitalizarPrimeiraLetra } from "../utils/capitalizarPrimeiraLetra.js";
import { formatarRenda } from "../utils/formatarRenda.js";
import { acessarMembros } from "../utils/acessarMembros.js";
import { filtraMembro } from "../utils/filtraMembro.js";

const listaMembros = document.getElementById("lista-membros-lista");
const btnFiltrar = document.getElementById("btn-aplicar-filtros");
const filtroStatus = document.getElementById("filtro-status");
const filtroPlano = document.getElementById("filtro-plano");
const filtroID = document.getElementById("busca-membro");
const membros = acessarMembros();

function criarCartaMembro(membro) {
  const nome = capitalizarPrimeiraLetra(membro["nome"]);
  const email = membro["email"];
  const rendaMedia = formatarRenda(membro["rendaMedia"]);
  const plano = capitalizarPrimeiraLetra(membro["plano"]);
  const status = capitalizarPrimeiraLetra(membro["status"]);

  const container = document.createElement("div");
  container.className = "carta";

  container.innerHTML = `
  <div class="cliente-header">
    <h3 id="cliente-nome">${nome}</h3>
    <span class="cliente-status" id="cliente-status">${status}</span>
  </div>
  
  <div class="cliente-info">
    <div>
      <span class="label">Email:</span>
      <span id="cliente-email">${email}</span>
    </div>
    
    <div>
      <span class="label">Renda Média:</span>
      <span id="cliente-renda">R$ ${rendaMedia}</span>
    </div>
    
    <div>
      <span class="label">Plano:</span>
      <span id="cliente-plano">${plano}</span>
    </div>
  </div>
  
  <div class="btn-grupo">
    <button id="btn-editar">Editar</button>
    <button id="btn-deletar">Deletar</button>
  </div>
    `;
  //Alterar o btn-editar e btn-deletar depois

  return container;
}

const displayMembros = function () {
  listaMembros.innerHTML = "";

  membros.forEach((membro) => {
    if (
      //Corrigir problemas do plano "Básico", remover o acento para fazer a validação
      filtraMembro(
        membro,
        filtroStatus.value.toLowerCase(),
        filtroPlano.value.toLowerCase(),
        filtroID.value
      )
    ) {
      listaMembros.appendChild(criarCartaMembro(membro));
    }
  });
};

if (listaMembros) {
  displayMembros();

  btnFiltrar.addEventListener("click", displayMembros);
}
