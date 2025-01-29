let numeroSecreto = 2;
let numeroChute;

do {
    numeroChute = parseInt(prompt('Digite um número entre 1 e 10'))

    if(numeroChute > numeroSecreto) {
        alert("você errou. tente mais para baixo")
    } else if (numeroChute < numeroSecreto) {
        alert("Você errou. tente mais para cima")
    } else {
        alert("isso mesmo! você acertou")
    }

} while (numeroChute != numeroSecreto)