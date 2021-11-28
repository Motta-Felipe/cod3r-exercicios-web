console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola COd3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 2, 3, 4, 5].first())


//Nao faca isso, sobrepor metodos nativos da linguagem
String.prototype.toString = function(){
    return 'Lascou Tudo'
}
console.log('Escola COd3r'.reverse())