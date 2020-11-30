let numeros = [2, 4, 6, 7, 10, 0, -3];;

function retornarIndiceMenorValor(numeros) {
  let valor = 0;
  let indice = '';
  
  for (let index = 0; index < numeros.length; index += 1) {  
    if (valor > numeros[index]) {
      valor = numeros[index];
      indice = numeros.indexOf(valor);
    }
  }
  return indice;
}

console.log(retornarIndiceMenorValor(numeros));
