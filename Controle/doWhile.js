function getInteiroAleatorioEntre (min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opçao escolhida foi ${opcao}.`)
}while (opcao != -1)

console.log('até a Proxima')



//meu experimento
// A = Math.random() * 5
// console.log(A, A*5, Math.floor(A))