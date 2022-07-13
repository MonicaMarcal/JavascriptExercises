// SE UM TRIANGULO POSSUIR OS TRÊS LADOS IGUAIS, É EQUILÁTERO
// SE POSSUIR DOIS E SOMENTE DOIS LADOS IGUAIS É ISÓSCELES
// SE OS TRÊS LADOS TIVEREM MEDIDAS DIFERENES É ESCALENO

//FAÇA UMA FUNÇÃO QUE RECEBA COMO PARÂMETRO OS TAMANHOS DOS LADOS DO TRIANGULO: A, B ,C 
//E RETORNE SE ELE É EQUILÁTERO, ISÓSCELES OU ESCALENO

function ex4ClassificaTriangulo (a, b, c){
    if(a === b && b === c ){
        console.log("Triângulo é equilátero")
    }else if(a === b || b === c || c === a){
        console.log("Triângulo é isósceles")
    }else{
        console.log("Triângulo é escanelo")
    }

}
