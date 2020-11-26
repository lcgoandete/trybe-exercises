let a = 60;
let b = 59;
let c = 61;

function compararTresNumeros (a, b, c) {
  let somaDosAngulos = a + b + c;
  
  if (typeof somaDosAngulos === 'number') {
    if (somaDosAngulos === 180) {
      return 'true';
    
    } else if (somaDosAngulos !== 180) {
      return 'false';
    } 
  
  } else {
    return 'erro - angulos invalidos';
  }
}

console.log(compararTresNumeros(a, b, c));