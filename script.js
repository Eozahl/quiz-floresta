const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acredita que o desmatamento florestal pode ser justificado se houver benefícios econômicos significativos, ou a preservação ambiental deve ser prioritária?",
        alternativas: [
            {
                texto: "Sim, se isso impulsionar a economia local.",
                afirmacao: "Desmatamento florestal é justificado dependendo da verba."
            },
            {
                texto: "Não, a preservação ambiental deve ser a prioridade máxima.",
                afirmacao: "Desmatamento florestal não é justificado, independente do dinheiro."
            }
        ]
    },
    {
        enunciado: "Na sua opinião, o desmatamento para abrir espaço para agricultura é aceitável se garantir a segurança alimentar de uma população, ou deveríamos buscar alternativas que não envolvam destruição de florestas?",
        alternativas: [
            {
                texto: "Sim, garantir comida é crucial para a sobrevivência.",
                afirmacao: "Desmatamento florestal é justificado dependendo do alimento."
            },
            {
                texto: "Não, há maneiras mais sustentáveis de alcançar segurança alimentar.",
                afirmacao: "Desmatamento florestal não é justificado, independente se alimenta."
            }
        ]
    },
    {
        enunciado: "Você acha que o desmatamento é um preço aceitável a pagar pelo desenvolvimento econômico, ou deveríamos buscar desenvolvimento sustentável que preserve os recursos naturais?",
        alternativas: [
            {
                texto: "Sim, o desenvolvimento econômico é essencial para o progresso.",
                afirmacao: "Desmatamento florestal é justificado dependendo do desenvolvimento econômico."
            },
            {
                texto: "Não, devemos priorizar um desenvolvimento que não comprometa o meio ambiente.",
                afirmacao: "Desmatamento florestal não é justificado, independente do crescimento da economia."
            }
        ]
    },
    {
        enunciado: "Escolha seu Deus",
        alternativas: [
            {
                texto: "A economia é quem me nutre.",
                afirmacao: "Puta que pariu, eu amo a economia."
            },
            {
                texto: "O homem nasceu do barro da floresta.",
                afirmacao: "Puta que pariu, eu amo a floresta amazônica."
            }
        ]
    },
    {
        enunciado: "Prezados colaboradores, a partir deste momento, todos os membros da equipe devem aderir estritamente aos protocolos de segurança da informação sob pena de medidas disciplinares severas. Vocês têm duas opções: alinhar-se imediatamente às diretrizes estabelecidas ou enfrentar as consequências de não cumprir com as políticas estabelecidas. A escolha é de vocês, mas lembrem-se, a integridade dos nossos dados não é negociável.",
        alternativas: [
            {
                texto: "OK.",
                afirmacao: "Sou um colaborador."
            },
            {
                texto: "Quero falar com o gerente.",
                afirmacao: "Sou um rebelde."
            }
        ]
    },
    {
        enunciado: "Você acredita que o desmatamento pode ser mitigado com práticas de reflorestamento e manejo sustentável, ou é um problema que precisa de soluções mais drásticas e imediatas?",
        alternativas: [
            {
                texto: "Sim, com reflorestamento podemos compensar o que foi perdido.",
                afirmacao: "Dá pra plantar tudo denovo mesmo."
            },
            {
                texto: "Não, precisamos de ações mais urgentes para deter o desmatamento.",
                afirmacao: "Reflorestamento ajuda mas é melhor se não desmatarem."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em minha opinião...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
