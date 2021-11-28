
function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.2,
        precoFinal: 0.8 * Number(preco)
    }
}

console.log(criarProduto('Felipe', 1000))