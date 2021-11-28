console.log(soma(3, 4))
//console.log(sub(2-1)) nao ocorre içamento quando e function express

// function declaration
function soma(x, y){
    return x + y
}

// function expression
    const sub = function (x, y){
    return x - y
    }

//named function expression pouco usada, unica vantagem e ao debugar pois a funcao esta nomeada

const mult = function mult(x, y){
    return x * y
}

console.log(sub(9, 3))