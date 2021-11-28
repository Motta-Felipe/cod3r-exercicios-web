function opera(a,b,c){
    if(a == b && b == c){
        console.log("Equilatero")
    }else if (a==b || a==c || b==c){
        console.log('Isoceles')
    }else{
        console.log('Escaleno')
    }

}

opera(3,3,3)
opera(3,3,2)
opera(3,2,1)

