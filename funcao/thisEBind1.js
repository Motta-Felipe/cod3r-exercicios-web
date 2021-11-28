const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
        
    }
}

pessoa.falar()
const falare = pessoa.falar

falare()// conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
