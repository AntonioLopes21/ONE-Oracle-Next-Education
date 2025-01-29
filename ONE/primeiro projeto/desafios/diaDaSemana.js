let diaDaSemana;
let resposta = true;

do {
    diaDaSemana = parseInt(prompt("DESAFIO 1\nDigite o dia da semana (entre 1-7 e respectivamente iniciando com o domingo) ou digite 0 para sair do programa:"))

    switch (diaDaSemana) {
        //essa é a opção de parar o programa.
        case 0:
            alert("Muito obrigado por utilizar o programa! volte sempre")
            resposta = false;
            break;
        case 1:
            alert("Hoje é domingo!")
            break;
        case 2:
            alert("Hoje é segunda-feira!")
            break;
        case 3:
            alert("Hoje é terça-feira!")
            break;
        case 4:
            alert("Hoje é quarta-feira!")
            break;
        case 5:
            alert("Hoje é quinta-feira!")
            break;
        case 6:
            alert("Hoje é sexta-feira!")
            break;
        case 7:
            alert("Hoje é sábado!")
            break;

    }
} while (resposta)