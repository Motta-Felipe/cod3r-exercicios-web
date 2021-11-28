// Video Youtube  https://www.youtube.com/watch?v=7ZxYJw9ebaM&t=856s

const meuObjeto = {
    a: 1,
    b:2
}

const novoObjeto = Object.create(meuObjeto)
novoObjeto.b = 5

console.log(meuObjeto.b + novoObjeto.a)
console.log(meuObjeto.hasOwnProperty('a'))
console.log(meuObjeto.hasOwnProperty('map'))

// meuObjeto.__proto__ --> Object.prototype --> null

const meuArray = [1, 2, 3, 'a', 'b']


// meuArray.__proto__ --> Array.prototype --> Object.prototype --> null

function minhaFuncao() {
    return 1*2
}

//minhaFuncao.__proto__ --> Function.prototype -->Object.prototype --> null

//----------------------------------------
function SalaAula(alunos){
    this.alunos = alunos || []
}

SalaAula.prototype = {
    adicionarAluno: function(aluno) {
        this.alunos.push(aluno)
    },
    mostraAlunos: function() {
        return this.alunos
    }
}

function NovaSala(){
    SalaAula.call(this)
}

NovaSala.prototype = Object.create(SalaAula.prototype)

const novaSala = new NovaSala()

novaSala.adicionarAluno('Joao')

console.log(novaSala.mostraAlunos())




const minhaSala = new SalaAula(['Joao', 'Maria'])

minhaSala.adicionarAluno('Pedro')

console.log(minhaSala.alunos)



