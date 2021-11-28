function planoTrabalho(plano, salarioAtual) {
    switch (plano) {
        case "A":
                console.log(`Novo salario: ${salarioAtual*1.1}`)
            break;
        case "B":
            console.log(`Novo salario:${salarioAtual*1.15}`)
            break;
        case "C":
            console.log(`Novo salario:${salarioAtual*1.2}`)
            break;

        default:
            console.log("plano Invalido")
            break;
    }
}

planoTrabalho("A", 1000)
planoTrabalho("B", 1000)
planoTrabalho("C", 1000)
planoTrabalho("D", 1000)
