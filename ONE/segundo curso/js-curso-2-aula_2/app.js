let numeroSecreto = gerarNumeroAleatorio();
let contador = 1;
console.log(numeroSecreto)

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    let tentativa;

    //verificação da tentativa
    tentativa = contador > 1? 'tentativas': 'tentativa'


    if(chute == numeroSecreto) {
        exibirTextoNaTela('p', `Você acertou o número secreto:${numeroSecreto} após ${contador} ${tentativa}`)
    } else {
        contador++

        if(chute > numeroSecreto) {
            contador++;

            exibirTextoNaTela('p', 'O chute foi maior que o número secreto.')
        } else if(chute < numeroSecreto) {
            contador++;

            exibirTextoNaTela('p', 'O chute foi menor que o número secreto.')
        } else {
            exibirTextoNaTela('h1', 'Você acertou!')
            exibirTextoNaTela('p', `Você acertou o número secreto:${numeroSecreto} após ${contador} tentativas`)
        }
    }



}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}











