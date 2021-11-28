function multiplicaVetor1(vetor, inteiro) {
    let vetorResultado = []
    for (i in vetor) {
        vetorResultado.push(vetor[i] * inteiro)

    } console.log(vetorResultado)
}

multiplicaVetor1([5, 3, 9, 7, 6, 4,], 5)

function multiplicaVetor2(vetor, inteiro) {
    let vetorResultado = []
    for (i in vetor) {
        if (vetor[i] > 5) {
            vetorResultado.push(vetor[i] * inteiro)
        }
    } console.log(vetorResultado)
}

multiplicaVetor2([5, 3, 9, 7, 6, 4,], 5)