let numeros = [2, 3, 6, 7, 10, 1];

function retornarIndiceMaiorValor(numeros) {
  let valor = 0;
  let indice = '';
  
  for (let index = 0; index < numeros.length; index += 1) {  
    if (valor < numeros[index]) {
      valor = numeros[index];
      indice = numeros.indexOf(valor);
    }
  }
  return indice;
}

console.log(retornarIndiceMaiorValor(numeros));
