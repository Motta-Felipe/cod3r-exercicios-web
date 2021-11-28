function dia(d) {

    switch (d) {
        case 1:
        case 7:
            return 'weekend'

            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Dia da semana'

            break;

        default:
            return 'dia invalido'
            break;
    }

}

console.log(dia(1))
console.log(dia(2))
console.log(dia(3))
console.log(dia(4))
console.log(dia(5))
console.log(dia(6))
console.log(dia(7))
console.log(dia("jklj"))