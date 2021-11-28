function compraCarro(modelo){
    switch(modelo){
        case "hatch":
            console.log('compra efetuada com sucesso')
            break
        case "sedan":
        case "motocicleta":
        case "caminhonete":
            console.log('Tem certeza que nao prefere esse modelo')
            break
        default:
        console.log('Nao vendemos esse mdelo aqui')
    }
}

compraCarro("hatch")
compraCarro("motocicleta")
compraCarro("sedan")
compraCarro("caminhonete")
compraCarro("asdfafa")
