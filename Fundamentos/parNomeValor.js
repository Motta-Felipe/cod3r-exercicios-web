const saudacao ="opa" //contexto Lexico

function exec() {
    const saudacao = "falaaaa" //constexto lexico 2
    return saudacao 

}

//objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "RUa Muito LEgal",
        numero:123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)