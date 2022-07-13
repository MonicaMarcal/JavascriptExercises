//CRIE UM OBJETO QUE REPRESENTE UMA PESSOA QUALQUER
//COM AS PROPRIEDADES NOME, IDADE, EMAIL, ENDEREÇO.
//CRIE UMA FUNÇÃO CHAMADA ANONIMIZARPESSOA
//QUE DEVERA RETORNAR UM NOVO OBJETO COM AS MESMAS PROPRIEDADES
//MAS COM A STRING ANONIMO NO LUGAR DO NOME 
//O OBJETO ORIGINAL DEVE SER MANTIDO COM O NOME DA PESSOA 

const pessoaQualquer = {
    nome: "woody",
    idade: 25,
    email:"woody@email.com.br",
    endereco: "Disney–Pixar"
}

//JEITO 1
function anonimizarPessoa(pessoa){
    return{
        nome:"anonimo",
        idade: pessoa.idade,
        email:pessoa.email,
        endereco: pessoa.endereco
    }
}


//JEITO 2
function anonimizarPessoa(pessoa){
    return{
        ...pessoa,
        nome:"anonimo",
    }
}