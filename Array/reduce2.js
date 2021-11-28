const alunos = [
    {nome:'Joao,', nota: 7.3, bolsista: false},
    {nome:'Maria,', nota: 9.2, bolsista: true},
    {nome:'Pedro,', nota: 9.8, bolsista: false},
    {nome:'Ana,', nota: 8.7, bolsista: true}
]

//Desafio1: Todos os alunos sao bolsista?
const qtdBolsista = alunos.map(a => a.bolsista).reduce(function(somador, atual){
return somador + atual
}) 
console.log(qtdBolsista == alunos.length ? true : false)

//Desafio 2: Algum aluno é bolsista
    console.log(qtdBolsista >=1  ? true : false)
    