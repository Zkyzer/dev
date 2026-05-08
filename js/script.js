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

// ================= UNIDADES - MAPA INTERATIVO =================

const dadosMapasEstados = [
  {
    id: "sc",
    titulo: "Santa Catarina",
    subtitulo: "22 unidades/pontos de atendimento",
    chamada: "Região principal",
    imagem: "assets/img/mapa-sc.png",
    alt: "Mapa de Santa Catarina",
    unidades: [
      {
        id: "sao-miguel-do-oeste",
        nome: "São Miguel do Oeste - SC",
        selo: "Unidade",
        x: 23,
        y: 22,
        descricao: "Unidade da Transportadora Fabris em São Miguel do Oeste, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "Av. Getúlio Vargas, 1051 - Bairro Centro - CEP 89000-000",
        telefone: "(49) 3621-3786 / (49) 99937-9228",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=S%C3%A3o+Miguel+do+Oeste+-+SC%2C+Av.+Get%C3%BAlio+Vargas%2C+1051+-+Bairro+Centro+-+CEP+89000-000",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em São Miguel do Oeste"
      },
      {
        id: "maravilha",
        nome: "Maravilha - SC",
        selo: "Unidade",
        x: 22.5,
        y: 23.1,
        descricao: "Unidade da Transportadora Fabris em Maravilha, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "Rodovia BR 282, KM 604 - Bairro Kasper - CEP 89874-000",
        telefone: "(49) 99815-1670 / (49) 98891-1344",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Maravilha+-+SC%2C+Rodovia+BR+282%2C+KM+604+-+Bairro+Kasper+-+CEP+89874-000",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em Maravilha"
      },
      {
        id: "pinhalzinho",
        nome: "Pinhalzinho - SC",
        selo: "Unidade",
        x: 27,
        y: 26.4,
        descricao: "Unidade da Transportadora Fabris em Pinhalzinho, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "Av. São Paulo, 2141 - CEP 89870-000",
        telefone: "(49) 3366-1937 / (49) 3366-2933 / (49) 98817-3887",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Pinhalzinho+-+SC%2C+Av.+S%C3%A3o+Paulo%2C+2141+-+CEP+89870-000",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em Pinhalzinho"
      },
      {
        id: "chapeco",
        nome: "Chapecó - SC",
        selo: "Unidade",
        x: 28,
        y: 32.5,
        descricao: "Unidade da Transportadora Fabris em Chapecó, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "Dom Joaquim Domingues de Oliveira, 135 - Bairro Passos dos Fortes - CEP 89805-170",
        telefone: "(49) 3323-4406",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Chapec%C3%B3+-+SC%2C+Dom+Joaquim+Domingues+de+Oliveira%2C+135+-+Bairro+Passos+dos+Fortes+-+CEP+89805-170",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em Chapecó"
      },
      {
        id: "concordia",
        nome: "Concórdia - SC",
        selo: "Unidade",
        x: 35,
        y: 34.5,
        descricao: "Unidade da Transportadora Fabris em Concórdia, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "Rodovia Caetano Chiuchetta - Bairro Colina - CEP 89700-489",
        telefone: "(49) 3444-9994",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Conc%C3%B3rdia+-+SC%2C+Rodovia+Caetano+Chiuchetta+-+Bairro+Colina+-+CEP+89700-489",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em Concórdia"
      },
      {
        id: "herval-do-oeste",
        nome: "Herval d'Oeste - SC",
        selo: "Unidade",
        x: 42.9,
        y: 33,
        descricao: "Unidade da Transportadora Fabris em Herval d'Oeste, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "Santos Dumont, 1116 - Bairro São Vicente - CEP 89610-000",
        telefone: "(49) 3554-5437",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Herval+d%27Oeste+-+SC%2C+Santos+Dumont%2C+1116+-+Bairro+S%C3%A3o+Vicente+-+CEP+89610-000",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em Herval d'Oeste"
      },
      {
        id: "videira",
        nome: "Videira - SC",
        selo: "Unidade",
        x: 43,
        y: 30.8,
        descricao: "Unidade da Transportadora Fabris em Videira, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "Rod. SC 355, km 55 - Bairro Dois Pinheiros - CEP 89560-000",
        telefone: "(49) 3202-6376 / (49) 99979-4785",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Videira+-+SC%2C+Rod.+SC+355%2C+km+55+-+Bairro+Dois+Pinheiros+-+CEP+89560-000",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em Videira"
      },
      {
        id: "fraiburgo",
        nome: "Fraiburgo - SC",
        selo: "Unidade",
        x: 50,
        y: 31.4,
        descricao: "Unidade da Transportadora Fabris em Fraiburgo, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "Cruz e Souza, 117 - Bairro Jardim Duas Araucárias - CEP 89580-000",
        telefone: "(49) 3960-1075 / (49) 99920-8173 / (49) 3090-1050",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Fraiburgo+-+SC%2C+Cruz+e+Souza%2C+117+-+Bairro+Jardim+Duas+Arauc%C3%A1rias+-+CEP+89580-000",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em Fraiburgo"
      },
      {
        id: "cacador",
        nome: "Caçador - SC",
        selo: "Unidade",
        x: 50,
        y: 24.3,
        descricao: "Unidade da Transportadora Fabris em Caçador, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "Rodovia Honório Moro - Bairro Bom Sucesso - CEP 89500-580",
        telefone: "(49) 99201-3881 / (49) 99201-3715",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Ca%C3%A7ador+-+SC%2C+Rodovia+Hon%C3%B3rio+Moro+-+Bairro+Bom+Sucesso+-+CEP+89500-580",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em Caçador"
      },
      {
        id: "porto-uniao",
        nome: "Porto União - SC",
        selo: "Unidade",
        x: 62,
        y: 8.5,
        descricao: "Unidade da Transportadora Fabris em Porto União, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "Astolfo Macedo de Souza, 87 - Bairro Centro - CEP 84600-001",
        telefone: "(42) 3522-9298",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Porto+Uni%C3%A3o+-+SC%2C+Astolfo+Macedo+de+Souza%2C+87+-+Bairro+Centro+-+CEP+84600-001",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em Porto União"
      },
      {
        id: "campos-novos",
        nome: "Campos Novos - SC",
        selo: "Unidade",
        x: 50,
        y: 40,
        descricao: "Unidade da Transportadora Fabris em Campos Novos, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "Av. Juscelino Kubitschek - Bairro São Sebastião - CEP 89620-000",
        telefone: "(49) 98809-0042 / (49) 99112-2825",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Campos+Novos+-+SC%2C+Av.+Juscelino+Kubitschek+-+Bairro+S%C3%A3o+Sebasti%C3%A3o+-+CEP+89620-000",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em Campos Novos"
      },
      {
        id: "anita-garibaldi",
        nome: "Anita Garibaldi - SC",
        selo: "Unidade",
        x: 60,
        y: 48,
        descricao: "Unidade da Transportadora Fabris em Anita Garibaldi, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "CS 390 - Bairro São José - CEP 88590-000",
        telefone: "(49) 98851-5212",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Anita+Garibaldi+-+SC%2C+CS+390+-+Bairro+S%C3%A3o+Jos%C3%A9+-+CEP+88590-000",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em Anita Garibaldi"
      },
      {
        id: "lages",
        nome: "Lages - SC",
        selo: "Matriz",
        x: 64.1,
        y: 54.8,
        descricao: "Matriz da Transportadora Fabris em Lages, com atendimento contínuo e suporte operacional para as rotas da empresa.",
        endereco: "Av. Luiz de Camões, 796 - Bairro Coral - CEP 88523-000",
        telefone: "(49) 3706-1400",
        horario: "Funcionamento 24 horas",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Lages+-+SC%2C+Av.+Luiz+de+Cam%C3%B5es%2C+796+-+Bairro+Coral+-+CEP+88523-000",
        linkContato: "https://api.whatsapp.com/send?phone=554937061400",
        rotuloImagem: "Foto da unidade em Lages"
      },
      {
        id: "rio-do-sul",
        nome: "Rio do Sul - SC",
        selo: "Unidade",
        x: 76.6,
        y: 37,
        descricao: "Unidade da Transportadora Fabris em Rio do Sul, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "Emílio Trevisani, 37 - Bairro Barra Itoupava - CEP 89140-000",
        telefone: "(47) 98848-1284",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Rio+do+Sul+-+SC%2C+Em%C3%ADlio+Trevisani%2C+37+-+Bairro+Barra+Itoupava+-+CEP+89140-000",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em Rio do Sul"
      },
      {
        id: "blumenau",
        nome: "Blumenau - SC",
        selo: "Unidade",
        x: 95,
        y: 28.4,
        descricao: "Unidade da Transportadora Fabris em Blumenau, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "Gustavo Henshel, 450 - Bairro Itoupavazinha - CEP 89066-060",
        telefone: "(47) 3339-0780",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Blumenau+-+SC%2C+Gustavo+Henshel%2C+450+-+Bairro+Itoupavazinha+-+CEP+89066-060",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em Blumenau"
      },
      {
        id: "jaragua-do-sul",
        nome: "Jaraguá do Sul - SC",
        selo: "Unidade",
        x: 87,
        y: 15.8,
        descricao: "Unidade da Transportadora Fabris em Jaraguá do Sul, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "SC 108 Emílio Manke Junior, 80 - Bairro Centro - CEP 89270-000",
        telefone: "(47) 99674-0255 / (47) 99131-3596",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Jaragu%C3%A1+do+Sul+-+SC%2C+SC+108+Em%C3%ADlio+Manke+Junior%2C+80+-+Bairro+Centro+-+CEP+89270-000",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em Jaraguá do Sul"
      },
      {
        id: "sao-bento-do-sul",
        nome: "São Bento do Sul - SC",
        selo: "Unidade",
        x: 81.4,
        y: 8.8,
        descricao: "Unidade da Transportadora Fabris em São Bento do Sul, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "Rua Alfredo Zierhut, 216 - Barracão 3 - Bairro Cruzeiro - CEP 89286-350",
        telefone: "(47) 99177-7887",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=S%C3%A3o+Bento+do+Sul+-+SC%2C+Rua+Alfredo+Zierhut%2C+216+-+Barrac%C3%A3o+3+-+Bairro+Cruzeiro+-+CEP+89286-350",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em São Bento do Sul"
      },
      {
        id: "joinville",
        nome: "Joinville - SC",
        selo: "Unidade",
        x: 96,
        y: 10.3,
        descricao: "Unidade da Transportadora Fabris em Joinville, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "Dorothovio do Nascimento, 1130 - Bairro Jardim Sofia - CEP 89223-600",
        telefone: "(47) 3467-4641 / (47) 99679-9677",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Joinville+-+SC%2C+Dorothovio+do+Nascimento%2C+1130+-+Bairro+Jardim+Sofia+-+CEP+89223-600",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em Joinville"
      },
      {
        id: "palhoca",
        nome: "Palhoça - SC",
        selo: "Unidade",
        x: 100,
        y: 49.9,
        descricao: "Unidade da Transportadora Fabris em Palhoça, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "BR 101, 412 - Bairro Centro - CEP 88130-050",
        telefone: "(48) 3083-7050",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Palho%C3%A7a+-+SC%2C+BR+101%2C+412+-+Bairro+Centro+-+CEP+88130-050",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em Palhoça"
      },
      {
        id: "tubarao",
        nome: "Tubarão - SC",
        selo: "Unidade",
        x: 92,
        y: 74.2,
        descricao: "Unidade da Transportadora Fabris em Tubarão, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "Marques Pinto, 460 - Bairro Humaitá de Cima - CEP 88708-230",
        telefone: "(48) 3053-0722 / (48) 3053-1761 / (48) 3053-1642 / (48) 98817-4188",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Tubar%C3%A3o+-+SC%2C+Marques+Pinto%2C+460+-+Bairro+Humait%C3%A1+de+Cima+-+CEP+88708-230",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em Tubarão"
      },
      {
        id: "criciuma",
        nome: "Criciúma - SC",
        selo: "Unidade",
        x: 87,
        y: 83,
        descricao: "Unidade da Transportadora Fabris em Criciúma, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "Rod. Luiz Rosso, 4900 - Bairro Morro Estevão - CEP 88803-470 - Anexo ao Posto Cirimbelli",
        telefone: "(48) 99931-9802 / (48) 99632-1320 / (48) 99660-0235 / (48) 99151-5294",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Crici%C3%BAma+-+SC%2C+Rod.+Luiz+Rosso%2C+4900+-+Bairro+Morro+Estev%C3%A3o+-+CEP+88803-470+-+Anexo+ao+Posto+Cirimbelli",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em Criciúma"
      },
      {
        id: "curitibanos",
        nome: "Curitibanos - SC",
        selo: "Cidade atendida",
        x: 57.0,
        y: 40.5,
        descricao: "Ponto de atendimento operacional em Curitibanos. Endereço específico a confirmar com a equipe da Transportadora Fabris.",
        endereco: "Informações de endereço a confirmar com a equipe operacional",
        telefone: "(49) 3706-1400",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Curitibanos+-+SC%2C+Informa%C3%A7%C3%B5es+de+endere%C3%A7o+a+confirmar+com+a+equipe+operacional",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto/placeholder do atendimento em Curitibanos"
      }
    ]
  },
  {
    id: "rs",
    titulo: "Rio Grande do Sul",
    subtitulo: "2 unidades/pontos de atendimento",
    chamada: "Atuação regional",
    imagem: "assets/img/mapa-rs.png",
    alt: "Mapa do Rio Grande do Sul",
    unidades: [
      {
        id: "caxias-do-sul",
        nome: "Caxias do Sul - RS",
        selo: "Unidade",
        x: 73.0,
        y: 33.6,
        descricao: "Unidade da Transportadora Fabris em Caxias do Sul, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "Domingos Cheis, 1403 - Bairro Inter Lagos - CEP 95052-160",
        telefone: "(54) 3238-1096",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Caxias+do+Sul+-+RS%2C+Domingos+Cheis%2C+1403+-+Bairro+Inter+Lagos+-+CEP+95052-160",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em Caxias do Sul"
      },
      {
        id: "vacaria",
        nome: "Vacaria - RS",
        selo: "Unidade",
        x: 73.5,
        y: 25.8,
        descricao: "Unidade da Transportadora Fabris em Vacaria, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "Luiz Marcantonio, 90 - Bairro Santa Terezinha - CEP 95201-020",
        telefone: "(54) 3232-4088",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Vacaria+-+RS%2C+Luiz+Marcantonio%2C+90+-+Bairro+Santa+Terezinha+-+CEP+95201-020",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em Vacaria"
      }
    ]
  },
  {
    id: "sp",
    titulo: "São Paulo",
    subtitulo: "1 unidade/ponto de atendimento",
    chamada: "Unidade estratégica",
    imagem: "assets/img/mapa-sp.png",
    alt: "Mapa de São Paulo",
    unidades: [
      {
        id: "sao-paulo",
        nome: "São Paulo - SP",
        selo: "Unidade",
        x: 85,
        y: 65,
        descricao: "Unidade da Transportadora Fabris em São Paulo, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "Soldado Antônio Aparecido, 20 - Bairro Parque Novo Mundo - CEP 02187-020",
        telefone: "(11) 2631-6599 / (11) 2631-6697",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=S%C3%A3o+Paulo+-+SP%2C+Soldado+Ant%C3%B4nio+Aparecido%2C+20+-+Bairro+Parque+Novo+Mundo+-+CEP+02187-020",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em São Paulo"
      }
    ]
  },
  {
    id: "pr",
    titulo: "Paraná",
    subtitulo: "1 unidade/ponto de atendimento",
    chamada: "Atuação regional",
    imagem: "assets/img/mapa-pr.png",
    alt: "Mapa do Paraná",
    unidades: [
      {
        id: "uniao-da-vitoria",
        nome: "União da Vitória - PR",
        selo: "Unidade",
        x: 53.0,
        y: 69.0,
        descricao: "Unidade da Transportadora Fabris em União da Vitória, com atendimento operacional para cargas, coletas, entregas e suporte às rotas da região.",
        endereco: "Astolfo Macedo de Souza, 87 - Bairro Centro - CEP 84600-001",
        telefone: "(42) 3522-9298",
        horario: "Atendimento conforme operação",
        linkMapa: "https://www.google.com/maps/search/?api=1&query=Uni%C3%A3o+da+Vit%C3%B3ria+-+PR%2C+Astolfo+Macedo+de+Souza%2C+87+-+Bairro+Centro+-+CEP+84600-001",
        linkContato: "index.html#fale-conosco",
        rotuloImagem: "Foto da unidade em União da Vitória"
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
  "uniao-da-vitoria": [
    "Bituruna",
    "Crus Machado",
    "General Carneiro",
    "Paula Freitas",
    "Paulo Frontin",
    "Porto Uniao",
    "Porto Vitoria",
    "Uniao da Vitoria"
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
