function modulo (a , b) {
  if (b === 0) {
    return 'Não é permitida divisão por zero.';
  }
  return a % b;
}

console.log(modulo(14, 0));