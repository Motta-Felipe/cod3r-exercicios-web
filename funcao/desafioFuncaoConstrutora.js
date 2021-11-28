function Meunome(nome){
    this.nome = nome

    this.falar = function () {
        return console.log(`Meu nome é ${this.nome}`)
    }
}

nome1 = new Meunome('felipe')
nome1.falar()

nome2 = new Meunome('Joao')

nome2.falar()

console.log(nome2.nome)