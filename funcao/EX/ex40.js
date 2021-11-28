function notaConceito(vetorNotas) {
    for (i in vetorNotas) {
        if (vetorNotas[i] < 5) {
            console.log(`${vetorNotas[i]} : D`)
        } else if (vetorNotas[i] < 7) {
            console.log(`${vetorNotas[i]} : C`)

        } else if (vetorNotas[i] < 9) {
            console.log(`${vetorNotas[i]} : B`)

        }else{
            console.log(`${vetorNotas[i]} : A`)
        }
    }
}

notaConceito([8, 7.5, 8.6, 10, 3, 6.4])