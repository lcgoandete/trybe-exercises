let precoDeCusto = 4.00;
let valorDeVenda = 8.00;


function getLucro() {
  let imposto = 0.20;
  let quantidadeVendida = 1000;
  let lucro;

  if (precoDeCusto < 0 || valorDeVenda < 0) {
    return 'ERRO - Valores inválidos.';
  }

  precoDeCusto = precoDeCusto + (precoDeCusto * imposto);
  lucro = (valorDeVenda - precoDeCusto) * quantidadeVendida;
  return lucro;

}

console.log(getLucro());
