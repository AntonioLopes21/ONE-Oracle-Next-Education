let numeroSecreto = gerarNumeroAleatorio();
let contador = 1;
console.log(numeroSecreto)

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR';
        utterance.rate = 1.3;
        window.speechSynthesis.speak(utterance);
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}


function verificarChute() {
    let chute = document.querySelector('input').value;
    let tentativa;

    //verificação da tentativa
    tentativa = contador > 1 ? 'tentativas' : 'tentativa'


    if (chute == numeroSecreto) {
        exibirTextoNaTela('p', `Você acertou o número secreto:${numeroSecreto} após ${contador} ${tentativa}`)

        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {

        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O chute foi maior que o número secreto.')

        } else if (chute < numeroSecreto) {
            exibirTextoNaTela('p', 'O chute foi menor que o número secreto.')
        }
        contador++;
        limparCampo()
    }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = ''
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

const reiniciarJogo = () => {
    gerarNumeroAleatorio()
    limparCampo()
    contador = 1;
    mensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}


