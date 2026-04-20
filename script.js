const agentes = [
  { nome: "Astra", classe: "controlador", foto: "img/astra.png", descricao: "Controladora cósmica focada em reposicionamento, utilidade global e domínio do mapa." },
  { nome: "Breach", classe: "iniciador", foto: "img/breach.png", descricao: "Iniciador explosivo que atordoa e empurra inimigos para abrir espaço ao time." },
  { nome: "Brimstone", classe: "controlador", foto: "img/brimstone.png", descricao: "Controlador sólido com smokes precisas, molotov e ultimate de grande impacto." },
  { nome: "Chamber", classe: "sentinela", foto: "img/chamber.png", descricao: "Sentinela ofensivo que mistura defesa, teleporte e tiros de alta precisão." },
  { nome: "Clove", classe: "controlador", foto: "img/clove.png", descricao: "Controladora agressiva que continua influenciando a rodada mesmo depois de cair." },
  { nome: "Cypher", classe: "sentinela", foto: "img/cypher.png", descricao: "Sentinela de informação que domina flancos e pune avanços inimigos." },
  { nome: "Deadlock", classe: "sentinela", foto: "img/deadlock.png", descricao: "Sentinela especializada em travar entradas e dificultar execuções inimigas." },
  { nome: "Fade", classe: "iniciador", foto: "img/fade.png", descricao: "Iniciadora de rastreamento que revela, persegue e pressiona alvos escondidos." },
  { nome: "Gekko", classe: "iniciador", foto: "img/gekko.png", descricao: "Iniciador versátil com criaturas que ajudam em plant, visão e avanço." },
  { nome: "Harbor", classe: "controlador", foto: "img/harbor.png", descricao: "Controlador aquático focado em paredes móveis e proteção durante entradas." },
  { nome: "Iso", classe: "duelista", foto: "img/iso.png", descricao: "Duelista de confronto direto que brilha em trocas secas e jogadas de confiança." },
  { nome: "Jett", classe: "duelista", foto: "img/jett.png", descricao: "Duelista extremamente móvel, ideal para entry frag, dash e jogadas rápidas." },
  { nome: "KAY/O", classe: "iniciador", foto: "img/kayo.png", descricao: "Iniciador robótico que suprime habilidades e facilita execuções agressivas." },
  { nome: "Killjoy", classe: "sentinela", foto: "img/killjoy.png", descricao: "Sentinela tecnológica com torreta e gadgets perfeitos para controle e retake." },
  { nome: "Neon", classe: "duelista", foto: "img/neon.png", descricao: "Duelista veloz que acelera o ritmo da partida e pressiona espaços com velocidade." },
  { nome: "Omen", classe: "controlador", foto: "img/omen.png", descricao: "Controlador furtivo que combina smokes, paranoia e reposicionamento inesperado." },
  { nome: "Phoenix", classe: "duelista", foto: "img/phoenix.png", descricao: "Duelista autossuficiente que mistura flashes, cura própria e entrada agressiva." },
  { nome: "Raze", classe: "duelista", foto: "img/raze.png", descricao: "Duelista explosiva que cria caos com granadas, satchels e pressão constante." },
  { nome: "Reyna", classe: "duelista", foto: "img/reyna.png", descricao: "Duelista de snowball que fica mais forte conforme vence duelos individuais." },
  { nome: "Sage", classe: "sentinela", foto: "img/sage.png", descricao: "Sentinela de suporte com cura, barreira e grande impacto em rounds longos." },
  { nome: "Skye", classe: "iniciador", foto: "img/skye.png", descricao: "Iniciadora híbrida com flashes, cura e ótima capacidade de informação." },
  { nome: "Sova", classe: "iniciador", foto: "img/sova.png", descricao: "Iniciador de reconhecimento que revela posições e pune alvos à distância." },
  { nome: "Tejo", classe: "iniciador", foto: "img/tejo.png", descricao: "Iniciador focado em criação de espaço e pressão coordenada para o time." },
  { nome: "Viper", classe: "controlador", foto: "img/viper.png", descricao: "Controladora de veneno que domina território com paredes, poças e ultimate forte." },
  { nome: "Vyse", classe: "sentinela", foto: "img/vyse.png", descricao: "Sentinela voltada para contenção, leitura de avanço e negação de espaço." },
  { nome: "Waylay", classe: "duelista", foto: "img/waylay.png", descricao: "Duelista voltada para pressão ofensiva e criação de oportunidades agressivas." },
  { nome: "Yoru", classe: "duelista", foto: "img/yoru.png", descricao: "Duelista enganador que usa teleporte, fake e confusão para quebrar a defesa." }
];

const MAPAS = {
  Ascent: {
    resumo: "Mapa equilibrado, com muito valor para info, controle de meio e sentinela segura.",
    picks: {
      controlador: ["Omen", "Clove", "Brimstone"],
      iniciador: ["Sova", "KAY/O", "Gekko"],
      sentinela: ["Killjoy", "Cypher", "Chamber"],
      duelista: ["Jett", "Reyna", "Waylay"]
    },
    comp: ["controlador", "iniciador", "sentinela", "duelista", "iniciador"]
  },
  Bind: {
    resumo: "Execuções fortes, entry explosiva e controle rápido dos bomb sites fazem diferença.",
    picks: {
      controlador: ["Brimstone", "Clove", "Viper"],
      iniciador: ["Gekko", "Skye", "Fade"],
      sentinela: ["Cypher", "Killjoy", "Deadlock"],
      duelista: ["Raze", "Neon", "Phoenix"]
    },
    comp: ["controlador", "iniciador", "duelista", "sentinela", "controlador"]
  },
  Haven: {
    resumo: "Mapa com 3 sites, então informação, rotação rápida e contenção pesam muito.",
    picks: {
      controlador: ["Omen", "Clove", "Brimstone"],
      iniciador: ["Sova", "Breach", "Skye"],
      sentinela: ["Cypher", "Killjoy", "Sage"],
      duelista: ["Jett", "Neon", "Reyna"]
    },
    comp: ["controlador", "iniciador", "sentinela", "duelista", "iniciador"]
  },
  Split: {
    resumo: "Controle de espaço, utilidade vertical e sentinela forte ajudam demais.",
    picks: {
      controlador: ["Omen", "Viper", "Brimstone"],
      iniciador: ["Breach", "Skye", "KAY/O"],
      sentinela: ["Killjoy", "Cypher", "Sage"],
      duelista: ["Raze", "Jett", "Neon"]
    },
    comp: ["controlador", "sentinela", "iniciador", "duelista", "controlador"]
  },
  Icebox: {
    resumo: "Mapa de execuções verticais, entradas rápidas e post-plant muito forte.",
    picks: {
      controlador: ["Viper", "Harbor", "Omen"],
      iniciador: ["Sova", "KAY/O", "Gekko"],
      sentinela: ["Killjoy", "Sage", "Chamber"],
      duelista: ["Jett", "Raze", "Yoru"]
    },
    comp: ["controlador", "sentinela", "iniciador", "duelista", "controlador"]
  },
  Breeze: {
    resumo: "Mapa aberto e longo, ideal para controle sólido, info e picks de longa distância.",
    picks: {
      controlador: ["Viper", "Harbor", "Clove"],
      iniciador: ["Sova", "KAY/O", "Skye"],
      sentinela: ["Cypher", "Chamber", "Killjoy"],
      duelista: ["Jett", "Yoru", "Reyna"]
    },
    comp: ["controlador", "controlador", "iniciador", "sentinela", "duelista"]
  },
  Fracture: {
    resumo: "Execuções coordenadas, entrada explosiva e pressão em múltiplas frentes são prioridade.",
    picks: {
      controlador: ["Brimstone", "Clove", "Omen"],
      iniciador: ["Breach", "Fade", "KAY/O"],
      sentinela: ["Cypher", "Killjoy", "Deadlock"],
      duelista: ["Neon", "Raze", "Jett"]
    },
    comp: ["iniciador", "duelista", "controlador", "sentinela", "iniciador"]
  },
  Pearl: {
    resumo: "Mapa longo, bom para controle consistente, domínio de meio e sentinela segura.",
    picks: {
      controlador: ["Viper", "Omen", "Harbor"],
      iniciador: ["Fade", "Skye", "KAY/O"],
      sentinela: ["Killjoy", "Cypher", "Chamber"],
      duelista: ["Jett", "Reyna", "Yoru"]
    },
    comp: ["controlador", "sentinela", "iniciador", "duelista", "controlador"]
  },
  Lotus: {
    resumo: "Mapa grande, com 3 sites e forte para utilidade variada e controle extra.",
    picks: {
      controlador: ["Omen", "Viper", "Clove"],
      iniciador: ["Fade", "Gekko", "Skye"],
      sentinela: ["Killjoy", "Cypher", "Vyse"],
      duelista: ["Raze", "Jett", "Neon"]
    },
    comp: ["controlador", "iniciador", "sentinela", "duelista", "controlador"]
  },
  Sunset: {
    resumo: "Mapa clássico de 3 lanes, onde meio, entrada coordenada e sentinela sólida brilham.",
    picks: {
      controlador: ["Omen", "Clove", "Brimstone"],
      iniciador: ["Breach", "Skye", "Gekko"],
      sentinela: ["Cypher", "Killjoy", "Vyse"],
      duelista: ["Raze", "Jett", "Yoru"]
    },
    comp: ["controlador", "sentinela", "iniciador", "duelista", "iniciador"]
  },
  Abyss: {
    resumo: "Mapa agressivo, com alto risco, verticalidade e punição forte para erro de espaço.",
    picks: {
      controlador: ["Omen", "Viper", "Harbor"],
      iniciador: ["Breach", "Fade", "Sova"],
      sentinela: ["Cypher", "Killjoy", "Vyse"],
      duelista: ["Jett", "Yoru", "Neon"]
    },
    comp: ["controlador", "iniciador", "duelista", "sentinela", "controlador"]
  },
  Corrode: {
    resumo: "Mapa de 3 lanes com defesa em camadas, valor de contenção e avanço bem coordenado.",
    picks: {
      controlador: ["Viper", "Omen", "Clove"],
      iniciador: ["KAY/O", "Breach", "Skye"],
      sentinela: ["Cypher", "Killjoy", "Vyse"],
      duelista: ["Raze", "Jett", "Iso"]
    },
    comp: ["controlador", "sentinela", "iniciador", "duelista", "controlador"]
  }
};

const STORAGE_KEYS = {
  historico: "valorant_historico",
  ranking: "valorant_ranking",
  agenteAtual: "valorant_agente_atual",
  somAtivo: "valorant_som_ativo",
  bloqueados: "valorant_bloqueados",
  favoritos: "valorant_favoritos",
  ultimoAgente: "valorant_ultimo_agente",
  mapaAtual: "valorant_mapa_atual",
  timeAtual: "valorant_time_atual",
  modoAtual: "valorant_modo_atual"
};

const estado = {
  sorteando: false,
  intervaloAnimacao: null,
  somAtivo: true,
  agentePadrao: agentes.find((agente) => agente.nome === "Jett"),
  agenteAtual: null,
  historico: [],
  ranking: {},
  bloqueados: [],
  favoritos: [],
  ultimoAgente: null,
  mapaAtual: "Ascent",
  timeAtual: [],
  modoAtual: "roleta",
  composicaoAtual: [],
  classeRecomendadaAtual: "duelista",
  scoreComposicaoAtual: 0,
  ultimoPickAnimado: null
};

estado.agenteAtual = estado.agentePadrao;

const el = {
  telaInicial: document.getElementById("telaInicial"),
  appPrincipal: document.getElementById("appPrincipal"),
  botaoSom: document.getElementById("botaoSom"),
  botaoModoRoleta: document.getElementById("botaoModoRoleta"),
  botaoModoComposicao: document.getElementById("botaoModoComposicao"),
  subtituloTopo: document.getElementById("subtituloTopo"),
  blocoRoleta: document.getElementById("blocoRoleta"),
  blocoComposicao: document.getElementById("blocoComposicao"),
  areaTime: document.getElementById("areaTime"),
  areaCardRoleta: document.getElementById("areaCardRoleta"),
  areaCardComposicao: document.getElementById("areaCardComposicao"),
  painelRoletaLateral: document.getElementById("painelRoletaLateral"),
  painelComposicaoLateral: document.getElementById("painelComposicaoLateral"),
  textoComposicaoCentro: document.getElementById("textoComposicaoCentro"),
  selectClasse: document.getElementById("classe"),
  selectMapa: document.getElementById("mapa"),
  botaoSortear: document.getElementById("botaoSortear"),
  botaoCopiar: document.getElementById("botaoCopiar"),
  cardResultado: document.getElementById("cardResultado"),
  imagemWrapper: document.getElementById("imagemWrapper"),
  imagemAgente: document.getElementById("imagemAgente"),
  statusSorteio: document.getElementById("statusSorteio"),
  nomeAgente: document.getElementById("nomeAgente"),
  classeAgente: document.getElementById("classeAgente"),
  descricaoAgente: document.getElementById("descricaoAgente"),
  resultadoTexto: document.getElementById("resultadoTexto"),
  historicoLista: document.getElementById("historicoLista"),
  rankingLista: document.getElementById("rankingLista"),
  particulasReveal: document.getElementById("particulasReveal"),
  listaBloqueio: document.getElementById("listaBloqueio"),
  listaTime: document.getElementById("listaTime"),
  contadorBloqueados: document.getElementById("contadorBloqueados"),
  contadorTime: document.getElementById("contadorTime"),
  funcaoRecomendada: document.getElementById("funcaoRecomendada"),
  resumoMapa: document.getElementById("resumoMapa"),
  agentesRecomendados: document.getElementById("agentesRecomendados"),
  observacaoComposicao: document.getElementById("observacaoComposicao"),
  composicaoMontada: document.getElementById("composicaoMontada"),
  sugestoesComposicao: document.getElementById("sugestoesComposicao"),
  composicaoSlots: document.getElementById("composicaoSlots"),
  badgeFuncaoComposicao: document.getElementById("badgeFuncaoComposicao"),
  balanceamentoGrid: document.getElementById("balanceamentoGrid"),
  resumoBalanceamento: document.getElementById("resumoBalanceamento"),
  cardComposicao: document.getElementById("cardComposicao"),
  particulasComposicao: document.getElementById("particulasComposicao"),
  scoreComposicaoValor: document.getElementById("scoreComposicaoValor"),
  scoreComposicaoTexto: document.getElementById("scoreComposicaoTexto"),
  scoreEstrelas: document.getElementById("scoreEstrelas"),
  scoreCriteriosGrid: document.getElementById("scoreCriteriosGrid"),
  scoreDetalhadoResumo: document.getElementById("scoreDetalhadoResumo")
};

const PESOS_CRITERIOS = {
  entrada: 20,
  controle: 20,
  info: 20,
  defesa: 20,
  sinergia: 20
};

function formatarClasse(classe) {
  const nomes = {
    duelista: "Duelista",
    controlador: "Controlador",
    iniciador: "Iniciador",
    sentinela: "Sentinela"
  };
  return nomes[classe] || "Desconhecida";
}

function obterClasseBorda(classe) {
  const bordas = {
    duelista: "borda-duelista",
    controlador: "borda-controlador",
    iniciador: "borda-iniciador",
    sentinela: "borda-sentinela"
  };
  return bordas[classe] || "borda-duelista";
}

function obterClasseBarra(classe) {
  const barras = {
    duelista: "barra-duelista",
    controlador: "barra-controlador",
    iniciador: "barra-iniciador",
    sentinela: "barra-sentinela"
  };
  return barras[classe] || "barra-duelista";
}

function obterCorParticula(classe) {
  const cores = {
    duelista: ["#ff4655", "#ff7a84", "#ffd2d6"],
    controlador: ["#7f5af0", "#b69cff", "#e0d7ff"],
    iniciador: ["#00b894", "#6ff0cb", "#d7fff4"],
    sentinela: ["#f1c40f", "#ffe27d", "#fff3c4"]
  };
  return cores[classe] || ["#ffffff", "#dcdcdc", "#f5f5f5"];
}

function obterEmojiRanking(posicao) {
  if (posicao === 0) return "🥇";
  if (posicao === 1) return "🥈";
  if (posicao === 2) return "🥉";
  return "•";
}

function escaparHtml(texto) {
  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function atualizarBotaoSom() {
  if (!el.botaoSom) return;
  el.botaoSom.textContent = estado.somAtivo ? "Som: Ligado" : "Som: Desligado";
}

function agenteEstaBloqueado(nomeAgente) {
  return estado.bloqueados.includes(nomeAgente);
}

function agenteEhFavorito(nomeAgente) {
  return estado.favoritos.includes(nomeAgente);
}

function agenteEstaNoTime(nomeAgente) {
  return estado.timeAtual.includes(nomeAgente);
}

function salvarDados() {
  localStorage.setItem(STORAGE_KEYS.historico, JSON.stringify(estado.historico));
  localStorage.setItem(STORAGE_KEYS.ranking, JSON.stringify(estado.ranking));
  localStorage.setItem(STORAGE_KEYS.agenteAtual, JSON.stringify(estado.agenteAtual));
  localStorage.setItem(STORAGE_KEYS.somAtivo, JSON.stringify(estado.somAtivo));
  localStorage.setItem(STORAGE_KEYS.bloqueados, JSON.stringify(estado.bloqueados));
  localStorage.setItem(STORAGE_KEYS.favoritos, JSON.stringify(estado.favoritos));
  localStorage.setItem(STORAGE_KEYS.ultimoAgente, estado.ultimoAgente || "");
  localStorage.setItem(STORAGE_KEYS.mapaAtual, estado.mapaAtual);
  localStorage.setItem(STORAGE_KEYS.timeAtual, JSON.stringify(estado.timeAtual));
  localStorage.setItem(STORAGE_KEYS.modoAtual, estado.modoAtual);
}

function carregarDados() {
  const historicoSalvo = localStorage.getItem(STORAGE_KEYS.historico);
  const rankingSalvo = localStorage.getItem(STORAGE_KEYS.ranking);
  const agenteAtualSalvo = localStorage.getItem(STORAGE_KEYS.agenteAtual);
  const somAtivoSalvo = localStorage.getItem(STORAGE_KEYS.somAtivo);
  const bloqueadosSalvos = localStorage.getItem(STORAGE_KEYS.bloqueados);
  const favoritosSalvos = localStorage.getItem(STORAGE_KEYS.favoritos);
  const ultimoAgenteSalvo = localStorage.getItem(STORAGE_KEYS.ultimoAgente);
  const mapaAtualSalvo = localStorage.getItem(STORAGE_KEYS.mapaAtual);
  const timeAtualSalvo = localStorage.getItem(STORAGE_KEYS.timeAtual);
  const modoAtualSalvo = localStorage.getItem(STORAGE_KEYS.modoAtual);

  if (historicoSalvo) estado.historico = JSON.parse(historicoSalvo);
  if (rankingSalvo) estado.ranking = JSON.parse(rankingSalvo);
  if (agenteAtualSalvo) estado.agenteAtual = JSON.parse(agenteAtualSalvo);
  if (somAtivoSalvo !== null) estado.somAtivo = JSON.parse(somAtivoSalvo);
  if (bloqueadosSalvos) estado.bloqueados = JSON.parse(bloqueadosSalvos);
  if (favoritosSalvos) estado.favoritos = JSON.parse(favoritosSalvos);
  if (ultimoAgenteSalvo) estado.ultimoAgente = ultimoAgenteSalvo;
  if (mapaAtualSalvo && MAPAS[mapaAtualSalvo]) estado.mapaAtual = mapaAtualSalvo;
  if (timeAtualSalvo) estado.timeAtual = JSON.parse(timeAtualSalvo);
  if (modoAtualSalvo === "roleta" || modoAtualSalvo === "composicao") estado.modoAtual = modoAtualSalvo;
}

function obterListaFiltrada() {
  const classeSelecionada = el.selectClasse.value;

  let lista = classeSelecionada === "todos"
    ? agentes
    : agentes.filter((agente) => agente.classe === classeSelecionada);

  lista = lista.filter((agente) => !agenteEstaBloqueado(agente.nome));

  if (estado.favoritos.length > 0) {
    const favoritosDisponiveis = lista.filter((agente) => agenteEhFavorito(agente.nome));
    if (favoritosDisponiveis.length > 0) {
      lista = favoritosDisponiveis;
    }
  }

  if (estado.ultimoAgente) {
    const semUltimo = lista.filter((agente) => agente.nome !== estado.ultimoAgente);
    if (semUltimo.length > 0) {
      lista = semUltimo;
    }
  }

  lista = lista.filter((agente) => !agenteEstaNoTime(agente.nome));

  return lista;
}

function sortearDaLista(lista) {
  const indice = Math.floor(Math.random() * lista.length);
  return lista[indice];
}

function criarAudioContextSeguro() {
  if (!estado.somAtivo) return null;
  return new (window.AudioContext || window.webkitAudioContext)();
}

function tocarSomSorteio() {
  const audioContext = criarAudioContextSeguro();
  if (!audioContext) return;

  const tempo = audioContext.currentTime;

  for (let i = 0; i < 10; i++) {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(320 + i * 28, tempo + i * 0.045);

    gain.gain.setValueAtTime(0.025, tempo + i * 0.045);
    gain.gain.exponentialRampToValueAtTime(0.0001, tempo + i * 0.045 + 0.08);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start(tempo + i * 0.045);
    oscillator.stop(tempo + i * 0.045 + 0.08);
  }
}

function tocarSomFinal() {
  const audioContext = criarAudioContextSeguro();
  if (!audioContext) return;

  const tempo = audioContext.currentTime;
  const notas = [520, 660, 880, 990];

  notas.forEach((nota, indice) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(nota, tempo + indice * 0.07);

    gain.gain.setValueAtTime(0.045, tempo + indice * 0.07);
    gain.gain.exponentialRampToValueAtTime(0.0001, tempo + indice * 0.07 + 0.16);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start(tempo + indice * 0.07);
    oscillator.stop(tempo + indice * 0.07 + 0.16);
  });
}

function renderizarAgente(agente, statusTexto, textoInferior) {
  el.imagemAgente.src = agente.foto;
  el.imagemAgente.alt = agente.nome;
  el.nomeAgente.textContent = agente.nome;
  el.classeAgente.textContent = formatarClasse(agente.classe);
  el.classeAgente.className = "classe-agente " + agente.classe;
  el.descricaoAgente.textContent = agente.descricao;
  el.statusSorteio.textContent = statusTexto;
  el.resultadoTexto.textContent = textoInferior;
  el.cardResultado.className = "card " + obterClasseBorda(agente.classe);

  estado.agenteAtual = agente;
}

function renderizarHistorico() {
  if (estado.historico.length === 0) {
    el.historicoLista.innerHTML = '<div class="item-info">Nenhum sorteio ainda.</div>';
    return;
  }

  const html = estado.historico.map((agente, indice) => `
    <div class="item-info">
      <img class="item-avatar" src="${agente.foto}" alt="${agente.nome}">
      <div class="item-info-texto">
        <strong>#${indice + 1} - ${agente.nome}</strong>
        <small>${formatarClasse(agente.classe)}</small>
      </div>
    </div>
  `).join("");

  el.historicoLista.innerHTML = html;
}

function renderizarRanking() {
  const rankingOrdenado = Object.entries(estado.ranking).sort((a, b) => b[1] - a[1]);

  if (rankingOrdenado.length === 0) {
    el.rankingLista.innerHTML = '<div class="item-info">O ranking aparecerá aqui.</div>';
    return;
  }

  const maiorValor = rankingOrdenado[0][1];

  const html = rankingOrdenado.slice(0, 5).map((item, indice) => {
    const agente = agentes.find((a) => a.nome === item[0]);
    const largura = Math.max((item[1] / maiorValor) * 100, 12);
    const classeBarra = agente ? obterClasseBarra(agente.classe) : "barra-duelista";

    return `
      <div class="item-ranking">
        <div class="item-ranking-topo">
          <div><span class="medalha">${obterEmojiRanking(indice)}</span><strong>${item[0]}</strong></div>
          <div>${item[1]}x</div>
        </div>
        <div class="ranking-barra">
          <div class="ranking-barra-fill ${classeBarra}" style="width: ${largura}%"></div>
        </div>
      </div>
    `;
  }).join("");

  el.rankingLista.innerHTML = html;
}

function renderizarGerenciarAgentes() {
  if (!el.listaBloqueio) return;

  const html = agentes.map((agente) => {
    const bloqueado = agenteEstaBloqueado(agente.nome);
    const favorito = agenteEhFavorito(agente.nome);
    const nomeEscapado = agente.nome.replace(/'/g, "\\'");

    return `
      <div class="bloqueio-item ${bloqueado ? "bloqueado" : ""} ${favorito ? "favorito" : ""}" data-agente-item="${escaparHtml(agente.nome)}">
        <img src="${agente.foto}" alt="${agente.nome}">
        <span>${agente.nome}</span>
        <div class="bloqueio-acoes">
          <button
            type="button"
            class="botao-acao botao-favorito ${favorito ? "ativo" : ""}"
            onclick="alternarFavorito('${nomeEscapado}')"
            title="Favoritar agente"
            aria-label="Favoritar agente ${agente.nome}"
          >
            ${favorito ? "★" : "☆"}
          </button>
          <button
            type="button"
            class="botao-acao botao-bloqueio ${bloqueado ? "ativo" : ""}"
            onclick="alternarBloqueio('${nomeEscapado}')"
            title="Bloquear agente"
            aria-label="Bloquear agente ${agente.nome}"
          >
            ${bloqueado ? "✔" : "✖"}
          </button>
        </div>
      </div>
    `;
  }).join("");

  el.listaBloqueio.innerHTML = html;

  if (el.contadorBloqueados) {
    el.contadorBloqueados.textContent = `${estado.bloqueados.length} bloqueados • ${estado.favoritos.length} favoritos`;
  }
}

function renderizarTime() {
  if (!el.listaTime) return;

  const html = agentes.map((agente) => {
    const noTime = agenteEstaNoTime(agente.nome);
    const bloqueado = agenteEstaBloqueado(agente.nome);
    const nomeEscapado = agente.nome.replace(/'/g, "\\'");

    return `
      <div class="bloqueio-item ${noTime ? "favorito" : ""} ${bloqueado ? "bloqueado" : ""}" data-time-item="${escaparHtml(agente.nome)}">
        <img src="${agente.foto}" alt="${agente.nome}">
        <span>${agente.nome}</span>
        <div class="bloqueio-acoes">
          <button
            type="button"
            class="botao-acao botao-time ${noTime ? "ativo" : ""}"
            onclick="alternarTime('${nomeEscapado}')"
            title="Adicionar ou remover do time"
            aria-label="Adicionar ou remover ${agente.nome} do time"
          >
            ${noTime ? "–" : "+"}
          </button>
        </div>
      </div>
    `;
  }).join("");

  el.listaTime.innerHTML = html;

  if (el.contadorTime) {
    el.contadorTime.textContent = `${estado.timeAtual.length} no time`;
  }
}

function montarSugestoesDisponiveis(nomes) {
  return nomes
    .map((nome) => agentes.find((agente) => agente.nome === nome))
    .filter(Boolean)
    .filter((agente) => !agenteEstaBloqueado(agente.nome))
    .filter((agente) => !agenteEstaNoTime(agente.nome))
    .sort((a, b) => {
      const aFav = agenteEhFavorito(a.nome) ? 1 : 0;
      const bFav = agenteEhFavorito(b.nome) ? 1 : 0;
      return bFav - aFav;
    });
}

function obterContagemClassesTime(nomes = estado.timeAtual) {
  const contagem = { duelista: 0, controlador: 0, iniciador: 0, sentinela: 0 };

  nomes.forEach((nome) => {
    const agente = agentes.find((item) => item.nome === nome);
    if (agente) contagem[agente.classe] += 1;
  });

  return contagem;
}

function obterNecessidadeMapa(mapaNome = estado.mapaAtual) {
  const mapa = MAPAS[mapaNome] || MAPAS.Ascent;
  const necessidade = { duelista: 0, controlador: 0, iniciador: 0, sentinela: 0 };

  mapa.comp.forEach((classe) => {
    necessidade[classe] += 1;
  });

  return necessidade;
}

function obterFuncaoFaltando() {
  const contagem = obterContagemClassesTime();
  const necessidade = obterNecessidadeMapa();

  for (const classe of ["controlador", "iniciador", "sentinela", "duelista"]) {
    if (contagem[classe] < necessidade[classe]) {
      return classe;
    }
  }

  const ordemPeso = ["controlador", "iniciador", "sentinela", "duelista"];
  ordemPeso.sort((a, b) => contagem[a] - contagem[b]);
  return ordemPeso[0];
}

function obterResumoBalanceamento(contagem) {
  const ordem = ["duelista", "controlador", "iniciador", "sentinela"];
  const ativos = ordem.filter((classe) => contagem[classe] > 0);

  if (ativos.length === 0) return "Sem funções definidas";
  if (ativos.length === 4) return "Time bem distribuído";
  if (ativos.length === 1) return "Comp muito concentrada";
  return "Comp em construção";
}

function limitarPontuacao(valor) {
  return Math.max(0, Math.min(20, Math.round(valor)));
}

function avaliarEntrada(contagem, quantidade) {
  let score = 0;

  if (contagem.duelista >= 1) score += 10;
  if (contagem.duelista >= 2) score += 4;
  if (contagem.iniciador >= 1) score += 5;
  if (contagem.controlador >= 1) score += 2;
  if (contagem.duelista === 0 && contagem.iniciador === 0) score -= 8;
  if (contagem.duelista >= 3) score -= 5;
  if (quantidade < 5) score -= (5 - quantidade) * 1.5;

  return limitarPontuacao(score);
}

function avaliarControle(contagem, necessidade, quantidade) {
  let score = 0;

  score += contagem.controlador * 8;
  if (necessidade.controlador >= 2 && contagem.controlador >= 2) score += 4;
  if (contagem.controlador === 0) score -= 12;
  if (contagem.controlador > necessidade.controlador) score -= (contagem.controlador - necessidade.controlador) * 3;
  if (contagem.sentinela >= 1) score += 2;
  if (quantidade < 5) score -= (5 - quantidade) * 1;

  return limitarPontuacao(score);
}

function avaliarInfo(contagem, quantidade) {
  let score = 0;

  score += contagem.iniciador * 8;
  if (contagem.iniciador >= 2) score += 3;
  if (contagem.iniciador === 0) score -= 12;
  if (contagem.sentinela >= 1) score += 3;
  if (contagem.controlador >= 1) score += 2;
  if (contagem.iniciador >= 3) score -= 4;
  if (quantidade < 5) score -= (5 - quantidade) * 1;

  return limitarPontuacao(score);
}

function avaliarDefesa(contagem, necessidade, quantidade) {
  let score = 0;

  score += contagem.sentinela * 9;
  if (contagem.sentinela === 0) score -= 12;
  if (contagem.controlador >= 1) score += 4;
  if (contagem.iniciador >= 1) score += 2;
  if (contagem.sentinela > necessidade.sentinela && necessidade.sentinela > 0) {
    score -= (contagem.sentinela - necessidade.sentinela) * 3;
  }
  if (quantidade < 5) score -= (5 - quantidade) * 1.5;

  return limitarPontuacao(score);
}

function avaliarSinergia(contagem, necessidade, quantidade) {
  let score = 0;
  const classes = ["duelista", "controlador", "iniciador", "sentinela"];
  const variedade = classes.filter((classe) => contagem[classe] > 0).length;

  classes.forEach((classe) => {
    const atual = contagem[classe];
    const ideal = necessidade[classe];

    if (ideal > 0) {
      if (atual === ideal) score += 5;
      else if (atual < ideal) score += Math.max(0, 5 - (ideal - atual) * 3);
      else score += Math.max(0, 5 - (atual - ideal) * 4);
    } else if (atual === 0) {
      score += 2;
    } else {
      score -= atual * 2;
    }
  });

  if (variedade >= 3) score += 3;
  if (variedade === 4) score += 2;
  if (quantidade === 5) score += 3;
  if (quantidade < 5) score -= (5 - quantidade) * 2;

  return limitarPontuacao(score);
}

function calcularDetalhesScore(slots) {
  const nomes = slots.map((slot) => slot.nome);
  const contagem = obterContagemClassesTime(nomes);
  const necessidade = obterNecessidadeMapa();
  const quantidade = slots.length;

  const detalhes = {
    entrada: avaliarEntrada(contagem, quantidade),
    controle: avaliarControle(contagem, necessidade, quantidade),
    info: avaliarInfo(contagem, quantidade),
    defesa: avaliarDefesa(contagem, necessidade, quantidade),
    sinergia: avaliarSinergia(contagem, necessidade, quantidade)
  };

  const total = Object.values(detalhes).reduce((acc, valor) => acc + valor, 0);

  return { total, detalhes, contagem, necessidade };
}

function calcularScoreComposicao(slots) {
  return calcularDetalhesScore(slots).total;
}

function obterDiagnosticoComposicao(slots) {
  if (!slots || slots.length === 0) {
    return "Monte a composição para receber uma avaliação real.";
  }

  const { contagem, necessidade } = calcularDetalhesScore(slots);
  const problemas = [];
  const pontosFortes = [];

  if (slots.length < 5) {
    problemas.push(`comp incompleta (${slots.length}/5)`);
  } else {
    pontosFortes.push("comp completa");
  }

  ["controlador", "iniciador", "sentinela", "duelista"].forEach((classe) => {
    const atual = contagem[classe];
    const ideal = necessidade[classe];

    if (ideal > 0) {
      if (atual === ideal) {
        pontosFortes.push(`${formatarClasse(classe)} no ponto certo`);
      } else if (atual < ideal) {
        problemas.push(`faltando ${formatarClasse(classe).toLowerCase()}`);
      } else if (atual > ideal) {
        problemas.push(`excesso de ${formatarClasse(classe).toLowerCase()}`);
      }
    } else if (atual > 0) {
      problemas.push(`${formatarClasse(classe).toLowerCase()} além do necessário`);
    }
  });

  if (pontosFortes.length >= 2 && problemas.length === 0) {
    return `Ótima leitura para ${estado.mapaAtual}: ${pontosFortes.slice(0, 3).join(", ")}.`;
  }

  if (pontosFortes.length > 0 && problemas.length > 0) {
    return `Pontos fortes: ${pontosFortes.slice(0, 2).join(", ")}. Ajustes: ${problemas.slice(0, 2).join(", ")}.`;
  }

  if (problemas.length > 0) {
    return `A composição precisa de ajustes: ${problemas.slice(0, 3).join(", ")}.`;
  }

  return "Composição funcional, mas ainda pode ser refinada.";
}

function obterEstrelasScore(score) {
  if (score >= 90) return "★★★★★";
  if (score >= 75) return "★★★★☆";
  if (score >= 60) return "★★★☆☆";
  if (score >= 40) return "★★☆☆☆";
  if (score >= 20) return "★☆☆☆☆";
  return "☆☆☆☆☆";
}

function obterResumoDetalhado(detalhes) {
  const entradas = Object.entries(detalhes).sort((a, b) => b[1] - a[1]);
  const melhor = entradas[0];
  const pior = entradas[entradas.length - 1];

  return `Melhor ponto: ${melhor[0]}. Ajuste principal: ${pior[0]}.`;
}

function obterClasseBarraCriterio(nome) {
  const mapa = {
    entrada: "barra-duelista",
    controle: "barra-controlador",
    info: "barra-iniciador",
    defesa: "barra-sentinela",
    sinergia: "barra-controlador"
  };

  return mapa[nome] || "barra-duelista";
}

function atualizarScoreDetalhado(slots) {
  if (!el.scoreCriteriosGrid || !el.scoreDetalhadoResumo) return;

  if (!slots || slots.length === 0) {
    el.scoreDetalhadoResumo.textContent = "Os critérios aparecem aqui conforme a composição.";
    el.scoreCriteriosGrid.innerHTML = `
      <div class="criterio-score">
        <div class="criterio-topo">
          <span>Entrada</span>
          <strong>0/20</strong>
        </div>
        <div class="criterio-track"><div class="criterio-fill barra-duelista" style="width: 0%"></div></div>
      </div>
    `;
    return;
  }

  const { detalhes } = calcularDetalhesScore(slots);
  const labels = {
    entrada: "Entrada",
    controle: "Controle",
    info: "Info",
    defesa: "Defesa",
    sinergia: "Sinergia"
  };

  el.scoreDetalhadoResumo.textContent = obterResumoDetalhado(detalhes);

  el.scoreCriteriosGrid.innerHTML = Object.entries(detalhes).map(([chave, valor]) => `
    <div class="criterio-score">
      <div class="criterio-topo">
        <span>${labels[chave]}</span>
        <strong>${valor}/20</strong>
      </div>
      <div class="criterio-track">
        <div class="criterio-fill ${obterClasseBarraCriterio(chave)}" style="width: ${(valor / 20) * 100}%"></div>
      </div>
    </div>
  `).join("");
}

function atualizarScoreComposicao(slots) {
  const score = calcularScoreComposicao(slots);
  estado.scoreComposicaoAtual = score;

  if (!el.scoreComposicaoValor || !el.scoreComposicaoTexto || !el.scoreEstrelas) return;

  el.scoreComposicaoValor.textContent = `${score}`;
  el.scoreEstrelas.textContent = slots.length === 0 ? "☆☆☆☆☆" : obterEstrelasScore(score);
  el.scoreComposicaoTexto.textContent = obterDiagnosticoComposicao(slots);
  atualizarScoreDetalhado(slots);
}

function renderizarBalanceamentoVisual(listaNomes) {
  if (!el.balanceamentoGrid || !el.resumoBalanceamento) return;

  const contagem = { duelista: 0, controlador: 0, iniciador: 0, sentinela: 0 };

  listaNomes.forEach((nome) => {
    const agente = agentes.find((item) => item.nome === nome);
    if (agente) contagem[agente.classe] += 1;
  });

  const ordem = ["duelista", "controlador", "iniciador", "sentinela"];

  el.balanceamentoGrid.innerHTML = ordem.map((classe) => `
    <div class="balance-item">
      <span>${formatarClasse(classe)}</span>
      <div class="balance-track">
        <div class="balance-fill ${obterClasseBarra(classe)}" style="width: ${Math.min(contagem[classe] * 25, 100)}%"></div>
      </div>
      <div class="balance-valor">${contagem[classe]}</div>
    </div>
  `).join("");

  el.resumoBalanceamento.textContent = obterResumoBalanceamento(contagem);
}

function obterNomeFuncaoSlot(slot) {
  if (slot.origem === "time") return "Escolhido pelo time";
  if (slot.origem === "sugestao") return "Sugestão do assistente";
  return "Pick da composição";
}

function renderizarSlotsComposicao(slots) {
  if (!el.composicaoSlots) return;

  if (!slots || slots.length === 0) {
    el.composicaoSlots.innerHTML = `
      <div class="slot-composicao vazio">
        <span class="slot-indice">01</span>
        <div class="slot-conteudo">
          <strong>Sem composição</strong>
          <small>Gere uma composição para preencher os slots.</small>
        </div>
      </div>
    `;
    renderizarBalanceamentoVisual([]);
    atualizarScoreComposicao([]);
    return;
  }

  const preenchidos = slots.slice(0, 5);
  const placeholders = Array.from({ length: Math.max(0, 5 - preenchidos.length) }, (_, indice) => ({
    vazio: true,
    indice: preenchidos.length + indice + 1
  }));

  const html = [...preenchidos, ...placeholders].map((slot, indice) => {
    if (slot.vazio) {
      return `
        <div class="slot-composicao vazio" style="animation-delay:${indice * 0.08}s">
          <span class="slot-indice">${String(slot.indice).padStart(2, "0")}</span>
          <div class="slot-conteudo">
            <strong>Slot livre</strong>
            <small>Aguardando composição</small>
          </div>
        </div>
      `;
    }

    const pickedClass = estado.ultimoPickAnimado === slot.nome ? "picked" : "";

    return `
      <div class="slot-composicao ${obterClasseBorda(slot.classe)} ${slot.origem === "time" ? "escolhido-time" : ""} ${pickedClass}" style="animation-delay:${indice * 0.08}s" data-slot-agente="${escaparHtml(slot.nome)}">
        <span class="slot-indice">${String(indice + 1).padStart(2, "0")}</span>
        <img class="slot-foto" src="${slot.foto}" alt="${escaparHtml(slot.nome)}">
        <div class="slot-conteudo">
          <span class="slot-tag ${slot.classe}">${formatarClasse(slot.classe)}</span>
          <strong>${escaparHtml(slot.nome)}</strong>
          <small>${escaparHtml(obterNomeFuncaoSlot(slot))}</small>
          ${slot.origem === "time" ? '<span class="slot-time-badge">Já está no time</span>' : ""}
        </div>
      </div>
    `;
  }).join("");

  el.composicaoSlots.innerHTML = html;
  renderizarBalanceamentoVisual(preenchidos.map((slot) => slot.nome));
  atualizarScoreComposicao(preenchidos);

  if (estado.ultimoPickAnimado) {
    setTimeout(() => {
      estado.ultimoPickAnimado = null;
    }, 350);
  }
}

function renderizarSugestoesComposicao(sugestoes) {
  if (!el.sugestoesComposicao) return;

  if (!sugestoes || sugestoes.length === 0) {
    el.sugestoesComposicao.innerHTML = `
      <div class="item-info competitivo-resumo">
        <div class="item-info-texto">
          <strong>Sem picks livres</strong>
          <small>Ajuste bloqueios, favoritos ou agentes já marcados no time.</small>
        </div>
      </div>
    `;
    return;
  }

  el.sugestoesComposicao.innerHTML = sugestoes.slice(0, 3).map((agente) => `
    <button
      type="button"
      class="mini-sugestao ${agente.classe}"
      data-sugestao="${escaparHtml(agente.nome)}"
      onclick="adicionarSugestaoAoTime('${agente.nome.replace(/'/g, "\\'")}', this)"
      aria-label="Adicionar ${agente.nome} ao time"
      title="Adicionar ${agente.nome} ao time"
    >
      <img src="${agente.foto}" alt="${agente.nome}">
      <span>${agente.nome}</span>
    </button>
  `).join("");
}

function tocarRevealComposicao() {
  if (!el.cardComposicao) return;

  el.cardComposicao.classList.remove("reveal");
  void el.cardComposicao.offsetWidth;
  el.cardComposicao.classList.add("reveal");

  if (el.particulasComposicao) {
    el.particulasComposicao.innerHTML = "";
    const cores = ["#7f5af0", "#b69cff", "#ff4655", "#00b894", "#f1c40f"];

    for (let i = 0; i < 12; i++) {
      const particula = document.createElement("span");
      const angulo = (Math.PI * 2 * i) / 12;
      const distancia = 42 + Math.random() * 46;

      particula.className = "particula";
      particula.style.left = "50%";
      particula.style.top = "34%";
      particula.style.background = cores[i % cores.length];
      particula.style.boxShadow = `0 0 12px ${cores[i % cores.length]}`;
      particula.style.setProperty("--x", `${Math.cos(angulo) * distancia}px`);
      particula.style.setProperty("--y", `${Math.sin(angulo) * distancia}px`);

      el.particulasComposicao.appendChild(particula);

      requestAnimationFrame(() => {
        particula.classList.add("animar");
      });
    }

    setTimeout(() => {
      if (el.particulasComposicao) el.particulasComposicao.innerHTML = "";
    }, 900);
  }
}

function animarFeedbackPick(nomeAgente, botaoSugestao = null) {
  if (botaoSugestao) {
    botaoSugestao.classList.add("pick-ok");
    setTimeout(() => botaoSugestao.classList.remove("pick-ok"), 420);
  }

  if (el.listaTime) {
    const itemTime = el.listaTime.querySelector(`[data-time-item="${CSS.escape(nomeAgente)}"]`);
    if (itemTime) {
      itemTime.classList.add("pick-feedback");
      setTimeout(() => itemTime.classList.remove("pick-feedback"), 420);
    }
  }
}

function obterSugestoesMapa(classeRecomendada) {
  const mapa = MAPAS[estado.mapaAtual] || MAPAS.Ascent;
  return montarSugestoesDisponiveis(mapa.picks[classeRecomendada] || []);
}

function atualizarAnaliseCompetitiva() {
  if (!el.funcaoRecomendada) return;

  const mapa = MAPAS[estado.mapaAtual] || MAPAS.Ascent;
  const classeRecomendada = obterFuncaoFaltando();
  const sugestoes = obterSugestoesMapa(classeRecomendada);
  const nomesSugestoes = sugestoes.slice(0, 3).map((agente) => agente.nome);

  estado.classeRecomendadaAtual = classeRecomendada;

  const timeTexto = estado.timeAtual.length > 0
    ? `Time atual: ${estado.timeAtual.join(", ")}.`
    : "Nenhum agente marcado no time ainda.";

  el.funcaoRecomendada.textContent = `Função recomendada: ${formatarClasse(classeRecomendada)}`;
  el.resumoMapa.textContent = `Mapa: ${estado.mapaAtual} • ${mapa.resumo}`;
  el.agentesRecomendados.textContent = nomesSugestoes.length > 0 ? nomesSugestoes.join(" • ") : "Sem opções livres no momento";
  el.observacaoComposicao.textContent = `${timeTexto} Prioridade atual: ${formatarClasse(classeRecomendada)}.`;

  if (el.badgeFuncaoComposicao) {
    el.badgeFuncaoComposicao.textContent = `Função recomendada: ${formatarClasse(classeRecomendada)}`;
    el.badgeFuncaoComposicao.className = `badge-funcao-composicao ${classeRecomendada}`;
  }

  renderizarSugestoesComposicao(sugestoes);

  if (el.textoComposicaoCentro && (!estado.composicaoAtual || estado.composicaoAtual.length === 0)) {
    el.textoComposicaoCentro.textContent = `Mapa atual: ${estado.mapaAtual}. Função sugerida: ${formatarClasse(classeRecomendada)}.`;
  }

  if (!estado.composicaoAtual || estado.composicaoAtual.length === 0) {
    renderizarSlotsComposicao([]);
  }
}

function montarComposicao(animar = true) {
  const mapa = MAPAS[estado.mapaAtual] || MAPAS.Ascent;
  const compFinal = [];
  const usados = new Set();

  estado.timeAtual.forEach((nome) => {
    const agente = agentes.find((item) => item.nome === nome);
    if (!agente || usados.has(agente.nome) || compFinal.length >= 5) return;

    compFinal.push({
      ...agente,
      origem: "time"
    });
    usados.add(agente.nome);
  });

  for (const classe of mapa.comp) {
    const sugestoes = montarSugestoesDisponiveis(mapa.picks[classe] || []);
    const pickValido = sugestoes.find((agente) => !usados.has(agente.nome));

    if (pickValido && compFinal.length < 5) {
      compFinal.push({
        ...pickValido,
        origem: "sugestao"
      });
      usados.add(pickValido.nome);
    }
  }

  estado.composicaoAtual = compFinal.slice(0, 5);

  el.composicaoMontada.textContent = estado.composicaoAtual.length > 0
    ? estado.composicaoAtual.map((agente) => agente.nome).join(" • ")
    : "Não foi possível montar uma composição com os filtros atuais.";

  if (el.textoComposicaoCentro) {
    el.textoComposicaoCentro.textContent = estado.composicaoAtual.length > 0
      ? `Base sugerida para ${estado.mapaAtual}: ${estado.composicaoAtual.map((agente) => agente.nome).join(" • ")}.`
      : "Não foi possível gerar uma composição com os filtros atuais.";
  }

  renderizarSlotsComposicao(estado.composicaoAtual);

  if (animar) {
    tocarRevealComposicao();
  }
}

function refazerComposicao() {
  if (estado.sorteando) return;
  montarComposicao(true);
}

function adicionarAoHistorico(agente) {
  estado.historico.unshift(agente);
  if (estado.historico.length > 5) estado.historico.pop();
  renderizarHistorico();
  salvarDados();
}

function atualizarRanking(agente) {
  if (!estado.ranking[agente.nome]) estado.ranking[agente.nome] = 0;
  estado.ranking[agente.nome]++;
  renderizarRanking();
  salvarDados();
}

function limparParticulas() {
  if (el.particulasReveal) {
    el.particulasReveal.innerHTML = "";
  }
}

function criarParticulasReveal(classe) {
  limparParticulas();

  const cores = obterCorParticula(classe);
  const quantidade = 16;

  for (let i = 0; i < quantidade; i++) {
    const particula = document.createElement("span");
    const angulo = (Math.PI * 2 * i) / quantidade;
    const distancia = 60 + Math.random() * 70;
    const x = Math.cos(angulo) * distancia;
    const y = Math.sin(angulo) * distancia;

    particula.className = "particula";
    particula.style.left = "50%";
    particula.style.top = "42%";
    particula.style.background = cores[i % cores.length];
    particula.style.boxShadow = `0 0 12px ${cores[i % cores.length]}`;
    particula.style.setProperty("--x", `${x}px`);
    particula.style.setProperty("--y", `${y}px`);

    el.particulasReveal.appendChild(particula);

    requestAnimationFrame(() => {
      particula.classList.add("animar");
    });
  }

  setTimeout(() => {
    limparParticulas();
  }, 1000);
}

function tocarRevealFinal() {
  el.cardResultado.classList.remove("reveal");
  el.imagemWrapper.classList.remove("reveal");
  el.nomeAgente.classList.remove("nome-reveal");
  el.nomeAgente.classList.remove("nome-escondido");

  void el.cardResultado.offsetWidth;

  el.cardResultado.classList.add("reveal");
  el.imagemWrapper.classList.add("reveal");
  el.nomeAgente.classList.add("nome-escondido");

  criarParticulasReveal(estado.agenteAtual.classe);

  setTimeout(() => {
    el.nomeAgente.classList.remove("nome-escondido");
    el.nomeAgente.classList.add("nome-reveal");
  }, 120);

  setTimeout(() => {
    el.cardResultado.classList.remove("reveal");
    el.imagemWrapper.classList.remove("reveal");
  }, 700);
}

function iniciarSorteio() {
  if (estado.sorteando) return;

  const lista = obterListaFiltrada();

  if (lista.length === 0) {
    el.statusSorteio.textContent = "Sem agentes disponíveis";
    el.resultadoTexto.textContent = "Desbloqueie pelo menos 1 agente da classe escolhida ou ajuste o time.";
    return;
  }

  estado.sorteando = true;
  el.botaoSortear.disabled = true;
  el.botaoSortear.textContent = "Sorteando...";
  el.imagemWrapper.classList.add("sorteando");
  el.statusSorteio.textContent = "Sorteando...";
  el.statusSorteio.classList.add("brilho");
  el.cardResultado.classList.add("sorteando");

  tocarSomSorteio();

  estado.intervaloAnimacao = setInterval(() => {
    const agenteTemporario = sortearDaLista(lista);
    renderizarAgente(
      agenteTemporario,
      "Sorteando...",
      "Procurando o melhor agente pra você..."
    );
  }, 120);

  setTimeout(() => {
    clearInterval(estado.intervaloAnimacao);

    const agenteFinal = sortearDaLista(lista);

    renderizarAgente(
      agenteFinal,
      "Agente definido",
      "Resultado final pronto. Você caiu com " + agenteFinal.nome + "."
    );

    estado.ultimoAgente = agenteFinal.nome;

    tocarRevealFinal();
    adicionarAoHistorico(agenteFinal);
    atualizarRanking(agenteFinal);
    salvarDados();

    el.imagemWrapper.classList.remove("sorteando");
    el.statusSorteio.classList.remove("brilho");
    el.cardResultado.classList.remove("sorteando");
    el.botaoSortear.disabled = false;
    el.botaoSortear.textContent = "Sortear novamente";
    estado.sorteando = false;

    tocarSomFinal();
  }, 2200);
}

function copiarResultado() {
  if (!estado.agenteAtual) return;

  const texto =
    "🎯 Agente sorteado: " +
    estado.agenteAtual.nome +
    "\n🔥 Classe: " +
    formatarClasse(estado.agenteAtual.classe) +
    "\n🧠 " +
    estado.agenteAtual.descricao;

  navigator.clipboard.writeText(texto)
    .then(() => {
      if (!el.botaoCopiar) return;

      el.botaoCopiar.textContent = "✔ Copiado!";
      el.botaoCopiar.style.background = "#00b894";

      setTimeout(() => {
        el.botaoCopiar.textContent = "Copiar resultado";
        el.botaoCopiar.style.background = "";
      }, 1500);
    })
    .catch(() => {
      if (!el.botaoCopiar) return;

      el.botaoCopiar.textContent = "Erro ao copiar";

      setTimeout(() => {
        el.botaoCopiar.textContent = "Copiar resultado";
      }, 1500);
    });
}

function alternarBloqueio(nomeAgente) {
  if (estado.sorteando) return;

  if (agenteEstaBloqueado(nomeAgente)) {
    estado.bloqueados = estado.bloqueados.filter((nome) => nome !== nomeAgente);
  } else {
    estado.bloqueados.push(nomeAgente);
    estado.timeAtual = estado.timeAtual.filter((nome) => nome !== nomeAgente);
  }

  renderizarGerenciarAgentes();
  renderizarTime();
  atualizarAnaliseCompetitiva();
  montarComposicao(false);
  salvarDados();
}

function alternarFavorito(nomeAgente) {
  if (estado.sorteando) return;

  if (agenteEhFavorito(nomeAgente)) {
    estado.favoritos = estado.favoritos.filter((nome) => nome !== nomeAgente);
  } else {
    estado.favoritos.push(nomeAgente);
  }

  renderizarGerenciarAgentes();
  atualizarAnaliseCompetitiva();
  montarComposicao(false);
  salvarDados();
}

function alternarTime(nomeAgente, opcoes = {}) {
  if (estado.sorteando) return false;
  if (agenteEstaBloqueado(nomeAgente)) return false;

  let alterou = false;

  if (agenteEstaNoTime(nomeAgente)) {
    estado.timeAtual = estado.timeAtual.filter((nome) => nome !== nomeAgente);
    alterou = true;
  } else if (estado.timeAtual.length < 4) {
    estado.timeAtual.push(nomeAgente);
    estado.ultimoPickAnimado = nomeAgente;
    alterou = true;
  }

  if (!alterou) return false;

  renderizarTime();
  atualizarAnaliseCompetitiva();
  montarComposicao(false);
  salvarDados();

  if (opcoes.animarPick) {
    animarFeedbackPick(nomeAgente, opcoes.botaoSugestao || null);
    tocarRevealComposicao();
  }

  return true;
}

function adicionarSugestaoAoTime(nomeAgente, botao) {
  const adicionou = alternarTime(nomeAgente, {
    animarPick: true,
    botaoSugestao: botao
  });

  if (!adicionou && botao) {
    botao.classList.add("desabilitado");
    setTimeout(() => botao.classList.remove("desabilitado"), 320);
  }
}

function limparBloqueios() {
  estado.bloqueados = [];
  renderizarGerenciarAgentes();
  renderizarTime();
  atualizarAnaliseCompetitiva();
  montarComposicao(false);
  salvarDados();
}

function limparFavoritos() {
  estado.favoritos = [];
  renderizarGerenciarAgentes();
  atualizarAnaliseCompetitiva();
  montarComposicao(false);
  salvarDados();
}

function limparTime() {
  estado.timeAtual = [];
  estado.ultimoPickAnimado = null;
  renderizarTime();
  atualizarAnaliseCompetitiva();
  montarComposicao(false);
  salvarDados();
}

function zerarRanking() {
  estado.ranking = {};
  renderizarRanking();
  salvarDados();
}

function zerarHistorico() {
  estado.historico = [];
  renderizarHistorico();
  salvarDados();
}

function limparTudo() {
  if (estado.sorteando) return;

  estado.agenteAtual = estado.agentePadrao;
  estado.historico = [];
  estado.ranking = {};
  estado.bloqueados = [];
  estado.favoritos = [];
  estado.timeAtual = [];
  estado.ultimoAgente = null;
  estado.composicaoAtual = [];
  estado.classeRecomendadaAtual = "duelista";
  estado.scoreComposicaoAtual = 0;
  estado.ultimoPickAnimado = null;

  el.imagemWrapper.classList.remove("sorteando");
  el.imagemWrapper.classList.remove("reveal");
  el.statusSorteio.classList.remove("brilho");
  el.cardResultado.classList.remove("sorteando");
  el.cardResultado.classList.remove("reveal");
  el.nomeAgente.classList.remove("nome-escondido");
  el.nomeAgente.classList.remove("nome-reveal");
  el.botaoSortear.textContent = "Sortear agente";

  limparParticulas();
  renderizarTelaInicial();
  salvarDados();
}

function aplicarModoUI() {
  const roletaAtivo = estado.modoAtual === "roleta";

  el.blocoRoleta.classList.toggle("modo-escondido", !roletaAtivo);
  el.blocoComposicao.classList.toggle("modo-escondido", roletaAtivo);
  el.areaTime.classList.toggle("modo-escondido", roletaAtivo);
  el.areaCardRoleta.classList.toggle("modo-escondido", !roletaAtivo);
  el.areaCardComposicao.classList.toggle("modo-escondido", roletaAtivo);
  el.painelRoletaLateral.classList.toggle("modo-escondido", !roletaAtivo);
  el.painelComposicaoLateral.classList.toggle("modo-escondido", roletaAtivo);

  el.botaoModoRoleta.classList.toggle("ativo", roletaAtivo);
  el.botaoModoComposicao.classList.toggle("ativo", !roletaAtivo);

  el.subtituloTopo.textContent = roletaAtivo
    ? "Sorteie um agente e acompanhe histórico, ranking e favoritos."
    : "Monte comps por mapa, veja score, balanceamento visual e sugestões de pick.";
}

function trocarModo(modo) {
  estado.modoAtual = modo;
  aplicarModoUI();
  atualizarAnaliseCompetitiva();
  montarComposicao(false);
  salvarDados();
}

function entrarNoApp(modo = "roleta") {
  if (!el.telaInicial || !el.appPrincipal) return;

  estado.modoAtual = modo;
  el.telaInicial.classList.add("fade-saindo");

  setTimeout(() => {
    el.telaInicial.style.display = "none";

    el.appPrincipal.classList.remove("app-escondido");
    el.appPrincipal.classList.add("fade-entrando");

    void el.appPrincipal.offsetWidth;

    el.appPrincipal.classList.add("fade-visivel");
    aplicarModoUI();
    atualizarAnaliseCompetitiva();
    montarComposicao(false);
    salvarDados();
  }, 450);
}

function alternarSom() {
  estado.somAtivo = !estado.somAtivo;
  atualizarBotaoSom();
  salvarDados();
}

function atualizarMapa() {
  estado.mapaAtual = el.selectMapa.value;
  estado.composicaoAtual = [];
  estado.ultimoPickAnimado = null;
  atualizarAnaliseCompetitiva();
  montarComposicao(false);
  salvarDados();
}

function renderizarTelaInicial() {
  renderizarAgente(
    estado.agenteAtual,
    "Pronto para sortear",
    "Clique no botão para iniciar o sorteio."
  );
  renderizarHistorico();
  renderizarRanking();
  renderizarGerenciarAgentes();
  renderizarTime();
  atualizarBotaoSom();
  atualizarAnaliseCompetitiva();
  montarComposicao(false);
  aplicarModoUI();
}

window.iniciarSorteio = iniciarSorteio;
window.copiarResultado = copiarResultado;
window.zerarRanking = zerarRanking;
window.zerarHistorico = zerarHistorico;
window.limparResultado = limparTudo;
window.entrarNoApp = entrarNoApp;
window.alternarSom = alternarSom;
window.alternarBloqueio = alternarBloqueio;
window.alternarFavorito = alternarFavorito;
window.alternarTime = alternarTime;
window.adicionarSugestaoAoTime = adicionarSugestaoAoTime;
window.limparBloqueios = limparBloqueios;
window.limparFavoritos = limparFavoritos;
window.limparTime = limparTime;
window.atualizarAnaliseCompetitiva = atualizarAnaliseCompetitiva;
window.montarComposicao = montarComposicao;
window.refazerComposicao = refazerComposicao;
window.trocarModo = trocarModo;

function iniciarApp() {
  carregarDados();

  if (el.selectMapa) {
    el.selectMapa.value = estado.mapaAtual;
    el.selectMapa.addEventListener("change", atualizarMapa);
  }

  renderizarTelaInicial();

  if (estado.agenteAtual && estado.agenteAtual.nome !== estado.agentePadrao.nome) {
    renderizarAgente(
      estado.agenteAtual,
      "Último agente salvo",
      "Este foi o último agente sorteado salvo no navegador."
    );
  }
}

iniciarApp();