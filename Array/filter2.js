Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        } 
    }return newArray
}


const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPAd Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.99, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false }
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil //== true (nao presa por pq o retorno implicito ja è true o false)
resultado = produtos.filter2(caro).filter2(fragil)

console.log(resultado)