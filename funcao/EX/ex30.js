function verificaVetor(vetor){
    vetor.sort((a, b) => a-b)
    vetor
    maior = vetor[vetor.length -1]
    console.log(`O menor numero è ${vetor[0]} e o maior numero è ${maior}`)
}

verificaVetor([4, 1, 5, 85, 23, 10, 9, 10, 100])