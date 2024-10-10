const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você gosta da Inteligência Artificial?",
        alternativas: [{
            texto: "Sim",
            afirmação: "É top"
        },
        {
            texto: "Não",
            afirmação: "Minha mãe não deixa eu usar"
        }
        ]
    },
    {
        enunciado: "Você usa a Ia diariamente?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Colo nas prova com ela"
        },
        {
            texto:"Não",
            afirmação:"Eu estudo"
        }
        ]
    },
    {
        enunciado: "A Ia vai dominar o mundo?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Obviamente"
        },
        {
            texto: "Não",
            afirmação: "Não ne mongol"
        }
        ]
    }
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas..";
    textoResultado.textContent = respostas;
    caixaAlternativa.textContent = ""
}
mostraPergunta();
