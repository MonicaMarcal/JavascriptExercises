
/**
 * Você foi contratado por um escritório médico para gerar e-mails automáticos para seus clientes, 
 * lembrando-os de sua consulta marcada; ou avisa-los que foi cancelada. Considere, então, esses consultas:
 * 
 * const consultas = [
 *    { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
 *    { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
 *    { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
 *    { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
 * ]
 * 
 * A sua tarefa é criar um **array** com os e-mails para cada um deles. Existem dois padrões de e-mail. 
 * 
 * Para as consultas **não canceladas** é:
 *  " Olá, ${ Sr./Sra. } ${ nome da pessoa }. Estamos enviando esta mensagem para
 *    ${ lembrá-lo / lembrá-la } da sua consulta no dia ${ data da consulta }. Por favor, acuse
 *    o recebimento deste e-mail."
 * 
 * Para as consultas **canceladas** é:
 *  " Olá, ${ Sr./Sra. } { nome da pessoa }. Infelizmente, sua consulta marcada
 *    para o dia ${ data da consulta } foi cancelada. Se quiser, pode entrar em 
 *    contato conosco para remarcá-la"
 */

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const emails = consultas.map((consulta) => {
  let emailFinal = "Olá, "

  if(consulta.cancelada) {
    if(consulta.genero === "feminino") {
      emailFinal += "Sra. "
    } else {
      emailFinal += "Sr. "
    }

    emailFinal += consulta.nome + ". "

    emailFinal += "Estamos enviando esta mensagem para "

    if(consulta.genero === "feminino") {
      emailFinal += "lembrá-la "
    } else {
      emailFinal += "lembrá-lo "
    }

    emailFinal += "da sua consulta no dia " + consulta.dataDaConsulta + ". "
    emailFinal += "Por favor, acuse o recebimento deste-email."
  } else {

    if(consulta.genero === "feminino") {
      emailFinal += "Sra. "
    } else {
      emailFinal += "Sr. "
    }

    emailFinal += consulta.nome + ". "

    emailFinal += "Infelizmente sua consulta marcada para o dia "

    emailFinal += consulta.dataDaConsulta + " foi cancelada. "
    emailFinal += "Se quiser, pode entrar em contato conosco para remarcá-la."
  }
  return emailFinal
})