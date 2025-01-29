function fatorial(valor) {
    let fat = 1;
    let respostaFatorial = `O fatorial de ${valor} é: ${fat}`

    if(valor === 0) {
        fat = 1
        return `O fatorial de ${valor} é: ${fat}`; 
    } else {
        for (let contador = valor; contador > 0; contador--) {
            fat *= contador
            
        }
        return `O fatorial de ${valor} é: ${fat}`; // Retorna o resultado final
    }
}

console.log(fatorial(3))