let a = -9;

function getPositivoOuNegativo (a) {
  if (a > 0) {
    return 'positivo';
  } else if (a < 0) {
    return 'negativo';
  } else {
    return 0;
  }
}

console.log(getPositivoOuNegativo(a));