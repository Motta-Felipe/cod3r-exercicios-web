function verificaIntervalo(vetor){
    dentroIntervalo = 0
    foraIntervalo = 0
    for(i in vetor){
        if(vetor[i]>=10 && vetor[i]<=20){
            dentroIntervalo++
        }else{
            foraIntervalo++
        }
    }console.log(`${dentroIntervalo} numeros dentro do intervalo [10, 20] e ${foraIntervalo} nuemros fora do intervalo`)

}
numeros = [10, 2, 18, 4, 16, 17, 4]
verificaIntervalo(numeros)