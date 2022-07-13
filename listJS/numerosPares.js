
/* 
 * Você tem que escrever um código que, dado um número N, ele imprima (no console) os N primeiros números pares 
 * (por exemplo, se N for 3, você deve imprimir 0, 2 e 4).  Um colega seu disse que já começou esta tarefa, 
 * mas não conseguiu terminar. Dê uma olhada no código dele:
 */
 /*
  const quantidadeDeNumerosPares
  let i = 0
    while(i <= quantidadeDeNumerosPares) {
    console.log(i*2)
  }
*/
 /*
 * Este código funciona? Por quê? Caso não funcione, corrija a implementação dele.
 * 
 * RESPOSTA:
 * 
 * Não. Há dois erros principais:
 * 
 * 1) O Loop nunca vai para de rodar.
 * 
 * Perceba que a condicação do loop é quando a variável i chegar no valor
 * da variável quantidadeDeNumerosPares. Mesmo ela sendo declarada como "let", não
 * há nenhuma linha de código que atualize o valor desta variável. Desta forma, 
 * o loop nunca vai parar de rodar.
 * 
 * 2) A condição de parada está errada.
 * 
 * Quando usamos while, o código dentro dele irá rodar até que a condição dentro
 * dele se assuma o valor "false". Do jeito que está feito ele vai rodar
 * uma vez a mais do que precisa. 
 * Vamos considerar que quantidadeDeNumerosPares seja 3
 * O loop ira imprimir no console
 * 
 * // para i = 0
 * Console: 0
 * 
 * // para i = 1
 * Console: 2
 * 
 * // para i = 2
 * Console: 4
 * 
 * // para i = 3 (o código roda, porque i <= quantidadeDeNumerosPares é "true". i é igual a 3)
 * Console: 6
 * 
 * // para i = 4
 * // o loop vai parar de rodar porqu i <= quantidaddeDe NUmerosPares é "false". i é maior do que 3)
 * 
 * Uma possível correção do código está abaixo
 */

function ex3NumerosPares() {
  let quantidadeDeNumerosPares
  let i = 0
  while (i < quantidadeDeNumerosPares) {
    console.log(i * 2)
    i++
  }
}
