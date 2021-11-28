function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2) //todo numero elevado a 0 = 1
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(1, 800))