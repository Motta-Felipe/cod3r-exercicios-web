const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro !! remove o ultimo
console.log(pilotos)
pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o premieiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona no final
console.log(pilotos)

// splice pode adicionar ou remover

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //4 nao incluso
console.log(algunsPilotos2)