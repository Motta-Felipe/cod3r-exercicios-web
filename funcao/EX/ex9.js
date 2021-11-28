function nota(n){
    let resto = n % 5
    let nfinal
    if(n<0 || n > 100 || !Number(n) & n !=0){
        return 'numero invalido'
    }
    else if (n <38) {
        return `Reprovado com ${n}`
    }else if (resto > 2){
        nfinal = n + (5-resto)
        return `Aprovado com ${nfinal}`
    }else {
        return `Aprovado com ${n}`
    }
    
    
}


console.log(nota(37.9))
console.log(nota(101))
console.log(nota(-1))
console.log(nota('dasd'))
console.log(nota(51.2465465))
console.log(nota('0'))