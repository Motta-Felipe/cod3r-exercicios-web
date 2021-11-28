function TrocaVetor(vetorA, vetorB){
    console.log(vetorA);
    [vetorA, vetorB] = [vetorB, vetorA]
    console.log(`VetorA:${vetorA}, VetorB:${vetorB}`)
    console.log(vetorA)
}
TrocaVetor(['A','B','C','D','E'],[1,2,3,4,5])