const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado:"Você gosta da Ia (Inteligência artificial)?",
        alternativas:[{
            texto:"Sim", "Não"]
    },
    {
        enunciado:"Você acha que as Ia, representam alguma ameaça a comunidade?",
        alternativas:["Sim", "Não"]
    },
    {
        enunciado:"Você usa a Ia frequentemente?",
        alternativas:["Sim", "Não"]
    }
]
let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
        perguntaAtual = perguntas[posicao];
        caixaPergunta.textContent = perguntaAtual.enunciado;

}
function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("buuton");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativa.appendChild(botaoAlternativas);

    }  
}
mostraPergunta();