import { capitalizarPrimeiraLetra } from "../utils/capitalizarPrimeiraLetra.js";
import { formatarRenda } from "../utils/formatarRenda.js";

const btn = document.getElementById("btn-buscar-membro");

const buscarPagamento = function () {
  const idPagamento = document.getElementById("busca-pagamento").value;
  const dialog = document.getElementById("mostraPagamento");
  dialog.classList.remove("hidden");

  if (idPagamento && !!localStorage.getItem(idPagamento)) {
    const pagamento = JSON.parse(localStorage.getItem(idPagamento));
    const membroAssociado = pagamento["membro"];
    const nomeMembro = JSON.parse(localStorage.getItem(membroAssociado))[
      "nome"
    ];

    // Limpa conteúdo anterior
    dialog.innerHTML = `
  <div>
    <h3>Valor</h3>
    <span>R$: ${formatarRenda(pagamento.valor)}</span>
  </div>
  
  <div>
    <div>
      <span>Membro Associado:</span>
      <span>${capitalizarPrimeiraLetra(nomeMembro)}</span>
    </div>
    
    <div>
      <span>Descrição:</span>
      <span>${pagamento.descricao}</span>
    </div>
    
    <div>
      <span>Data Pagamento:</span>
      <span>${pagamento.data}</span>
    </div>

    <div>
      <button class="cta">Fechar</button>
    </div>
  </div>`;

    dialog.showModal();

    // Adiciona listener ao botão fechar
    dialog.querySelector("button").addEventListener("click", () => {
      dialog.classList.add("hidden");
      dialog.close();
    });
  } else {
    alert("Esse pagamento não existe!");
  }
};

if (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    buscarPagamento();
  });
}
