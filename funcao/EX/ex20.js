function calculaNotas(valor) {
    let quantidade = ''
    while (valor > 0) {
        if (valor >= 100) {
            quantidade = `${Math.floor(valor / 100)} notas de R$ 100 `
            valor %= 100
        } else if (valor >= 50) {
            quantidade += `${Math.floor(valor / 50)} notas de R$ 50. `
            valor %= 50
        } else if (valor >= 10) {
            quantidade += `${Math.floor(valor / 10)} notas de R$ 10. `
            valor %= 10
        } else if (valor >= 5) {
            quantidade += `${Math.floor(valor / 5)} notas de R$ 5. `
            valor %= 5
        } else if (valor >= 1) {
            quantidade += `${Math.floor(valor / 1)} notas de R$ 1. `
            valor %= 1
        } else if (valor != 0) {
            quantidade = 'Valor invalido'
        }
    }
    console.log(quantidade)
}

calculaNotas(825)



//outra solucao aluno udemy

function contaCedulas(valor) {
    const cedulas = [100, 50, 10, 5, 1]
    let qtdeCedulas = 0
    let valorSubtraido
    let resultado = ''
    for (let i in cedulas) {
        if (valor >= cedulas[i]) {
            qtdeCedulas = (valor - (valor % cedulas[i])) / cedulas[i]
            valorSubtraido = valor - (valor % cedulas[i])
            valor -= valorSubtraido
            resultado += ` ${qtdeCedulas} de R$${cedulas[i]} `
        }
 
    }
    return resultado
}


console.log(contaCedulas(158))