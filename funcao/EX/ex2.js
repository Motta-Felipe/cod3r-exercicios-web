function tipoTriangulo(l1, l2, l3){
    if(l1 == l2 && l2 == l3){
        tipo ='Equilatero'
    }else if (l1 == l2 || l2 == l3 || l1 == l3) {
        tipo ='Isocelos'
    }else{
        tipo ='Escaleno'
    }
    console.log(tipo)
}

tipoTriangulo(5, 5, 5)
tipoTriangulo(5, 5, 8)
tipoTriangulo(5, 2, 7)