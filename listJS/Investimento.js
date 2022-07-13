/*O CÓDIGO TEM UMA FUNÇÃO QUE RECEBE UMA STRING COM O TIPO DE INVESTIMENTO
E O VALOR QUE SERÁ INVESTIDO

DENTRO DA FUNÇÃO UM SWITCH CASE É UTILIZADO PARA MULTIPLICAR
O VALOR INFORMADO POR UM NÚMERO QUE ACRESCE PERCENTUALMENTE 
E O RESULTADO DESSA MULTIPLICAÇÃO É RETORNADO 

NO CONSOLE SERÁ IMPRESO 165 E UNDEFINED
PORQUE O TIPO DE INVESTIMENTO INFORMADO NA SEGUNDA CHAMADA DA FUNÇÃO NÃO EXISTE NO SWITCH CASE, FAZENDO COM QUE ELE CAIA NO DEFAUT E NUNCA MUDE O VALOR DE "valorAposInvestimento"
*/

function investeDinheiro(tipoDeInvestimento, valor){
    let valorAposInvestimento;

    switch(tipoDeInvestimento){
        case "Poupança":
            valorAposInvestimento = valor * 1.03;
        break;
        case "Renda Fixa":
            valorAposInvestimento = valor * 1.05;
        break;
        case "CDB":
            valorAposInvestimento = valor * 1.06;
        break;
        case "Ações":
            valorAposInvestimento = valor * 1.1;
        break;
        default:
            alert("TIPO DE INVESTIMENTO NÃO INCORRETO")
        break;
        
    }
    return valorAPosInvestimento;
}

const novoMontante = investeDinheiro("Ações", 150);
const segundoMontante = investeDinheiro("Tesouro Direto", 200);

console.log(novoMontante);
console.log(segundoMontante);

