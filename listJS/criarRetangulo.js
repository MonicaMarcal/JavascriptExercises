//CRIE UMA FUNÇÃO CHAMADA CRIARRETANGULO QUE RECEBE COMO PARAMETROS DOIS LADOS
//(LADO1) E (LADO2) 
// E RETORNA UM OBJETO COM 4 INFORMAÇÕES:
//LARGURA(LADO1), ALTURA(LADO2), PERIMETRO(2*(LADO1 + LADO2)) E AREA(LADO1*LADO2)

function criarRetangulo(lado1, lado2){
    return{
        largura:lado1,
        altura:lado2,
        perimetro: 2 *(lado1 + lado2),
        area: lado1 * lado2
    }
}