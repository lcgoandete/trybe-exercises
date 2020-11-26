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
calcularMedia();