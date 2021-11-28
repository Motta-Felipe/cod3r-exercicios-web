function crescimento(altura1, taxa1, altura2, taxa2) {
    if (altura1 == altura2) {
        console.log('elas tem o mesmo tamanho')
    } else if (altura1 > altura2 && taxa2 > taxa1) {
        for (ano = 0; altura1 > altura2; ano++) {
            altura1 *= 1 + taxa1
            altura2 *= 1 + taxa2
            // console.log(`Ano${ano+1}; Crianca1=${altura1.toFixed(2)}cm. Crianca2=${altura2.toFixed(2)}cm`)
        } console.log(`A crianca2 levara ${ano} anos para ultrapassar a crianca 1`)
    } else if (altura2 > altura1 && taxa1 > taxa2) {
        for (ano = 0; altura2 > altura1; ano++) {
            altura1 *= 1 + taxa1
            altura2 *= 1 + taxa2

        } console.log(`A crianca 1 levara ${ano} anos para ultrapassar a crianca 2`)
    }else{
        console.log('As criancas tem tamanhos diferentes e a menor nunca ultrapassara a menor')
    }
}

crescimento(100, 0.05, 80, 0.08)
crescimento(100, 0.05, 80, 0.12)
crescimento(70, 0.05, 80, 0.12)
crescimento(70, 0.1, 80, 0.08)
crescimento(70, 0.1, 70, 0.08)