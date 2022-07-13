//O CÓDIGO CONTÉM UMA LISTA DE NÚMEROS E ITERA EM CIMA DELA CHECANDO VALOR A VALOR
//SE ELE É MULTIPLO DE DOIS, CASO SEJA, GUARDA NO ARRAY1, SENÃO, GUARDA NO ARRAY2,
//OU SEJA, O CÓDIGO DEFINE A PARIDADE(PAR/IGUALDADE) DE TODOS OS VALORES E GUARDA PARES NO ARRAY1,
//E IMPARES NO ARRAY2 

const numeros = [25, 12, 55, 64, 121, 44, 11, 84, 51, 48, 14, 73, 111, 283];
const array1 = [];
const array2 = [];

for(let numero of numeros){
    if(numero % 2 === 0){
        array1.push(numero);
    }else{
        array2.push(numero);
    }
}
console.log("quantidade total de numeros", numeros.length)
console.log(array1.length)
console.log(array2.length)
//CONSOLE:
// "Quantidade total de números: 14"
// 6
// 8