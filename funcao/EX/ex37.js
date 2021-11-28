function progressaoAritimetica(n, a1, r) {
    console.log(`Progressao Aritimetica de ${n} termos`)
    let soma =0
    for (i= 0; i < n; i++) {
        console.log(`A${i+1} = ${a1}`)
        soma +=a1
        a1 += r
    }console.log(`Soma de todos os termos: ${soma}`)
}

function progressaoGeometrica(n, a1, r) {
    console.log(`Progressao geometrica de ${n} termos`)
    let soma = 0
    for (i= 0; i < n; i++) {
        console.log(`A${i+1} = ${a1}`)
        soma +=a1
        a1 *= r
        
    }console.log(`Soma de todos os termos: ${soma}`)
}



progressaoAritimetica(6, 6, 2)
console.log('----------------');
progressaoGeometrica(10, 2, 2)