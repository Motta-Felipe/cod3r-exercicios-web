function imprimeImpar (inicio = 0, fim = 100) {
if(inicio > fim) [inicio, fim] = [fim, inicio] 
    for (i = inicio; i <= fim; i++) {
        if (i%2 !=0){
            console.log(i)
        }
    }
}
imprimeImpar(39, 9)