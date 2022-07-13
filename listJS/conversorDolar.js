/* O CÓDIGO CONTÉM UMA FUNÇÃO QUE RECEBE UM VALOR EM DOLARES
PERGUNTA PRO USUARIO QUAL É A COTAÇÃO DO DOLAR
E RETORNA UMA STRING JÁ FORMADA EM REAIS
NO CONSOLE SERÁ IMPRESSO 100 VEZES A COTAÇÃO INFORMADA */

function conversorDeMoeda(valorEmDolar){
    const cotacao = Number (prompt("informe o valor da cotação do Dólar"));

    return "R$" + (valorEmDolar * cotacao);
}

const meuDinheiro = conversorDeMoeda(100);
console.log(meuDinheiro);
//SE DIGITAR O NUMERO 5
//CONSOLE: R$ 500