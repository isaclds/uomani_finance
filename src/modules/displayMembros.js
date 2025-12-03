import { capitalizarPrimeiraLetra } from "./utils/capitalizarPrimeiraLetra.js";
import { formatarRenda } from "./utils/formatarRenda.js";
const listaMembros = document.getElementById("lista-membros-lista");

function criarCartaMembro(membro) {
  const nome = capitalizarPrimeiraLetra(membro["nome"]);
  const email = membro["email"];
  const rendaMedia = formatarRenda(membro["rendaMedia"]);
  const plano = capitalizarPrimeiraLetra(membro["plano"]);
  const status = capitalizarPrimeiraLetra(membro["status"]);

  const container = document.createElement("div");
  container.className = "carta";

  container.innerHTML = `
  <div class="cliente-card">
    <div class="cliente-header">
    <h3 id="cliente-nome">${nome}</h3>
    <span class="cliente-status" id="cliente-status">${status}</span>
    </div>
    
    <div class="cliente-info">
      <div class="info-item">
        <span class="label">Email:</span>
        <span id="cliente-email">${email}</span>
      </div>
      
      <div class="info-item">
        <span class="label">Renda Média:</span>
        <span id="cliente-renda">R$ ${rendaMedia}</span>
      </div>
      
      <div class="info-item">
        <span class="label">Plano:</span>
        <span id="cliente-plano">${plano}</span>
      </div>
    </div>
    
    <div class="cliente-actions">
      <button class="btn-editar" onclick="editarCliente()">Editar</button>
      <button class="btn-deletar" onclick="deletarCliente()">Deletar</button>
    </div>
  </div>
    `;

  return container;
}

if (listaMembros) {
  listaMembros.innerHTML = "";
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

  membros.forEach((membro) => {
    listaMembros.appendChild(criarCartaMembro(membro));
  });
}
