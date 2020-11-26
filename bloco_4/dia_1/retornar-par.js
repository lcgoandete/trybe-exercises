let a = 11;
let b = 88;
let c = 21;

function getPar (a, b, c) {
  if ( (a % 2 === 0) || (b % 2 === 0) || (c % 2 === 0) ) {
    return true;
  
  } else {
    return false;
  }
}

console.log(getPar(a, b, c));