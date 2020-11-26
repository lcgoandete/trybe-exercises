const pecas = ['rei', 'rainha', 'bispo', 'cavalo', 'torre', 'peão'];
const movimentos = [
  'Pode ser movimentado em qualquer direção do tabuleiro, mas apenas de casa em casa.',
  'Sem restrições, a Rainha tem livre movimentação no jogo na horizontal, vertical e diagonais.',
  'Sem restrição de número de casas, mas somente no sentido diagonal.',
  'Realiza movimentos em “L”, ou seja, duas casas em um sentido e uma casa em sentido perpendicular àquele, em qualquer direção.',
  'Pode correr sem restrição de número de casas e em todas as direções (frente, trás, direita, esquerda).',
  'Pode apenas realizar movimentos frontais, de forma que o primeiro movimento de cada peão abranja até duas casas, e os demais se limitam a uma casa à frente. O ataque do peão sempre ocorre na diagonal.'
];

function escolherPeca (pecaEscolhida) {
  pecaEscolhida = pecaEscolhida.toLowerCase();
  
  for (let i = 0; i < pecas.length; i++) {
    if (pecaEscolhida === pecas[i]) {
      return pecas[i] + ' -> ' + movimentos[i];
    } 
  }
  return 'ERRO - Peça inválida.';
}

console.log(escolherPeca('RAINHA'));
