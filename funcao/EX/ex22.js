function valorMensalidade(mes, valor){
    if (mes == 1){
        return mes
    } else{
        return valor * (1 + 0.05)**(mes-1)
    }
}

console.log(valorMensalidade(1, 180))
console.log(valorMensalidade(5, 100))