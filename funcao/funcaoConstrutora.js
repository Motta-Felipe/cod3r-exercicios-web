function Carro(velocidadeMaxima = 200, delta = 5, name='CARRO') {
    //atributo privado
    let velocidadeAtual = 0
    

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
        console.log(`acelerando ${this.getname()}  ${this.getVelocidadeAtual()}`)
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }

    this.getname = function() {return name} 
}

const uno = new Carro
uno.acelerar()


const ferrari = new Carro(350, 20, 'ferrari')
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

