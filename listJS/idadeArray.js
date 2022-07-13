//EXERCICIO DE FUNÇÃO DE ARRAY
// CONSIDERE UM ARRAY COM O SEGUINTE FORMATO:

[
    {nome: "Pedro", idade: 20},
    {nome: "joao", idade: 10},
    {nome: "Paula", idade: 12},
    {nome: "Arthur", idade: 89}

]
//A)FAÇA UMA FUNÇÃO QUE RETORNE UM NOVO ARRAY SÓ COM OS ADULTOS(PESSOAS ACIMA OU IGUAL A SUPERIOR A 20)

//B)FAÇA UMA FUNÇÃO QUE RETORNE UM NOVO ARRAY SÓ COM AS CRIANÇAS/ADOLESCENTES(PESSOAS COM IDADE INFERIOR A 20)

//A)
const adultos = pessoas.filter((pessoa) => {
    return pessoa.idade >= 20
})

//B)
const criancas = pessoas.filter((pessoa) =>{
    return pessoa.idade < 20
})