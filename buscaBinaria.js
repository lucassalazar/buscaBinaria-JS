let elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


function buscaBinaria (vetor, valor, inicio=0, fim=null) {
  if(fim === null) {
    fim = vetor.length - 1 
  }else if(inicio > fim) {
    return 'O valor não foi encontrado na lista'
  }

  let meio = Math.floor((inicio + fim)/2)
  if (valor === vetor[meio]) {
    return 'Índice: '+meio+' - Valor: '+vetor[meio]
  }else if (valor < vetor[meio]) {
    return buscaBinaria(vetor, valor, inicio, meio-1)
  }else{
    return buscaBinaria(vetor, valor, meio+1, fim)
  }
}

let resultado = buscaBinaria(elementos, 15)
console.log(resultado)
