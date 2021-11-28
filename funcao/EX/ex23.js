function notas(codigo, n1, n2, n3){
    let media
    let resultado
    if(n1 >= n2 && n1>=n3){
        media = (n1*4 + (n2+n3)*3)/10
    }else if (n2 >= n3 && n2>=n1  ){
        media = (n2*4 + (n1+n3)*3)/10
    }else if(n3 >= n1 && n3>=n2){
        media = (n3*4 + (n2+n1)*3)/10
    }
    if(media >= 5){
        resultado = "Aprovado"
    }else{
        resultado = "Reprovado"
    }
    console.log(`codigo:${codigo}. notas:${n1}, ${n2}, ${n3}. Media:${media}. resultado:${resultado}`)
}

notas(1, 5, 10, 10)