function contaNegativos(vetor) {
    let qtdNegativos = 0
    for (i in vetor) {
        if (vetor[i] < 0) {
            qtdNegativos++
        }
    } console.log(qtdNegativos)

}

contaNegativos([8, -1, -8, 4, 6, 15, -7, -3, -6])