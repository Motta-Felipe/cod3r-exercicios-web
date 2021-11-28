class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar  (){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()
console.log(p1.nome)


function criarP(nome){
    

    this.fal = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}



const criarPessoa = nome => {
    return{
        falar:() => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Joao')
p2.falar()
