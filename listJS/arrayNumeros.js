//FUNÇÃO QUE RECEBE UM ARRAY DE NUMEROS 
//IMPRIME NA TELA O SEGUNDO MAIOR E SEGUNDO MENOR
//INVOQUE A FUNÇÃO(NÃO É PERMITIDO USAR FUNÇÕES DE ORDENAÇÃO DE VETORES) 
//RESOLUÇÃO SEM UTILIZAR SORT

function segundoMaiorEsegundoMenor(arrayDeNumeros){
    let maiorNumero = infinity;
    let menorNumero = infinity;
    let segundoMaiorNumero = infinity;
    let segundoMenorNumero = infinity; 

    for(let numero of arrayDeNumeros){
        if(numero > maiorNumero){ 
            maiorNumero = numero;
        }
        if(numero < menorNumero){ 
            menorNumero = numero;
        }
    }
    
    for(let numero of arrayDeNumeros){
        if(numero > segundoMaiorNumero && numero < maiorNumero){ 
            segundoMaiorNumero = numero;
        }
        if(numero < segundoMenorNumero && numero > menorNumero){
            segundoMenorNumero = numero;
        }
    }
    console.log("O segundo maior numero é o", segundoMaiorNumero);
    console.log("O segundo menor numero é o", segundoMenorNumero);
}



//CASO PUDESSE UTILIZAR SORT

function segundoMaiorNumeroESegundoMenor(arrayDeNumeros){
    //ordena do menor pro maior
    arrayDeNumeros.sort(function(valor1,valor2){
        return valor1 > valor2;
    });

    //1 é a posição do segundo elemento 
    const segundoMenorNumero = arrayDeNumeros[1];

    //tamanho do array - 2 para pegar p penultimo elemento
    const segundoMaiorNumero = arrayDeNumeros[array.length - 2];


    console.log(segundoMenorNumero);
    console.log(segundoMaiorNumero);
}