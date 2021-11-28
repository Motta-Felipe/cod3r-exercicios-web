function fatorial(n){
    let f = 1
    for (i = n; i>1; i--){
        f *= i
    }
    return f
}




console.log(fatorial(5))