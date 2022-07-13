// O CÓDIGO CONTÉM UMA LISTA DE NÚMEROS E 2 VARIAVEIS COM OS VALORES DE INFINITO E ZERO
// ABAIXO ELE PERCORRE A LISTA DE NÚMEROS CHECANDO SE ELE É MENOR DO QUE INFINITO 
// CASO SEJA REDEFINE O NUMERO1 COM ELE, ABAIXO REPETE A MESMA LÓGICA PARA O ZERO
// ARMAZENA NA VARIAVEL NUMERO2 CASO SEJA MAIOR DO QUE ZERO 
//AO FINAL DA ITERAÇÃO ELE TERÁ COMPARADO TODOS OS NUMEROS GUARDADOS NAS DUAS VARIAVEIS
//RESPECTIVAMENTE O MENOR E O MAIOR VALOR

const numeros = [25, 12, 55, 64, 121, 44, 11, 84, 51, 48, 14, 73, 111, 283, 1, 99, 13, 31, 83, 131, 1, 1.1, -10, 25, 1590];

let numero1 = infinity;
let numero2 = 0;

for(let numero of numeros){
    if(numero < numero1){
        numero1 = numero;
    }
    if(numero > numero2){
        numero2 = numero;
    }
}
console.log(numero1);
console.log(numero2);
// CONSOLE:
// 1590
// -10