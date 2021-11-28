//pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pesso -> 456 -> {...}
//pessoa = { nome: 'Ana'}

Object.freeze(pessoa)//bloqueia a alteracao dos atributos do objeto


pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome:'Joao'})
console.log(pessoaConstante)
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)