const fs = require('fs')
path = __dirname + '/dados1.txt'

// const lerArquivo = new Promise(resolve =>{
//     resolve(fs.readFile(__dirname + '/dados.txt'))
// })


function lerArquivo(path){
return new Promise(resolve => {
    fs.readFile(path,(err, conteudo) => {resolve(conteudo.toString())})
})}

lerArquivo(path)
    .then(fazerArray =>fazerArray.split('\r\n'))
    .then(linha => linha[2])
    .then(linha => console.log(linha[4]))
    
