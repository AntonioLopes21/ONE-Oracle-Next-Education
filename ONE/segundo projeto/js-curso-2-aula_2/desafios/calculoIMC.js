//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularIMC(alturaEmMetros, pesoEmKG) {
    console.log(`Altura em metros: ${alturaEmMetros}\nPeso em KG: ${pesoEmKG}`)

    let IMC = pesoEmKG/(alturaEmMetros*alturaEmMetros)

    return `Cálculo do IMC: ${IMC.toFixed(2)}`
}

console.log(calcularIMC(1.80, 80))