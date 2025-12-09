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
  const id = membro["id"];

  const container = document.createElement("div");
  container.className = "carta";

  container.innerHTML = `
  <div>
    <h3>${nome}</h3>
    <span>${status}</span>
  </div>
  
  <div">
    <div>
      <span>Email:</span>
      <span>${email}</span>
    </div>
    
    <div>
      <span>Renda Média:</span>
      <span>R$ ${rendaMedia}</span>
    </div>
    
    <div>
      <span>Plano:</span>
      <span">${plano}</span>
    </div>
  </div>
  
  <div>
    <button class="btn-editar" data-id="${id}">Editar</button>
    <button class="btn-deletar" data-id="${id}">Deletar</button>
  </div>
    `;

  return container;
}

const displayMembros = function () {
  listaMembros.innerHTML = "";

  for (const membro of membros) {
    // Pula os membros deletados
    if (membro.deletado) {
      continue;
    }

    if (
      filtraMembro(
        membro,
        filtroStatus.value.toLowerCase(),
        filtroPlano.value.toLowerCase(),
        filtroID.value
      )
    ) {
      listaMembros.appendChild(criarCartaMembro(membro));
    }
  }
};

if (listaMembros) {
  //Deletar
  listaMembros.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-deletar")) {
      const identificacao = event.target.dataset.id;

      const membro = JSON.parse(localStorage.getItem(identificacao));
      membro.deletado = true;
      localStorage.setItem(identificacao, JSON.stringify(membro));
    }
  });

  displayMembros();

  btnFiltrar.addEventListener("click", displayMembros);
}
