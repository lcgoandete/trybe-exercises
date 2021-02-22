// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .
let numeros = [2, 3, 2, 5, 8, 2, 3];

function verificarValorRepetido(numeros) {
  let numeroAtual = 0;
  let numeroFinal = 0;

  for (const index in numeros) {
    numeroAtual = numeros[index];
    let numeroRepetido = 0;
    
    for (valor = 0; valor < numeros.length; valor += 1) {
      if (numeroAtual === numeros[valor]) {
        numeroRepetido = numeroRepetido + 1;
      }
      
      if (numeroFinal > numeroRepetido) {
        numeroFinal = numeros[index];
      }
    }
    console.log(numeroRepetido, numeroFinal);
  }
}

verificarValorRepetido(numeros);
