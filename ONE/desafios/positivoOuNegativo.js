let numero;
let escolha = true;

do {
    numero = prompt("DESAFIO 2\nDigite um número qualquer ou escreva 'sair' para terminar o programa")


    if (numero === "sair") {
        escolha = false;
        alert("Obrigado por utilizar o programa 2")
    }

    if (parseInt(numero) > 0) {
        alert(`O número digitado: ${numero} é positivo`)
    } else if (parseInt(numero) < 0) {
        alert(`O número digitado: ${numero} é negativo`)
    } else if (parseInt(numero) == 0) {
        alert(`O número digitado: ${numero} é zero`)

    }
} while (escolha)