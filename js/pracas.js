// ================= REGIÕES / FREQUÊNCIA DE ENTREGA =================

const campoBuscaEntrega = document.getElementById("campoBuscaEntrega");
const filtroPracaEntrega = document.getElementById("filtroPracaEntrega");
const filtroDiaEntrega = document.getElementById("filtroDiaEntrega");
const botaoLimparFiltrosEntrega = document.getElementById("botaoLimparFiltrosEntrega");
const corpoTabelaEntrega = document.getElementById("corpoTabelaEntrega");
const cardsEntrega = document.getElementById("cardsEntrega");
const estadoVazioEntrega = document.getElementById("estadoVazioEntrega");
const contadorResultadosEntrega = document.getElementById("contadorResultadosEntrega");
const totalCidadesEntrega = document.getElementById("totalCidadesEntrega");
const totalPracasEntrega = document.getElementById("totalPracasEntrega");
const cidadesAltaFrequenciaEntrega = document.getElementById("cidadesAltaFrequenciaEntrega");
const resumoPracaEntrega = document.getElementById("resumoPracaEntrega");
const botoesDiasEntrega = document.querySelectorAll("[data-dia-entrega]");

function normalizarTextoEntrega(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function formatarDiasEntrega(dias) {
  if (!dias || !dias.length) {
    return "Consultar";
  }

  return dias.map((dia) => nomesDiasEntrega[dia] || dia).join(", ");
}

function obterClasseDiaEntrega(dia) {
  return `etiqueta-dia-entrega dia-entrega-${dia}`;
}

function renderizarOpcoesPracas() {
  if (!filtroPracaEntrega || !Array.isArray(dadosPracasEntrega)) {
    return;
  }

  const pracas = [...new Set(dadosPracasEntrega.map((item) => item.praca))].sort();

  filtroPracaEntrega.innerHTML = `
    <option value="">Todas as Unidades</option>
    ${pracas.map((praca) => `<option value="${praca}">${praca}</option>`).join("")}
  `;
}

function obterEntregasFiltradas() {
  const termoBusca = normalizarTextoEntrega(campoBuscaEntrega?.value || "");
  const praca = filtroPracaEntrega?.value || "";
  const dia = filtroDiaEntrega?.value || "";

  return dadosPracasEntrega.filter((item) => {
    const correspondeBusca =
      !termoBusca ||
      normalizarTextoEntrega(item.cidade).includes(termoBusca) ||
      normalizarTextoEntrega(item.praca).includes(termoBusca);

    const correspondePraca = !praca || item.praca === praca;
    const correspondeDia = !dia || item.dias.includes(dia);

    return correspondeBusca && correspondePraca && correspondeDia;
  });
}

function renderizarTabelaEntregas(itens) {
  if (!corpoTabelaEntrega) {
    return;
  }

  corpoTabelaEntrega.innerHTML = itens
    .map((item) => {
      const marcadoresDias = ["seg", "ter", "qua", "qui", "sex", "sab"]
        .map((dia) => {
          const ativo = item.dias.includes(dia);
          return `
            <span class="${ativo ? obterClasseDiaEntrega(dia) : "etiqueta-dia-entrega dia-entrega-inativo"}">
              ${nomesDiasEntrega[dia].slice(0, 3)}
            </span>
          `;
        })
        .join("");

      return `
        <tr>
          <td>
            <strong>${item.cidade}</strong>
          </td>
          <td>
            <span class="selo-praca-entrega">${item.praca}</span>
          </td>
          <td>
            <div class="linha-dias-entrega">${marcadoresDias}</div>
          </td>
        </tr>
      `;
    })
    .join("");
}

function renderizarCardsEntregas(itens) {
  if (!cardsEntrega) {
    return;
  }

  cardsEntrega.innerHTML = itens
    .map((item) => {
      const marcadoresDias = item.dias.length
        ? item.dias
            .map((dia) => `<span class="${obterClasseDiaEntrega(dia)}">${nomesDiasEntrega[dia]}</span>`)
            .join("")
        : `<span class="etiqueta-dia-entrega dia-entrega-inativo">Consultar</span>`;

      return `
        <article class="card-mobile-entrega">
          <div>
            <strong>${item.cidade}</strong>
            <span>${item.praca}</span>
          </div>
          <div class="linha-dias-entrega">${marcadoresDias}</div>
        </article>
      `;
    })
    .join("");
}

function renderizarResumoEntregas(itens) {
  if (contadorResultadosEntrega) {
    contadorResultadosEntrega.textContent = `${itens.length} resultado${itens.length === 1 ? "" : "s"}`;
  }

  if (totalCidadesEntrega) {
    totalCidadesEntrega.textContent = dadosPracasEntrega.length;
  }

  if (totalPracasEntrega) {
    totalPracasEntrega.textContent = new Set(dadosPracasEntrega.map((item) => item.praca)).size;
  }

  if (cidadesAltaFrequenciaEntrega) {
    const quantidadeAltaFrequencia = dadosPracasEntrega.filter((item) => item.dias.length >= 5).length;
    cidadesAltaFrequenciaEntrega.textContent = quantidadeAltaFrequencia;
  }

  if (resumoPracaEntrega) {
    const praca = filtroPracaEntrega?.value || "";
    const rotulo = praca ? `Região selecionada: ${praca}` : "Todas as Regiões atendidas";
    resumoPracaEntrega.textContent = rotulo;
  }
}

function sincronizarBotoesDiasEntrega() {
  const diaAtivo = filtroDiaEntrega?.value || "";

  botoesDiasEntrega.forEach((botao) => {
    botao.classList.toggle("active", botao.dataset.diaEntrega === diaAtivo);
  });
}

function renderizarEntregas() {
  if (!Array.isArray(dadosPracasEntrega)) {
    return;
  }

  const itens = obterEntregasFiltradas();

  renderizarTabelaEntregas(itens);
  renderizarCardsEntregas(itens);
  renderizarResumoEntregas(itens);
  sincronizarBotoesDiasEntrega();

  if (estadoVazioEntrega) {
    estadoVazioEntrega.classList.toggle("d-none", itens.length > 0);
  }
}

function limparFiltrosEntrega() {
  if (campoBuscaEntrega) {
    campoBuscaEntrega.value = "";
  }

  if (filtroPracaEntrega) {
    filtroPracaEntrega.value = "";
  }

  if (filtroDiaEntrega) {
    filtroDiaEntrega.value = "";
  }

  renderizarEntregas();
}

if (corpoTabelaEntrega && typeof dadosPracasEntrega !== "undefined") {
  renderizarOpcoesPracas();
  renderizarEntregas();

  campoBuscaEntrega?.addEventListener("input", renderizarEntregas);
  filtroPracaEntrega?.addEventListener("change", renderizarEntregas);
  filtroDiaEntrega?.addEventListener("change", renderizarEntregas);
  botaoLimparFiltrosEntrega?.addEventListener("click", limparFiltrosEntrega);

  botoesDiasEntrega.forEach((botao) => {
    botao.addEventListener("click", () => {
      const diaSelecionado = botao.dataset.diaEntrega;
      const diaAtual = filtroDiaEntrega?.value || "";

      if (filtroDiaEntrega) {
        filtroDiaEntrega.value = diaAtual === diaSelecionado ? "" : diaSelecionado;
      }

      renderizarEntregas();
    });
  });
}
