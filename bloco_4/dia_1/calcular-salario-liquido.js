let salarioBruto = 3500;


function getSalarioLiquido() {
  let salarioBase = salarioBruto - getINSS(salarioBruto);
  let salarioLiquido = salarioBase - getIR(salarioBase);
  return salarioLiquido.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}); // creditos para https://pt.stackoverflow.com/questions/181922/formatar-moeda-brasileira-em-javascript
}
  salarioBruto

function getINSS(salarioBruto) {
  if (salarioBruto <= 1556.94) {
    return salarioBruto / 100 * 8;
  
  } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    return salarioBruto / 100 * 9;
    
  } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    return salarioBruto / 100 * 11;
  
  } else if (salarioBruto > 5189.82) {
    return 570.88;
  }
}


function getIR(salarioBase) {
  if (salarioBase <= 1903.98) {
    return 0;

  } else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    return (salarioBase / 100 * 7.5) - 142.80;

  } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    return (salarioBase / 100 * 15) - 354.80;

  } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    return (salarioBase / 100 * 22.5) - 636.13;

  } else if (salarioBase > 4664.68) {
    return (salarioBase / 100 * 27.5) - 869.36;
  }
}

console.log(getSalarioLiquido());