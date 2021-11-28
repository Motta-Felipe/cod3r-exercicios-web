// Arrow Function (sao sempre anonimas) atribui a uma variavel ou contasnte
const soma = (a, b) => a + b
console.log(soma(2, 3))

//Arrow Function (this), this aponta para exports, numa funcao normal depende do contexto
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametros default
function log(texto = 'Node'){
    console.log(texto)
}

log()
log('sou mais forte')

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))