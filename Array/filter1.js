const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPAd Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.99, fragil: true},
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

// normal
// console.log(produtos.filter(function(p){
//     return p.preco > 500
// }).filter(function(p){
//     return p.fragil == true
// }))

//com aeron function

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil //== true (nao presa por pq o retorno implicito ja è true o false)
resultado = produtos.filter(caro).filter(fragil)

console.log(resultado)