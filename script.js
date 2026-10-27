//  Sistema de Votação ENADE 

const BAUD_RATE = 9600;
const TEMPO_RODADA = 45;       // 45 segundos
const QUESTOES_POR_RODADA = 10;
const TEMPO_ESPERA_PROXIMA = 5; // 5 segundos antes do auto-avanço

// ---------- Elementos da página ----------
const telaInicial = document.getElementById("telaInicial");
const telaQuestoes = document.getElementById("telaQuestoes");
const telaPodio = document.getElementById("telaPodio");

const statusEl = document.getElementById("status");
const statusMiniEl = document.getElementById("statusMini");
const btnConectar = document.getElementById("conectar");
const btnDesconectar = document.getElementById("desconectar");
const btnIniciarJogo = document.getElementById("iniciarJogo");
const btnVoltar = document.getElementById("voltar");
const btnVoltarInicioPodio = document.getElementById("btnVoltarInicioPodio");
const seletorTeste = document.getElementById("participanteTeste");

const rodadaEl = document.getElementById("rodada");
const avisoEl = document.getElementById("aviso");
const tempoEl = document.getElementById("tempo");
const barraTempoEl = document.getElementById("barraTempo");
const btnIniciarTempo = document.getElementById("iniciarTempo");
const btnProxima = document.getElementById("proxima");

const progressoEl = document.getElementById("progresso");
const tituloEl = document.getElementById("tituloQuestao");
const enunciadoEl = document.getElementById("enunciado");
const perguntaEl = document.getElementById("pergunta");
const botoesAlternativa = document.querySelectorAll(".alternativa");

document.getElementById("duracaoTexto").textContent = TEMPO_RODADA;

// ---------- Estado do jogo ----------
let questoesRodadaAtual = [];
const respostas = [null, null, null];
const pontos = [0, 0, 0];

let fase = "aguardando";
let indiceQuestao = 0;
let vencedorRodada = null;
let fimDoTempo = 0;
let temporizador = null;
let temporizadorAutoAvanco = null;

// ---------- Estado da conexão serial ----------
let porta = null;
let leitor = null;
let fimDoPipe = null;
let conexaoAtiva = false;
let fechando = false;

// Função utilitária para embaralhar array (Fisher-Yates) e pegar 10 aleatórias
function selecionarQuestoesAleatorias() {
  const copia = [...BANCO_QUESTOES];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia.slice(0, QUESTOES_POR_RODADA);
}


//  Telas

function mostrarTela(nome) {
  telaInicial.hidden = nome !== "inicial";
  telaQuestoes.hidden = nome !== "questoes";
  telaPodio.hidden = nome !== "podio";
}

function iniciarJogo() {
  pararTemporizador();
  limparAutoAvanco();
  pontos.fill(0);
  questoesRodadaAtual = selecionarQuestoesAleatorias();
  atualizarPlacar();
  mostrarTela("questoes");
  carregarQuestao(0);
  iniciarTempo();
}

function voltarAoInicio() {
  pararTemporizador();
  limparAutoAvanco();
  mostrarTela("inicial");
}

//  Status do Arduino

function mostrarStatus(texto, tipo) {
  statusEl.textContent = texto;
  statusEl.className = "status " + tipo;

  const curto = {
    conectado: "Arduino conectado",
    desconectado: "Arduino desconectado",
    erro: "Arduino com problema"
  };
  statusMiniEl.textContent = curto[tipo];
  statusMiniEl.className = "status-mini " + tipo;
}

function atualizarBotoesConexao(conectado) {
  btnConectar.disabled = conectado;
  btnDesconectar.disabled = !conectado;
}

//  Questão e placar

function mostrarAviso(texto, tipo) {
  avisoEl.textContent = texto;
  avisoEl.className = "aviso " + (tipo || "");
}

function atualizarPlacar() {
  pontos.forEach((p, i) => {
    document.querySelector("#participante" + (i + 1) + " .pontuacao").textContent = p;
  });
}

function listaDeParticipantes(numeros) {
  const nomes = numeros.map(n => "Participante " + n);
  if (nomes.length === 1) return nomes[0];
  return nomes.slice(0, -1).join(", ") + " e " + nomes[nomes.length - 1];
}

function atualizarAlternativas() {
  const revelar = fase === "encerrada" || fase === "final";
  const correta = questoesRodadaAtual[indiceQuestao].correta;

  botoesAlternativa.forEach(botao => {
    const opcao = Number(botao.dataset.opcao);
    const marcadores = botao.querySelector(".marcadores");
    marcadores.innerHTML = "";

    let alguemEscolheu = false;

    respostas.forEach((resposta, i) => {
      if (resposta === opcao) {
        alguemEscolheu = true;
        const etiqueta = document.createElement("span");
        etiqueta.className = "marcador";
        etiqueta.textContent = "P" + (i + 1);

        if (revelar) {
          etiqueta.classList.add(opcao === correta ? "certa" : "errada");
        }
        marcadores.appendChild(etiqueta);
      }
    });

    botao.classList.toggle("selecionada", alguemEscolheu);
    botao.classList.toggle("correta-destaque", revelar && opcao === correta);
  });
}

function carregarQuestao(indice) {
  limparAutoAvanco();
  indiceQuestao = indice;
  const questao = questoesRodadaAtual[indice];

  progressoEl.textContent = "Questão " + (indice + 1) + " de " + questoesRodadaAtual.length;
  tituloEl.textContent = "Questão " + (indice + 1) + " — " + questao.tema;
  enunciadoEl.textContent = questao.enunciado;
  perguntaEl.textContent = questao.pergunta;

  botoesAlternativa.forEach(botao => {
    const opcao = Number(botao.dataset.opcao);
    botao.querySelector(".texto").textContent = questao.alternativas[opcao];
  });

  respostas.fill(null);
  vencedorRodada = null;
  fase = "aguardando";

  document.querySelectorAll(".participante").forEach(p => {
    p.classList.remove("respondeu", "vencedor");
  });

  pararTemporizador();
  tempoEl.textContent = TEMPO_RODADA;
  barraTempoEl.style.width = "100%";
  rodadaEl.classList.remove("urgente");

  btnIniciarTempo.hidden = true;
  btnProxima.hidden = true;

  atualizarAlternativas();
  mostrarAviso("Questão carregada! O tempo está correndo.");
}

//  Cronômetro e rodada

function pararTemporizador() {
  if (temporizador !== null) {
    clearInterval(temporizador);
    temporizador = null;
  }
}

function limparAutoAvanco() {
  if (temporizadorAutoAvanco !== null) {
    clearTimeout(temporizadorAutoAvanco);
    temporizadorAutoAvanco = null;
  }
}

function iniciarTempo() {
  if (fase !== "aguardando") return;

  fase = "andamento";
  fimDoTempo = Date.now() + TEMPO_RODADA * 1000;

  btnIniciarTempo.hidden = true;
  mostrarAviso("Tempo correndo (45s)! Respondam com os controles.");

  temporizador = setInterval(atualizarTempo, 100);
  atualizarTempo();
}

function atualizarTempo() {
  const restante = fimDoTempo - Date.now();

  if (restante <= 0) {
    encerrarRodada("Tempo esgotado!");
    return;
  }

  const segundos = Math.ceil(restante / 1000);
  tempoEl.textContent = segundos;
  barraTempoEl.style.width = (restante / (TEMPO_RODADA * 1000)) * 100 + "%";
  rodadaEl.classList.toggle("urgente", segundos <= 5);
}

function encerrarRodada(motivo = "") {
  pararTemporizador();
  fase = "encerrada";

  tempoEl.textContent = "0";
  barraTempoEl.style.width = "0%";
  rodadaEl.classList.add("urgente");

  atualizarAlternativas();

  const correta = questoesRodadaAtual[indiceQuestao].correta;
  const acertaram = [];
  respostas.forEach((r, i) => { if (r === correta) acertaram.push(i + 1); });

  let mensagemBase = motivo ? motivo + " " : "";

  if (vencedorRodada !== null) {
    mensagemBase += listaDeParticipantes([vencedorRodada]) + " acertou primeiro e ganhou o ponto.";
    const outros = acertaram.filter(n => n !== vencedorRodada);
    if (outros.length > 0) {
      mensagemBase += " Também acertaram: " + listaDeParticipantes(outros) + ".";
    }
    mostrarAviso(mensagemBase + " Avançando em 5s...", "vitoria");
  } else {
    mostrarAviso(mensagemBase + "Ninguém acertou nesta rodada. Avançando em 5s...", "empate");
  }

  // Avança automaticamente após 3 segundos
  temporizadorAutoAvanco = setTimeout(() => {
    avancar();
  }, TEMPO_ESPERA_PROXIMA * 1000);
}

function selecionarAlternativa(participante, opcao) {
  if (!Number.isInteger(participante) || participante < 1 || participante > 3) return;
  if (!Number.isInteger(opcao) || opcao < 0 || opcao > 3) return;
  if (fase !== "andamento") return;
  if (respostas[participante - 1] !== null) return;

  respostas[participante - 1] = opcao;

  const painel = document.getElementById("participante" + participante);
  painel.classList.add("respondeu");

  if (opcao === questoesRodadaAtual[indiceQuestao].correta && vencedorRodada === null) {
    vencedorRodada = participante;
    pontos[participante - 1]++;
    atualizarPlacar();
    painel.classList.add("vencedor");
  }

  atualizarAlternativas();

  const todosResponderam = respostas.every(r => r !== null);
  if (todosResponderam) {
    encerrarRodada("Todos responderam!");
  }
}

//  TELA DE PÓDIO

function dispararConfetes() {
  if (typeof confetti === 'function') {
    // Explosão central
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Rajadas das laterais
    setTimeout(() => {
      confetti({ particleCount: 50, angle: 60, spread: 55, origin: { x: 0 } });
      confetti({ particleCount: 50, angle: 120, spread: 55, origin: { x: 1 } });
    }, 250);
  }
}

function exibirPodio() {
  fase = "final";
  mostrarTela("podio");

  // Ordena os 3 participantes por pontuação (Decrescente)
  const ranking = [
    { id: 1, pontos: pontos[0] },
    { id: 2, pontos: pontos[1] },
    { id: 3, pontos: pontos[2] }
  ].sort((a, b) => b.pontos - a.pontos);

  // Preenche os dados nos degraus do Pódio (1º, 2º e 3º colocados)
  document.getElementById("podioNome1").textContent = "Participante " + ranking[0].id;
  document.getElementById("podioPontos1").textContent = ranking[0].pontos;

  document.getElementById("podioNome2").textContent = "Participante " + ranking[1].id;
  document.getElementById("podioPontos2").textContent = ranking[1].pontos;

  document.getElementById("podioNome3").textContent = "Participante " + ranking[2].id;
  document.getElementById("podioPontos3").textContent = ranking[2].pontos;

  // Dispara a animação de comemoração
  dispararConfetes();
}

function avancar() {
  limparAutoAvanco();
  if (fase === "final") {
    voltarAoInicio();
  } else if (indiceQuestao < questoesRodadaAtual.length - 1) {
    carregarQuestao(indiceQuestao + 1);
    iniciarTempo();
  } else {
    exibirPodio(); // Ao responder todas as 10 questões, direciona ao Pódio
  }
}

//  Comunicação serial

function processarLinha(linha) {
  const partes = linha.trim().split(",");
  if (partes.length !== 2) return;
  selecionarAlternativa(Number(partes[0]), Number(partes[1]));
}

async function abrirPorta(portaEscolhida) {
  porta = portaEscolhida;
  await porta.open({ baudRate: BAUD_RATE });

  conexaoAtiva = true;
  atualizarBotoesConexao(true);
  mostrarStatus("Arduino conectado com sucesso.", "conectado");

  lerDados();
}

async function lerDados() {
  const decoder = new TextDecoderStream();
  fimDoPipe = porta.readable.pipeTo(decoder.writable).catch(() => {});
  leitor = decoder.readable.getReader();

  let buffer = "";
  let erro = null;

  try {
    while (true) {
      const { value, done } = await leitor.read();
      if (done) break;
      if (!value) continue;

      buffer += value;
      const linhas = buffer.split(/\r?\n/);
      buffer = linhas.pop();
      linhas.forEach(processarLinha);
    }
  } catch (e) {
    erro = e;
  }

  if (conexaoAtiva) {
    await fecharPorta();
    mostrarStatus(erro ? "Conexão perdida: " + erro.message : "Conexão encerrada.", "erro");
  }
}

async function fecharPorta() {
  if (fechando) return;
  fechando = true;
  conexaoAtiva = false;

  try { if (leitor) await leitor.cancel(); } catch (e) {}
  try { if (fimDoPipe) await fimDoPipe; } catch (e) {}
  try { if (leitor) leitor.releaseLock(); } catch (e) {}
  try { if (porta) await porta.close(); } catch (e) {}

  porta = null;
  leitor = null;
  fimDoPipe = null;
  fechando = false;
  atualizarBotoesConexao(false);
}

async function conectar() {
  if (!("serial" in navigator)) {
    mostrarStatus("Navegador incompatível. Use Chrome ou Edge.", "erro");
    return;
  }

  try {
    const portaEscolhida = await navigator.serial.requestPort();
    await abrirPorta(portaEscolhida);
  } catch (erro) {
    if (erro.name === "NotFoundError") {
      mostrarStatus("Nenhuma porta selecionada.", "desconectado");
    } else {
      mostrarStatus("Erro ao conectar: " + erro.message, "erro");
    }
    atualizarBotoesConexao(false);
  }
}

async function desconectar() {
  await fecharPorta();
  mostrarStatus("Arduino desconectado.", "desconectado");
}

async function tentarReconectar() {
  if (!("serial" in navigator)) return;
  try {
    const portas = await navigator.serial.getPorts();
    if (portas.length > 0) await abrirPorta(portas[0]);
  } catch (erro) {}
}

//  Eventos

btnConectar.addEventListener("click", conectar);
btnDesconectar.addEventListener("click", desconectar);
btnIniciarJogo.addEventListener("click", iniciarJogo);
btnVoltar.addEventListener("click", voltarAoInicio);
btnVoltarInicioPodio.addEventListener("click", voltarAoInicio);
btnIniciarTempo.addEventListener("click", iniciarTempo);
btnProxima.addEventListener("click", avancar);

botoesAlternativa.forEach(botao => {
  botao.addEventListener("click", () => {
    selecionarAlternativa(Number(seletorTeste.value), Number(botao.dataset.opcao));
  });
});

mostrarTela("inicial");
tentarReconectar();