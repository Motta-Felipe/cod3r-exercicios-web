function valorPlano(idade) {
    let fixo = 100
    if (idade > 60) {
        return fixo + 130
    } else if (idade > 30) {
        return fixo + 95
    } else if (valor >= 10) {
        return fixo + 50
    } else {
        return fixo + 80
    }
}
console.log(valorPlano(61))