//Closure é o escopo criado quando uma funcao e declarada
//Esse escopo permite a funcao  acessar e manipular variaveis externas a funcao

//contesxto lexico em acao!

const x = 'GLobal'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())

