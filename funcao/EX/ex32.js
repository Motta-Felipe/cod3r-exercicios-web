function calculaMedia(vetor){
   let somaVetor = 0
    for(i in vetor){
        somaVetor += vetor[i]
    }
    console.log((somaVetor/vetor.length).toFixed(2))
}


calculaMedia([4,5,6,8,7,9,10,2])