let a = 14;
let b = 2;

function modulo (a , b) {
  if (b === 0) {
    return 'Não é permitida divisão por zero.';
  }
  return a % b;
}

console.log(modulo(a, b));