const imprimirResultado = function (nota) {
    if (nota >= 7){
        console.log('aprovado!')   
        console.log(typeof nota) 
    } else {
        console.log('Reprovado!')   
    }
    
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('epa')

