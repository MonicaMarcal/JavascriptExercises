// FAÇA UM PROGRAMA QUE, DADOS DOIS NUMEROS:

//INDIQUE QUAL É O MAIOR 
//DETERMINE SE ELES SÃO DIVISIVEIS UM PELO OUTRO(USE O OPERADOR %)
//DETERMINE A DIFERENÇA ENTRE ELES (O RESULTADO DEVE SER UM NUMERO POSITIVO SEMPRE)


 /*
 * ENTRADA:
 * 15 e 30

 * SAÍDA:
 * O maior é 30
 * 15 não é divisível por 30
 * 30 é divisível por 15
 * A diferença entre eles é 15
*/

function ex5DoisNumeros(a, b){
    let maiorNumero = 0;
    let menorNumero = 0;

if(a > b){
    maiorNumero = a
    menorNumero = b
}else{
    maiorNumero = b
    menorNumero = a
}
console.log("O maior é ", maiorNumero)

if (menorNumero % maiorNumero === 0){
    console.log(menorNumero.toString(), "é divisivel por", maiorNumero.toString())
}else{
    console.log(menorNumero.toString(), "não é divisível por", maiorNumero.toString())
}
if (maiorNumero % menorNumero === 0){
    console.log(maiorNumero.toString()," não é divisível por", menorNumero.toString())
}else{
    console.log(maiorNumero.toString(), "não é divisível por",menorNumero.toString())
}
console.log("A diferença entre eles é ", maiorNumero - menorNumero)
}
