import { acessarMembros } from "../utils/acessarMembros.js";
import { formatarRenda } from "../utils/formatarRenda.js";

const totalMembros = document.getElementById("total-membros");
const totalAtivos = document.getElementById("total-ativos");
const receitaMensal = document.getElementById("total-receita-mensal");
const mediaReceita = document.getElementById("media-renda");

const atualizarMembros = function (membros) {
  let contadorMembros = 0;
  for (const membro of membros) {
    contadorMembros++;
  }
  totalMembros.textContent = contadorMembros;
};

const membrosAtivos = function (membros) {
  let contadorAtivos = 0;
  for (const membro of membros) {
    if (membro["status"] === "ativo") {
      contadorAtivos++;
    }
  }
  totalAtivos.textContent = contadorAtivos;
};

const receitaMensalTotal = function (membros) {
  let receitaTotal = 0;
  for (const membro of membros) {
    receitaTotal += Number(membro["rendaMedia"]);
  }
  receitaMensal.textContent = "R$ " + formatarRenda(receitaTotal.toFixed(2));
};

const receitaMediaMensal = function (membros) {
  let receitaMediaMensal = 0;
  for (const membro of membros) {
    receitaMediaMensal += Number(membro["rendaMedia"]);
  }
  receitaMediaMensal = (receitaMediaMensal / membros.length).toFixed(2);
  mediaReceita.textContent = "R$ " + formatarRenda(receitaMediaMensal);
};

if (totalMembros && totalAtivos && receitaMensal && mediaReceita) {
  const membros = acessarMembros();

  //Atualizar membros
  atualizarMembros(membros);
  membrosAtivos(membros);
  receitaMensalTotal(membros);
  receitaMediaMensal(membros);
}
