import {acessarMembros} from "../utils/acessarMembros.js"
import { capitalizarPrimeiraLetra } from "../utils/capitalizarPrimeiraLetra.js";
import {acessarPagamentos} from "../utils/acessarPagamentos.js"

const container = document.getElementById("relatorio-container")

const criarRelatorio = function(classificacao, values) {
  container.innerHTML = ''; // limpa
  const canvas = document.createElement('canvas');
  canvas.width = container.clientWidth || 700
  canvas.height = container.clientHeight || 400
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  const padding = 40;
  const larguraTabela = canvas.width - padding * 2;
  const alturaBarra = canvas.height - padding * 2;
  const maxVal = Math.max(...values);
  const larguraBarra = larguraTabela / values.length * 0.2;
  const gap = (larguraTabela / values.length) * 0.3;

  // desenha eixo Y (simples)
  ctx.strokeStyle = '#e6eef8';
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, padding + alturaBarra);
  ctx.lineTo(padding + larguraTabela, padding + alturaBarra);
  ctx.stroke();

  // desenha barras
  values.forEach((v, i) => {
    const x = padding + i * (larguraBarra + gap) + gap/2;
    const barHeight = (v / maxVal) * alturaBarra;
    const y = padding + alturaBarra - barHeight;
    ctx.fillStyle = '#4a90e2';
    ctx.fillRect(x, y, larguraBarra, barHeight);

    // label abaixo
    ctx.fillStyle = '#e6eef8';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(capitalizarPrimeiraLetra(classificacao[i]), x + larguraBarra/2, padding + alturaBarra + 16);

    // valor acima
    ctx.fillText(v, x + larguraBarra/2, y - 6);
  });
}

// conta membros por cada classificação (na ordem de classificacaoArray)
const quantidadesMembrosPorClassificacao = function(classificacaoArray){
    const membros = acessarMembros() || [];
    const contagem = classificacaoArray.map(() => 0);

    membros.forEach(membro => {
        const status = membro.status
        const posicao = classificacaoArray.findIndex(c => c === status);
        if (posicao !== -1) contagem[posicao]++;
    });

    return contagem;
}

const pagamentosPorMes = function(meses){
    const pagamentos = acessarPagamentos() || []
    const contagem = meses.map(() => 0)

    const buscarIndexMes = (bruto) => {
    const str = String(bruto).trim()

    const data = new Date(str)
    return data.getMonth() // 0..11
    }

    pagamentos.forEach(pagamento => {
    const bruto = pagamento.data;
    const index = buscarIndexMes(bruto)
    if (index !== -1 && index < contagem.length) contagem[index]++
    })

    return contagem
}

const gerarRelatorioMembros = function(){
    const status = ["ativo", "inativo", "pendente"];
    const valores = quantidadesMembrosPorClassificacao(status);
    criarRelatorio(status, valores);
}

const gerarRelatorioPagamentos = function(){
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    const valores = pagamentosPorMes(meses)
    criarRelatorio(meses, valores)
}

if (container){
    // procura o <select> dentro do wrapper ou um elemento que contenha value
    const selectRelatorio = document.querySelector('#select-relatorio select') || document.getElementById("select-relatorio")
    const btnGerarRelatorio = document.getElementById("btn-gerar-relatorio")

    const handleGerar = () => {
      const tipo = selectRelatorio?.value ?? 'membros'
      if (tipo === 'pagamentos') {
        gerarRelatorioPagamentos()
      } else {
        gerarRelatorioMembros()
      }
    }

    if (btnGerarRelatorio) {
      btnGerarRelatorio.addEventListener('click', handleGerar)
    }
}