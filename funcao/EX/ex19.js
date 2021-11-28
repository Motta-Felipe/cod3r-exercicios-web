function fecharConta(codigo, quantidade) {
    switch (codigo) {
        case 100:
            console.log(`Voce comprou ${quantidade} Cachorro Quente o total é: R$ ${quantidade * 3}`)
            break
        case 200:
            console.log(`Voce comprou ${quantidade} Hambúrguer Simples o total é: R$ ${quantidade * 4}`)
            break
        case 300:
            console.log(`Voce comprou ${quantidade} Cheeseburguer  o total é: R$ ${quantidade * 5.5}`)
            break
        case 400:
            console.log(`Voce comprou ${quantidade} Bauru o total é: R$ ${quantidade * 7.5}`)
            break
        case 500:
            console.log(`Voce comprou ${quantidade} Refrigerante  o total é: R$ ${quantidade * 3.5}`)
            break
        case 600:
            console.log(`Voce comprou ${quantidade} Suco o total é: R$ ${quantidade * 2.8}`)
            break
        default:
        console.log("produto nao existente")

    }

}

fecharConta(200, 5)
fecharConta(100, 8)
fecharConta(300, 1)
fecharConta(500, 3)
fecharConta(400, 2)
fecharConta(600, 4)
fecharConta(800, 4)