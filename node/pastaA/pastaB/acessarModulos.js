const moduloA = require('../../moduloA') // no linux deve respeitar as letras minusculoa e maiusculas
console.log(moduloA.ola)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia! ')
    res.end()
}).listen(8080)

