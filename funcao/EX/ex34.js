function compareStrings(string1, string2) {

    let maior
    if(string1.length>=string2.length){
        maior = string1.toUpperCase()
        menor = string2.toUpperCase()
    }else{
        maior = string2.toUpperCase()
        menor = string1.toUpperCase()
    }

    for (i = 0; i < maior.length; i++) {
        a = maior.charAt(i)
        b = menor.charAt(i)
        if (menor.indexOf(a) == -1 || maior.indexOf(b)== -1) {
            resultado = false
            i = maior.length
        } else {
            resultado = true
        }

    }return resultado
}

console.log(compareStrings("testeS", "tEst"))