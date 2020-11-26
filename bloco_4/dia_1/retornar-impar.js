let a = 12;
let b = 88;
let c = 22;

function getImpar (a, b, c) {
  if ( (a % 2 !== 0) || (b % 2 !== 0) || (c % 2 !== 0) ) {
    return true;
  
  } else {
    return false;
  }
}

console.log(getImpar(a, b, c));