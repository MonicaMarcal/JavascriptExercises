//MANEIRAS DE SE PERCORRER/ITERAR UMA LISTA ANTES DAS FUNÇÕES DE ARRAY
//FAÇA UM PROGRAMA PARA EXEMPLIFICAR

function ex1IterarLista() {
    let array = ["a", "b", "c", "d", "e"]
  
    // MANEIRA I
    for (let i = 0; i < array.length; i++) {
      console.log(array[i])
    }
  
    // MANEIRA II
    for (const element of array) {
      console.log(element)
    }
  
    // MANEIRA III
    let i = 0
    while (i < array.length) {
      console.log(array[i])
      i++
    }
  
    // MANEIRA IV
    array.forEach((el, i, arr) => {
      console.log("Index: ", i)
      console.log("Elemento: ", el)
      console.log("array: ", arr)
    })
  }