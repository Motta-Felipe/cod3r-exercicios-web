const passo1 = (ctx, next) => {
    ctx.valor1= 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid3'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length
        middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)

//uma boa explicaao em https://www.udemy.com/course/curso-web/learn/lecture/9277256#questions/10326474
// e em https://www.udemy.com/course/curso-web/learn/lecture/9277256#questions/7710546