const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é poluição ambiental?",
        alternativas: [
            {
                texto: "Modificacoes prejudiciais que ocorrem no meio ambiente",
                afirmacao: "jogar lixo no mar"
            },
            {
            }
        ]
    },
    {
        enunciado: "Quais são os tipo de poluição ambiental?",
        alternativas: [
            {
                texto: "Poluicao atmosferica, poluicao hidrica, poluicao do solo, poluicao termica, poluicao sonora e visual.",
                afirmacao: "cuidar da aguá,não jogar lixo no chão etc..."
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "A poluição da água, muitas vezes, é confundida com sua contaminação. Analise as alternativas a seguir e marque aquela que melhor indica a definição de água poluída",
        alternativas: [
            {
                texto: "Água poluída é aquela que possui alterações em suas características químicas e físicas, tais como mudanças no cheiro, cor e sabor.",
            
            },
            {
                texto: "Água poluída é aquela que apresenta organismos vivos, tais como vermes e protozoários.",
            
            }
        ]
    },
    {
        enunciado: "Nos últimos anos, observa-se um aumento crescente do percentual de CO2 na atmosfera. Entre outros efeitos, o excesso de CO2 pode contribuir para:",
        alternativas: [
            {
                texto: " aquecimento global."
                afirmacao: "diminuição da fotossíntese."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
