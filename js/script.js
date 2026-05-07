// ================= ANIMAÇÃO AO ROLAR =================

const elementosRevelacao = document.querySelectorAll(".revelar");

function revelarAoRolar() {
  elementosRevelacao.forEach((item) => {
    const alturaJanela = window.innerHeight;
    const topoElemento = item.getBoundingClientRect().top;
    const pontoRevelacao = 120;

    if (topoElemento < alturaJanela - pontoRevelacao) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revelarAoRolar);
window.addEventListener("load", revelarAoRolar);

// ================= ASSISTENTE VIRTUAL =================

const assistenteSite = document.getElementById('assistenteSite');
const botaoAssistente = document.getElementById('botaoAssistente');
const painelAssistente = document.getElementById('painelAssistente');
const botaoFecharAssistente = document.getElementById('fecharAssistente');

if (assistenteSite && botaoAssistente && painelAssistente) {
  function abrirAssistente() {
    assistenteSite.classList.add('esta-aberto');
    botaoAssistente.setAttribute('aria-expanded', 'true');
    painelAssistente.setAttribute('aria-hidden', 'false');
  }

  function fecharAssistente() {
    assistenteSite.classList.remove('esta-aberto');
    botaoAssistente.setAttribute('aria-expanded', 'false');
    painelAssistente.setAttribute('aria-hidden', 'true');
  }

  botaoAssistente.addEventListener('click', () => {
    const estaAberto = assistenteSite.classList.contains('esta-aberto');
    if (estaAberto) {
      fecharAssistente();
    } else {
      abrirAssistente();
    }
  });

  if (botaoFecharAssistente) {
    botaoFecharAssistente.addEventListener('click', fecharAssistente);
  }

  document.addEventListener('click', (evento) => {
    const clicouDentro = assistenteSite.contains(evento.target);
    if (!clicouDentro) {
      fecharAssistente();
    }
  });

  window.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape') {
      fecharAssistente();
    }
  });

  window.addEventListener('load', () => {
    setTimeout(() => {
      if (!assistenteSite.classList.contains('esta-aberto')) {
        assistenteSite.classList.add('esta-destacado');
      }
    }, 900);
  });
}


// ================= UNIDADES - MAPA INTERATIVO =================

const dadosMapasEstados = [
  {
    id: "sc",
    titulo: "Santa Catarina",
    subtitulo: "22 cidades com atendimento/unidade",
    chamada: "Região principal",
    imagem: "assets/img/mapa-sc.png",
    alt: "Mapa de Santa Catarina",
    unidades: [
      {
        id: "sao-miguel-do-oeste",
        nome: "São Miguel do Oeste - SC",
        selo: "Cidade atendida",
        x: 23.0,
        y: 22.0,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=S%C3%A3o+Miguel+do+Oeste%2C+SC",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em São Miguel do Oeste"
      },
      {
        id: "maravilha",
        nome: "Maravilha - SC",
        selo: "Cidade atendida",
        x: 22.5,
        y: 23.1,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Maravilha%2C+SC",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Maravilha"
      },
      {
        id: "pinhalzinho",
        nome: "Pinhalzinho - SC",
        selo: "Cidade atendida",
        x: 27.0,
        y: 26.4,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Pinhalzinho%2C+SC",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Pinhalzinho"
      },
      {
        id: "chapeco",
        nome: "Chapecó - SC",
        selo: "Cidade atendida",
        x: 28.0,
        y: 32.5,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Chapec%C3%B3%2C+SC",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Chapecó"
      },
      {
        id: "concordia",
        nome: "Concórdia - SC",
        selo: "Cidade atendida",
        x: 35.0,
        y: 34.5,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Conc%C3%B3rdia%2C+SC",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Concórdia"
      },
      {
        id: "herval-do-oeste",
        nome: "Herval d'Oeste - SC",
        selo: "Cidade atendida",
        x: 42.9,
        y: 33.0,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Herval+do+Oeste%2C+SC",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Herval do Oeste"
      },
      {
        id: "videira",
        nome: "Videira - SC",
        selo: "Cidade atendida",
        x: 43.0,
        y: 30.8,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Videira%2C+SC",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Videira"
      },
      {
        id: "fraiburgo",
        nome: "Fraiburgo - SC",
        selo: "Cidade atendida",
        x: 50.0,
        y: 31.4,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Fraiburgo%2C+SC",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Fraiburgo"
      },
      {
        id: "cacador",
        nome: "Caçador - SC",
        selo: "Cidade atendida",
        x: 50.0,
        y: 24.3,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Ca%C3%A7ador%2C+SC",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Caçador"
      },
      {
        id: "porto-uniao",
        nome: "Porto União - SC",
        selo: "Cidade atendida",
        x: 62.0,
        y: 8.5,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Porto+Uni%C3%A3o%2C+SC",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Porto União"
      },
      {
        id: "campos-novos",
        nome: "Campos Novos - SC",
        selo: "Cidade atendida",
        x: 50.0,
        y: 40.0,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Campos+Novos%2C+SC",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Campos Novos"
      },
      {
        id: "anita-garibaldi",
        nome: "Anita Garibaldi - SC",
        selo: "Cidade atendida",
        x: 60.0,
        y: 48.0,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Anita+Garibaldi%2C+SC",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Anita Garibaldi"
      },
      {
        id: "lages",
        nome: "Lages - SC",
        selo: "Matriz",
        x: 64.1,
        y: 54.8,
        descricao: "Matriz da Transportadora Fabris, com atendimento contínuo e suporte operacional para as rotas da empresa.",
        endereco: "Av. Luiz de Camões, 796 - Coral",
        telefone: "(49) 3706-1400",
        horario: "Funcionamento 24 horas",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Av.+Luiz+de+Cam%C3%B5es,+796,+Coral,+Lages,+SC",
        linkContato: "https://api.whatsapp.com/send?phone=554937061400",
        rotuloImagem: "Placeholder da foto da matriz em Lages"
      },
      {
        id: "rio-do-sul",
        nome: "Rio do Sul - SC",
        selo: "Cidade atendida",
        x: 76.6,
        y: 37.0,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Rio+do+Sul%2C+SC",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Rio do Sul"
      },
      {
        id: "blumenau",
        nome: "Blumenau - SC",
        selo: "Cidade atendida",
        x: 95.0,
        y: 28.4,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Blumenau%2C+SC",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Blumenau"
      },
      {
        id: "jaragua-do-sul",
        nome: "Jaraguá do Sul - SC",
        selo: "Cidade atendida",
        x: 87.0,
        y: 15.8,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Jaragu%C3%A1+do+Sul%2C+SC",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Jaraguá do Sul"
      },
      {
        id: "sao-bento-do-sul",
        nome: "São Bento do Sul - SC",
        selo: "Cidade atendida",
        x: 81.4,
        y: 8.8,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=S%C3%A3o+Bento+do+Sul%2C+SC",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em São Bento do Sul"
      },
      {
        id: "joinville",
        nome: "Joinville - SC",
        selo: "Cidade atendida",
        x: 96.0,
        y: 10.3,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Joinville%2C+SC",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Joinville"
      },
      {
        id: "palhoca",
        nome: "Palhoça - SC",
        selo: "Cidade atendida",
        x: 100.0,
        y: 49.9,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Palho%C3%A7a%2C+SC",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Palhoça"
      },
      {
        id: "tubarao",
        nome: "Tubarão - SC",
        selo: "Cidade atendida",
        x: 92.0,
        y: 74.2,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Tubar%C3%A3o%2C+SC",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Tubarão"
      },
      {
        id: "criciuma",
        nome: "Criciúma - SC",
        selo: "Cidade atendida",
        x: 87.0,
        y: 83.0,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Crici%C3%BAma%2C+SC",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Criciúma"
      }
    ]
  },
  {
    id: "rs",
    titulo: "Rio Grande do Sul",
    subtitulo: "Pontos placeholder para edição",
    chamada: "Região atendida",
    imagem: "assets/img/mapa-rs.png",
    alt: "Mapa do Rio Grande do Sul",
    unidades: [
      {
        id: "porto-alegre",
        nome: "Porto Alegre - RS",
        selo: "Placeholder",
        x: 72.7,
        y: 42.6,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Porto+Alegre%2C+RS",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Porto Alegre"
      },
      {
        id: "caxias-do-sul",
        nome: "Caxias do Sul - RS",
        selo: "Placeholder",
        x: 73.0,
        y: 33.6,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Caxias+do+Sul%2C+RS",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Caxias do Sul"
      },
      {
        id: "passo-fundo",
        nome: "Passo Fundo - RS",
        selo: "Placeholder",
        x: 61.7,
        y: 24.1,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Passo+Fundo%2C+RS",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Passo Fundo"
      },
      {
        id: "pelotas",
        nome: "Pelotas - RS",
        selo: "Placeholder",
        x: 62.3,
        y: 60.7,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Pelotas%2C+RS",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Pelotas"
      }
    ]
  },
  {
    id: "sp",
    titulo: "São Paulo",
    subtitulo: "Unidade e pontos placeholder para edição",
    chamada: "Região atendida",
    imagem: "assets/img/mapa-sp.png",
    alt: "Mapa de São Paulo",
    unidades: [
      {
        id: "sao-paulo",
        nome: "São Paulo - SP",
        selo: "Unidade",
        x: 85.0,
        y: 65.0,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=S%C3%A3o+Paulo%2C+SP",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em São Paulo"
      },
    ]
  },
  {
    id: "pr",
    titulo: "Paraná",
    subtitulo: "Pontos placeholder para edição",
    chamada: "Região atendida",
    imagem: "assets/img/mapa-pr.png",
    alt: "Mapa do Paraná",
    unidades: [
      {
        id: "curitiba",
        nome: "Curitiba - PR",
        selo: "Placeholder",
        x: 73.1,
        y: 54.1,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Curitiba%2C+PR",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Curitiba"
      },
      {
        id: "londrina",
        nome: "Londrina - PR",
        selo: "Placeholder",
        x: 53.3,
        y: 29.5,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Londrina%2C+PR",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Londrina"
      },
      {
        id: "maringa",
        nome: "Maringá - PR",
        selo: "Placeholder",
        x: 45.2,
        y: 30.8,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Maring%C3%A1%2C+PR",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Maringá"
      },
      {
        id: "cascavel",
        nome: "Cascavel - PR",
        selo: "Placeholder",
        x: 29.2,
        y: 48.6,
        descricao: "Cidade atendida pela operação da Transportadora Fabris. Edite aqui a descrição, endereço e telefone conforme a unidade.",
        endereco: "Endereço a informar",
        telefone: "Telefone a informar",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Cascavel%2C+PR",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Placeholder da foto da unidade em Cascavel"
      }
    ]
  }
];

const botaoEstadoAnterior = document.getElementById("estadoAnterior");
const botaoEstadoProximo = document.getElementById("proximoEstado");
const abasEstados = document.querySelectorAll(".aba-estado");
const chamadaEstado = document.getElementById("chamadaEstado");
const tituloEstado = document.getElementById("tituloEstado");
const subtituloEstado = document.getElementById("subtituloEstado");
const imagemMapaEstado = document.getElementById("imagemMapaEstado");
const pinsMapaEstado = document.getElementById("pinsMapaEstado");
const areaMapaEstado = document.querySelector(".palco-mapa-estado");

const seloUnidade = document.getElementById("seloUnidade");
const nomeUnidade = document.getElementById("nomeUnidade");
const descricaoUnidade = document.getElementById("descricaoUnidade");
const enderecoUnidade = document.getElementById("enderecoUnidade");
const telefoneUnidade = document.getElementById("telefoneUnidade");
const horarioUnidade = document.getElementById("horarioUnidade");
const linkMapaUnidade = document.getElementById("linkMapaUnidade");
const linkContatoUnidade = document.getElementById("linkContatoUnidade");
const imagemUnidade = document.getElementById("imagemUnidade");
const tituloCidadesAtendidas = document.getElementById("tituloCidadesAtendidas");
const subtituloCidadesAtendidas = document.getElementById("subtituloCidadesAtendidas");
const contadorCidadesAtendidas = document.getElementById("contadorCidadesAtendidas");
const gradeCidadesAtendidas = document.getElementById("gradeCidadesAtendidas");

let indiceEstadoAtual = 0;


const cidadesAtendidasPorUnidade = {
  "blumenau": [
    "Ascurra",
    "Balneário Camboriú",
    "Balneário Piçarras",
    "Barra Velha",
    "Benedito Novo",
    "Blumenau",
    "Camboriu",
    "Doutor Pedrinho",
    "Gaspar",
    "Ilhota",
    "Indaial",
    "Itajai",
    "Luiz Alves",
    "Navegantes",
    "Penha",
    "Pomerode",
    "Rio dos Cedros",
    "Rodeio",
    "São João do Itaperiu",
    "Timbo"
  ],
  "cacador": [
    "Caçador",
    "Calmon",
    "Lebon Regis",
    "Matos Costa"
  ],
  "campos-novos": [
    "Abdon Batista",
    "Campos Novos",
    "Celso Ramos"
  ],
  "caxias-do-sul": [
    "Bento Gonçalves",
    "Carlos Barbosa",
    "Caxias do Sul",
    "Farroupilha",
    "Flores da Cunha",
    "Garibaldi"
  ],
  "chapeco": [
    "Abelardo Luz",
    "Águas de Chapecó",
    "Arvoredo",
    "Bom Jesus",
    "Catanduvas",
    "Caxambu do Sul",
    "Chapecó",
    "Cordilheira Alta",
    "Coronel Freitas",
    "Coronel Martins",
    "Entre Rios",
    "Faxinal dos Guedes",
    "Formosa do Sul",
    "Galvao",
    "Guatambu",
    "Ipuacu",
    "Irani",
    "Irati",
    "Ita",
    "Jardinopolis",
    "Jupia",
    "Lajeado Grande",
    "Marema",
    "Novo Horizonte",
    "Ouro Verde",
    "Paial",
    "Passos Maia",
    "Planalto Alegre",
    "Ponte Serrada",
    "Quilombo",
    "Santiago do Sul",
    "São Carlos",
    "São Domingos",
    "São Lourenço do Oeste",
    "Seara",
    "Uniao do Oeste",
    "Vargeao",
    "Vargem Bonita",
    "Xanxere",
    "Xavantina",
    "Xaxim"
  ],
  "concordia": [
    "Alto Bela Vista",
    "Arabuta",
    "Concórdia",
    "Ipira",
    "Ipumirim",
    "Jabora",
    "Lindoia do Sul",
    "Peritiba",
    "Piratuba",
    "Presidente Castello Branco"
  ],
  "criciuma": [
    "( Boa Vista - Lombas - Sanga Funda)",
    "( Laranjinha - São Marcos )",
    "( Verdinho - São Roque - Sangão )",
    "Ararangua",
    "Ararangua (Morro dos Conventos)",
    "Balneario Arroio do Silva",
    "Balneario Gaivota",
    "Balneario Rincao",
    "Cocal do Sul",
    "Criciúma",
    "Ermo",
    "Forquilhinha",
    "Içara",
    "Içara (Esplanada)",
    "Jacinto Machado",
    "Lauro Muller",
    "Maracaja",
    "Meleiro",
    "Morro da Fumaca",
    "Morro Grande",
    "Nova Veneza",
    "Nova Veneza (Caravagio)",
    "Orleans",
    "Orleans ( Pindotiba)",
    "Passo de Torres",
    "Praia Grande",
    "Santa Rosa do Sul",
    "São João do Sul",
    "Sideropolis",
    "Sombrio",
    "Timbe do Sul",
    "Treviso",
    "Turvo",
    "Turvo (Morro Chato )",
    "Urussanga"
  ],
  "curitibanos": [
    "Curitibanos",
    "Frei Rogerio"
  ],
  "fraiburgo": [
    "Fraiburgo",
    "Monte Carlo"
  ],
  "herval-do-oeste": [
    "Agua Doce",
    "Capinzal",
    "Erval Velho",
    "Herval d'Oeste",
    "Ibicare",
    "Joaçaba",
    "Lacerdopolis",
    "Luzerna",
    "Ouro",
    "Treze Tilias",
    "Zortea"
  ],
  "jaragua-do-sul": [
    "Corupa",
    "Guaramirim",
    "Jaraguá do Sul",
    "Massaranduba",
    "Schroeder"
  ],
  "joacaba": [
    "Agua Doce",
    "Capinzal",
    "Erval Velho",
    "Herval d'Oeste",
    "Ibicare",
    "Joaçaba",
    "Lacerdopolis",
    "Luzerna",
    "Ouro",
    "Treze Tilias",
    "Zortea"
  ],
  "joinville": [
    "Araquari",
    "Balneario Barra do Sul",
    "Garuva",
    "Itapoa",
    "Joinville",
    "São Francisco do Sul"
  ],
  "lages": [
    "Alfredo Wagner",
    "Angelina",
    "Anita Garibaldi",
    "Apiuna",
    "Bela Vista do Toldo",
    "Bocaina do Sul",
    "Bom Jardim da Serra",
    "Bom Retiro",
    "Brunopolis",
    "Campo Belo do Sul",
    "Canoinhas",
    "Capao Alto",
    "Cerro Negro",
    "Correia Pinto",
    "Irineopolis",
    "Itaiopolis",
    "Lages",
    "Mafra",
    "Major Vieira",
    "Mirim Doce",
    "Monte Castelo",
    "Otacilio Costa",
    "Painel",
    "Palmeira",
    "Papanduva",
    "Ponte Alta",
    "Ponte Alta do Norte",
    "Pouso Redondo",
    "Rancho Queimado",
    "Rio das Antas",
    "Rio Negro",
    "Rio Rufino",
    "Salete",
    "Santa Cecilia",
    "São Cristóvão do Sul",
    "São Joaquim",
    "São José do Cerrito",
    "Taio",
    "Timbo Grande",
    "Três Barras",
    "Urubici",
    "Urupema",
    "Vargem"
  ],
  "maravilha": [
    "Bom Jesus do Oeste",
    "Cunha Pora",
    "Flor do Sertao",
    "Iraceminha",
    "Maravilha",
    "Romelandia",
    "Saltinho",
    "Santa Terezinha do Progresso",
    "São Miguel da Boa Vista",
    "Tigrinhos"
  ],
  "palhoca": [
    "Águas Mornas",
    "Anitapolis",
    "Antonio Carlos",
    "Biguaçu",
    "Bombinhas",
    "Botuvera",
    "Brusque",
    "Canelinha",
    "Florianópolis",
    "Governador Celso Ramos",
    "Guabiruba",
    "Itapema",
    "Major Gercino",
    "Norte da Ilha (Florianópolis)",
    "Nova Trento",
    "Palhoca",
    "Porto Belo",
    "Santo Amaro da Imperatriz",
    "São Bonifácio",
    "São João Batista",
    "São José",
    "São Pedro de Alcântara",
    "Sul da Ilha (Florianópolis)",
    "Tijucas"
  ],
  "pinhalzinho": [
    "Águas Frias",
    "Cunhatai",
    "Modelo",
    "Mondai",
    "Nova Erechim",
    "Nova Itaberaba",
    "Pinhalzinho",
    "Riqueza",
    "Saudades",
    "Serra Alta",
    "Sul Brasil"
  ],
  "porto-uniao": [
    "Bituruna",
    "Crus Machado",
    "General Carneiro",
    "Paula Freitas",
    "Paulo Frontin",
    "Porto Uniao",
    "Porto Vitoria",
    "Uniao da Vitoria"
  ],
  "rio-do-sul": [
    "Agrolandia",
    "Agronomica",
    "Atalanta",
    "Aurora",
    "Braco do Trombudo",
    "Chapadao do Lageado",
    "Dona Emma",
    "Ibirama",
    "Imbuia",
    "Ituporanga",
    "Jose Boiteux",
    "Laurentino",
    "Leoberto Leal",
    "Lontras",
    "Petrolandia",
    "Presidente Getulio",
    "Presidente Nereu",
    "Rio do Campo",
    "Rio do Oeste",
    "Rio do Sul",
    "Santa Terezinha",
    "Trombudo Central",
    "Vidal Ramos",
    "Vitor Meireles",
    "Witmarsum"
  ],
  "sao-bento-do-sul": [
    "Campo Alegre",
    "Rio Negrinho",
    "São Bento do Sul"
  ],
  "sao-miguel-do-oeste": [
    "Anchieta",
    "Bandeirante",
    "Barra Bonita",
    "Barracão",
    "Belmonte",
    "Caibi",
    "Campo Ere",
    "Descanso",
    "Dionísio Cerqueira",
    "Guaraciaba",
    "Guaruja do Sul",
    "Ipora do Oeste",
    "Itapiranga",
    "Palma Sola",
    "Palmitos",
    "Paraiso",
    "Princesa",
    "Santa Helena",
    "São Bernardino",
    "São João do Oeste",
    "São José do Cedro",
    "São Miguel do Oeste",
    "Tunapolis"
  ],
  "tubarao": [
    "Armazem",
    "Braco do Norte",
    "Capivari de Baixo",
    "Garopaba",
    "Grão-Pará",
    "Gravatal",
    "Imarui",
    "Imbituba",
    "Jaguaruna",
    "Laguna",
    "Paulo Lopes",
    "Pedras Grandes",
    "Pescaria Brava",
    "Rio Fortuna",
    "Sangao",
    "Santa Rosa de Lima",
    "São Ludgero",
    "São Martinho",
    "Treze de Maio",
    "Tubarão"
  ],
  "vacaria": [
    "Pinhal da Serra",
    "São Marcos",
    "Vacaria"
  ],
  "videira": [
    "Arroio Trinta",
    "Ibiam",
    "Iomere",
    "Macieira",
    "Pinheiro Preto",
    "Salto Veloso",
    "Tangara",
    "Videira"
  ]
};


const cidadesAtendidasPadraoPorEstado = {
  "sc": [
    "Anita Garibaldi",
    "Maravilha",
    "Pinhalzinho",
    "Blumenau",
    "Herval d'Oeste",
    "Rio do Sul",
    "Campos Novos",
    "Jaraguá do Sul",
    "São Miguel do Oeste",
    "Chapecó",
    "Joaçaba",
    "São Bento do Sul",
    "Concórdia",
    "Joinville",
    "Tubarão",
    "Criciúma",
    "Lages",
    "Caçador",
    "Porto União",
    "Videira",
    "Fraiburgo",
    "Palhoça"
  ],
  "rs": [
    "Porto Alegre",
    "Caxias do Sul",
    "Passo Fundo",
    "Pelotas"
  ],
  "sp": [
    "São Paulo",
    "Campinas",
    "Ribeirão Preto",
    "São José dos Campos"
  ],
  "pr": [
    "Curitiba",
    "Londrina",
    "Maringá",
    "Cascavel"
  ]
};

function obterCidadesAtendidas(unidade, estado) {
  if (!unidade) {
    return [];
  }

  if (Array.isArray(unidade.cidadesAtendidas) && unidade.cidadesAtendidas.length) {
    return unidade.cidadesAtendidas;
  }

  if (cidadesAtendidasPorUnidade[unidade.id]) {
    return cidadesAtendidasPorUnidade[unidade.id];
  }

  if (estado && cidadesAtendidasPadraoPorEstado[estado.id]) {
    return cidadesAtendidasPadraoPorEstado[estado.id];
  }

  return [unidade.nome.replace(/\s-\s[A-Z]{2}$/, "")];
}

function renderizarCidadesAtendidas(unidade, estado = null) {
  if (!tituloCidadesAtendidas || !gradeCidadesAtendidas) {
    return;
  }

  const estadoAtivo = estado || dadosMapasEstados[indiceEstadoAtual];
  const cidades = obterCidadesAtendidas(unidade, estadoAtivo);
  const textoQuantidadeCidades = cidades.length === 1 ? "1 cidade" : `${cidades.length} cidades`;

  tituloCidadesAtendidas.textContent = `Cidades atendidas por ${unidade.nome}`;
  subtituloCidadesAtendidas.textContent =
    "Relação de cidades atendidas pela unidade selecionada conforme a programação operacional da Transportadora Fabris.";
  contadorCidadesAtendidas.textContent = textoQuantidadeCidades;

  gradeCidadesAtendidas.innerHTML = cidades
    .map(
      (cidade) => `
        <span class="item-cidade-atendida">
          <i class="bi bi-geo-alt-fill"></i>
          ${cidade}
        </span>
      `
    )
    .join("");
}


function atualizarDetalhesUnidade(unidade, estado = null) {
  if (!unidade || !nomeUnidade) {
    return;
  }

  seloUnidade.textContent = unidade.selo;
  nomeUnidade.textContent = unidade.nome;
  descricaoUnidade.textContent = unidade.descricao;
  enderecoUnidade.textContent = unidade.endereco;
  telefoneUnidade.textContent = unidade.telefone;
  horarioUnidade.textContent = unidade.horario;
  linkMapaUnidade.href = unidade.linkMapa;
  linkContatoUnidade.href = unidade.linkContato;

  if (imagemUnidade) {
    imagemUnidade.innerHTML = `
      <i class="bi bi-image"></i>
      <span>${unidade.rotuloImagem}</span>
    `;
  }

  document.querySelectorAll(".pin-mapa").forEach((pin) => {
    pin.classList.toggle("active", pin.dataset.unidade === unidade.id);
  });

  renderizarCidadesAtendidas(unidade, estado);
}

function renderizarPins(estado) {
  if (!pinsMapaEstado) {
    return;
  }

  pinsMapaEstado.innerHTML = estado.unidades
    .map((unidade, indice) => `
      <button
        class="pin-mapa ${indice === 0 ? "active" : ""}"
        type="button"
        data-unidade="${unidade.id}"
        aria-label="Selecionar unidade ${unidade.nome}"
        style="--x: ${unidade.x}%; --y: ${unidade.y}%;"
      >
        <span></span>
        <strong>${unidade.nome.replace(" - ", " ")}</strong>
      </button>
    `)
    .join("");

  document.querySelectorAll(".pin-mapa").forEach((pin) => {
    pin.addEventListener("click", () => {
      const unidadeSelecionada = estado.unidades.find((unidade) => unidade.id === pin.dataset.unidade);
      atualizarDetalhesUnidade(unidadeSelecionada, estado);
    });
  });
}

function renderizarEstado(indice) {
  const estado = dadosMapasEstados[indice];

  if (!estado || !imagemMapaEstado) {
    return;
  }

  indiceEstadoAtual = indice;

  if (areaMapaEstado) {
    areaMapaEstado.classList.add("em-transicao");
  }

  setTimeout(() => {
    chamadaEstado.textContent = estado.chamada;
    tituloEstado.textContent = estado.titulo;
    subtituloEstado.textContent = estado.subtitulo;
    imagemMapaEstado.src = estado.imagem;
    imagemMapaEstado.alt = estado.alt;

    abasEstados.forEach((aba) => {
      aba.classList.toggle("active", aba.dataset.estado === estado.id);
    });

    renderizarPins(estado);
    atualizarDetalhesUnidade(estado.unidades[0], estado);

    if (areaMapaEstado) {
      areaMapaEstado.classList.remove("em-transicao");
    }
  }, 160);
}

if (botaoEstadoAnterior && botaoEstadoProximo && imagemMapaEstado) {
  botaoEstadoAnterior.addEventListener("click", () => {
    const indiceAnterior = (indiceEstadoAtual - 1 + dadosMapasEstados.length) % dadosMapasEstados.length;
    renderizarEstado(indiceAnterior);
  });

  botaoEstadoProximo.addEventListener("click", () => {
    const indiceProximo = (indiceEstadoAtual + 1) % dadosMapasEstados.length;
    renderizarEstado(indiceProximo);
  });

  abasEstados.forEach((aba) => {
    aba.addEventListener("click", () => {
      const indice = dadosMapasEstados.findIndex((estado) => estado.id === aba.dataset.estado);
      if (indice !== -1) {
        renderizarEstado(indice);
      }
    });
  });

  renderizarEstado(0);
}


// ================= SERVIÇOS - SLIDER DE DESTAQUE =================

const slidesServicos = [
  {
    chamada: "Modalidade de transporte",
    titulo: "Carga Fechada",
    imagem: "assets/img/carga-fechada.png",
    descricao:
      "Transporte dedicado para cargas que exigem exclusividade, maior controle da operação e eficiência no prazo de entrega. Ideal para empresas que precisam de uma solução logística direta, segura e planejada, atendendo todo o Brasil.",
    beneficios: [
      "Veículo dedicado para a operação",
      "Mais agilidade no transporte",
      "Maior controle logístico",
      "Segurança e confiabilidade"
    ]
  },
  {
    chamada: "Modalidade de transporte",
    titulo: "Carga Fracionada",
    imagem: "assets/img/carga-fracionada.png",
    descricao:
      "Solução ideal para pequenas e médias cargas, permitindo melhor aproveitamento logístico, redução de custos e atendimento eficiente para diferentes demandas de entrega.",
    beneficios: [
      "Otimização de custos",
      "Flexibilidade para volumes menores",
      "Atendimento para diferentes destinos",
      "Operação organizada e segura"
    ]
  },
  {
    chamada: "Operação logística",
    titulo: "Transporte Rodoviário",
    imagem: "assets/img/transporte-rodoviario.png",
    descricao:
      "Transporte rodoviário de cargas com planejamento, acompanhamento e foco em pontualidade. Uma solução preparada para empresas que buscam eficiência e previsibilidade.",
    beneficios: [
      "Rotas estratégicas",
      "Controle operacional",
      "Pontualidade nas entregas",
      "Compromisso com a carga"
    ]
  }
];

const cardServico = document.querySelector(".card-destaque-servico");
const imagemServico = document.getElementById("imagemServico");
const contadorServico = document.getElementById("contadorServico");
const chamadaServico = document.getElementById("chamadaServico");
const tituloServico = document.getElementById("tituloServico");
const descricaoServico = document.getElementById("descricaoServico");
const beneficiosServico = document.getElementById("beneficiosServico");
const botaoServicoAnterior = document.getElementById("servicoAnterior");
const botaoServicoProximo = document.getElementById("proximoServico");
const abasServicos = document.querySelectorAll("#abasServico button");

let indiceServicoAtual = 0;

function renderizarSlideServico(indice) {
  if (!slidesServicos.length || !tituloServico) {
    return;
  }

  const slideServico = slidesServicos[indice];

  if (cardServico) {
    cardServico.classList.add("em-transicao");
  }

  setTimeout(() => {
    imagemServico.src = slideServico.imagem;
    imagemServico.alt = slideServico.titulo;
    contadorServico.textContent = `${String(indice + 1).padStart(2, "0")} / ${String(slidesServicos.length).padStart(2, "0")}`;
    chamadaServico.textContent = slideServico.chamada;
    tituloServico.textContent = slideServico.titulo;
    descricaoServico.textContent = slideServico.descricao;

    beneficiosServico.innerHTML = slideServico.beneficios
      .map(
        (beneficio) => `
          <div>
            <i class="bi bi-check-circle-fill"></i>
            <span>${beneficio}</span>
          </div>
        `
      )
      .join("");

    abasServicos.forEach((aba) => {
      aba.classList.toggle("active", Number(aba.dataset.servico) === indice);
    });

    if (cardServico) {
      cardServico.classList.remove("em-transicao");
    }
  }, 180);
}

function irParaSlideServico(indice) {
  indiceServicoAtual = (indice + slidesServicos.length) % slidesServicos.length;
  renderizarSlideServico(indiceServicoAtual);
}

if (botaoServicoAnterior && botaoServicoProximo && tituloServico) {
  botaoServicoAnterior.addEventListener("click", () => {
    irParaSlideServico(indiceServicoAtual - 1);
  });

  botaoServicoProximo.addEventListener("click", () => {
    irParaSlideServico(indiceServicoAtual + 1);
  });

  abasServicos.forEach((aba) => {
    aba.addEventListener("click", () => {
      irParaSlideServico(Number(aba.dataset.servico));
    });
  });

  renderizarSlideServico(indiceServicoAtual);
}
