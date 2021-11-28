let stringPontuacoes = "10, 20, 20, 8, 25, 2, 0, 30, 1"
 
 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = Number(pontuacoes[0])
    let menorPontuacao = Number(pontuacoes[0])

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = Number(pontuacoes[i])
            qtdQuebraDeRecords++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = Number(pontuacoes[i])
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo, maiorPontuacao]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))