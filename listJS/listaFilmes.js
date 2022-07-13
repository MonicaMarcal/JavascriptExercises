//CRIE UM OBJETO PARA REPRESENTAR SEU FILME FAVORITO
//ELE DEVE TER AS SEGUINTES PROPRIEDADES: TITULO, ANO, DIRETOR, ATORES/ATRIZES 
//COM PELO MENOS DOIS ATORES/ATRIZES
//IMPRIMA NA TELA A SEGUINTE STRING, BASEADA NOS VALORES DO OBJETO:
//venha asssistir ao filme NOME DO FILME , de ANO, dirigido pelo DIRETOR, e estrelado por ATRIZ 1, ATOR 2, N.   
//A LISTA DE ATORES DEVE SER IMPRESSA INTEIRA, INDEPENDENTE DO TAMANHO DA LISTA.

//CRIA OBJETO 
const filme = {
    nome: "interstellar",
    diretor:"Christopher Nolan",
    ano:2014,
    atores:["Mattew McConaughey", "Anne hathaway", "Jessica Chastain"]
}

/*
//JEITO 1
let stringDeAtores = ""

for(let i = 0; i < filme.atores.length; i++){
    if(i !== filme.atores.length-1){
        stringDeAtores += ator + ","
    }else{
        stringDeAtores += ator +"."
    }
}
console.log("venha asssitir ao filme" + filme.nome + ", de" + filme.ano + ",dirigido por" + filme.diretor + "e estrelado por" + stringDeAtores)


//JEITO 2
let stringDeAtores = ""

filme.atores.forEach((ator, index, array) => {
    if(index !== array.length - 1){
        stringDeAtores += ator + ","
    }else{
        stringDeAtores += ator + "."
    }
})
console.log("venha asssitir ao filme" + filme.nome + ", de" + filme.ano + ",dirigido por" + filme.diretor + "e estrelado por" + stringDeAtores)

*/
//JEITO 3
const stringDeAtores = filme.atores.reduce((acc, ator, index, array)=>{
    if(index !== array.length - 1){
        return acc += ator + ","
    }else{
        return acc += ator + "."
    }
}, "")
console.log("venha asssitir ao filme" + filme.nome + ", de" + filme.ano + ",dirigido por" + filme.diretor + "e estrelado por" + stringDeAtores)


//JEITO 4
console.log("venha asssitir ao filme" + filme.nome + ", de" + filme.ano + ",dirigido por" + filme.diretor + "e estrelado por" + filme.atores.join(","))