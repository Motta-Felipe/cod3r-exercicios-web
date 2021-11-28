function fruta(f){
    switch(f){
        case "maçã":
             console.log("Nao vendemos essa fruta aqui");
            break
        case "kiwi":
             console.log("Estamos com escasses de kiwi");
            break
        case "melancia":
             console.log("Aqui esta sao 3 reais o quilo.")
            break
        default:
            console.log("ERRO")
    }
}

fruta("kiwi")