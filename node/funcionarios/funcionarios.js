const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

//obter mulher chinesa com menor salario

const chinesa = funcionario => funcionario.pais == 'China'
const mulheres = funcionario => funcionario.genero == 'F'
mulheresChinesas = funcionarios.filter(chinesa).filter(mulheres)
let chinesaMaisPobre = mulheresChinesas.reduce(function(menorSalario, salarioAtual){
    if(salarioAtual.salario < menorSalario.salario){
        menorSalario = salarioAtual
    } return menorSalario
})
console.log(chinesaMaisPobre)
})