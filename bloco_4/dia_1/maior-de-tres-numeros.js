let a = 4;
let b = 5;
let c = 3;

function compararTresNumeros (a, b, c) {
  if (a > b && a > c) {
    return a;
  
  } else if (b > a && b > c) {
    return b;
  
  } else {
    return c;
  }
}

console.log(compararTresNumeros(a, b, c));