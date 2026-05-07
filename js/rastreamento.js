// ================= RASTREAMENTO - PROTÓTIPO VISUAL =================

const formularioRastreamento = document.getElementById("formularioRastreamento");
const tipoConsultaRastreamento = document.getElementById("tipoConsultaRastreamento");
const campoCodigoRastreamento = document.getElementById("campoCodigoRastreamento");

const tituloStatusRastreamento = document.getElementById("tituloStatusRastreamento");
const descricaoStatusRastreamento = document.getElementById("descricaoStatusRastreamento");
const resumoNfeRastreamento = document.getElementById("resumoNfeRastreamento");
const resumoCteRastreamento = document.getElementById("resumoCteRastreamento");
const resumoDestinoRastreamento = document.getElementById("resumoDestinoRastreamento");
const resumoPrevisaoRastreamento = document.getElementById("resumoPrevisaoRastreamento");
const textoResultadoRastreamento = document.getElementById("textoResultadoRastreamento");
const seloStatusRastreamento = document.getElementById("seloStatusRastreamento");
const ultimaAtualizacaoRastreamento = document.getElementById("ultimaAtualizacaoRastreamento");
const unidadeAtualRastreamento = document.getElementById("unidadeAtualRastreamento");
const ocorrenciaRastreamento = document.getElementById("ocorrenciaRastreamento");
const comprovanteRastreamento = document.getElementById("comprovanteRastreamento");

function obterHorarioAtualRastreamento() {
  const agora = new Date();

  return agora.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function gerarCodigoDemonstrativoRastreamento(codigoInformado) {
  const codigoLimpo = String(codigoInformado || "").trim();

  if (!codigoLimpo) {
    return "000000";
  }

  return codigoLimpo.slice(0, 18);
}

function atualizarPrototipoRastreamento(evento) {
  evento.preventDefault();

  const tipoConsulta = tipoConsultaRastreamento?.value || "nfe";
  const codigoInformado = gerarCodigoDemonstrativoRastreamento(campoCodigoRastreamento?.value);

  const rotulosConsulta = {
    nfe: "NF-e",
    cte: "CT-e",
    codigo: "Código de rastreamento",
    documento: "CPF / CNPJ"
  };

  tituloStatusRastreamento.textContent = "Entrega em acompanhamento";
  descricaoStatusRastreamento.textContent =
    `Consulta demonstrativa por ${rotulosConsulta[tipoConsulta] || "código"}: ${codigoInformado}.`;

  resumoNfeRastreamento.textContent = tipoConsulta === "nfe" ? codigoInformado : "Demonstração";
  resumoCteRastreamento.textContent = tipoConsulta === "cte" ? codigoInformado : "Demonstração";
  resumoDestinoRastreamento.textContent = "Destino do cliente";
  resumoPrevisaoRastreamento.textContent = "Previsão via SSW";

  textoResultadoRastreamento.textContent =
    "Este é um exemplo visual. Na integração real, os dados serão retornados pelo backend conectado ao SSW.";

  seloStatusRastreamento.textContent = "Aguardando integração SSW";
  ultimaAtualizacaoRastreamento.textContent = obterHorarioAtualRastreamento();
  unidadeAtualRastreamento.textContent = "Unidade operacional Transfabris";
  ocorrenciaRastreamento.textContent = "Consulta visual gerada para apresentação do fluxo";
  comprovanteRastreamento.textContent = "Disponível após entrega";

  campoCodigoRastreamento?.blur();
}

if (formularioRastreamento) {
  formularioRastreamento.addEventListener("submit", atualizarPrototipoRastreamento);
}
