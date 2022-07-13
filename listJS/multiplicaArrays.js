//EM TODOS OS ITENS DESTE EXERCICIO, VOCE TERA QUE ESCREVER UMA FUNÇÃO 
//CUJA ENTRADA SEJA ARRAY. PARA TESTES, CONSIDERE: const array = [1,2,3,4,5,6]

//A) ESCREVA UMA FUNÇÃO QUE RETORNE UM ARRAY COM AS ENTRADAS MULTIPLICADAS POR 2.
//ISTO É: [2,4,6,8,10,12]

//B) ESCREVA UMA FUNÇÃO QUE RETORNE UM ARRAY COM AS ENTRADAS MULTIPLICADAS POR 3 E COMO STRINGS. INSTO É: ["3", "6", "9", "15", "18"]

//C) ESCREVA UMA FUNÇÃO QUE RETORNE UM ARRAY DE STRINGS DIZENDO: 
//"${numero} é par/impar".
//ISTO É: ["1 é impar", "2 é par", "3 é impar", "4 é par", "5 é impar", "6 é par"]


const array = [1, 2, 3, 4, 5, 6]

// RESPOSTA DO A)
const dobro = array.map((n) => {
    return 2 * n
})

//RESPOSTA DO B)
const triplicasEmString = array.map((num) =>{
    const triplo = 3 * num
    return triplo.toString()
})

//RESPOSTA DO C)
const stringDeParidade = array.map((m) =>{
    if(m % 2 === 0){
        return m + "é par"
    }else{
        return m + "é impar"
    }
})

console.log(dobro)
console.log(triplicasEmString)
console.log(stringDeParidade)