function parOuImpar(vetor){
    let par = 0
    let impar = 0
    for(i in vetor){
        if(vetor[i]%2==0){
            par++
        }else{
            impar++
        }
    }console.log(`${par} numeros pares e ${impar} numeros imapares`) 
}



parOuImpar([5, 8, 6, 3, 42, 51, 60, 0])
