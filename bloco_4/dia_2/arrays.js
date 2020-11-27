let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


function percorrerArray() {
  for (const i in numbers) {
    console.log(numbers[i]);
  }
}
//percorrerArray();


function somarValores() {
  let valorSomado = 0;
  for (const i in numbers) {
    valorSomado = valorSomado + numbers[i];
  }
  console.log(valorSomado);
}
//somarValores();


function calcularMedia() {
  let valorSomado = 0;
  for (const i in numbers) {
    valorSomado = valorSomado + numbers[i];
  }
  console.log(valorSomado / numbers.length);
}
//calcularMedia();


function maiorOuMenor() {
  let valorSomado = 0;
  for (const i in numbers) {
    valorSomado = valorSomado + numbers[i];
  }
  
  let maiorOuMenor = valorSomado / numbers.length;
  if (maiorOuMenor > 20) {
    console.log('valor maior que 20');
  
  } else {
    console.log('valor menor ou igual a 20');
  }
}
//maiorOuMenor();


function maiorValor () {
  let maiorValor = 0;
  for (const i in numbers) {
    if (maiorValor < numbers[i]) {
      maiorValor = numbers[i];
    }
  }
  console.log(maiorValor);
}
//maiorValor();


function getImpar() {
  let impar = 0;
  for (const i in numbers) {
    if (numbers[i] % 2 !== 0) {
      impar += 1;
    }
  }

  if (impar > 0) {
    console.log(`Existem ${impar} números ímpares`);
  
  } else {
    console.log(`Nenhum valor ímpar`);
  }
}
//getImpar();


function getMenorValor () {
  let menorValor = 1000;
  for (const i in numbers) {
    if (menorValor > numbers[i]) {
      menorValor = numbers[i];
    }
  }
  console.log(menorValor);
}
//getMenorValor();


function gerarArray() {
  let atehVinteECinco = [];
  for (let index = 1; index <= 25; index += 1) {
    atehVinteECinco.push(index);
  }
  console.log(atehVinteECinco);
}
//gerarArray();


function dividirTodosPorDois() {
  let atehVinteECinco = [];
  for (let index = 1; index <= 25; index += 1) {
    atehVinteECinco.push(index);
  }

  for (const index in atehVinteECinco) {
    console.log(atehVinteECinco[index] / 2);
  }
}
dividirTodosPorDois();