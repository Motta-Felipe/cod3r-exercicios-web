function calculadora(n1 = 1, op, n2 = 1) {
    switch (op) {
        case "+":
           return n1 + n2
            break
        case "-":
           return n1 - n2
            break
        case "*":
           return n1 * n2
            break
        case "/":
           return n1 / n2
            break
        default:
           return "operacao invalida"
    }
}

console.log(calculadora(10, '+', 8))
console.log(calculadora(10, '-', 8))
console.log(calculadora(10, '*', 8))
console.log(calculadora(10, '/', 8))
console.log(calculadora(1, '4', 8))