const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
function addTurnoManha(obj, turno, valor) {
  lesson2.turno = valor;
}
addTurnoManha(lesson2, 'turno', 'manhã');


// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listarChaves(obj) {
  console.log(Object.keys(obj));
}
listarChaves(lesson2);


// Crie uma função para mostrar o tamanho de um objeto.
function mostrarTamanho(obj) {
  console.log(Object.entries(obj).length);
}
mostrarTamanho(lesson2);


// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function listarValores(obj) {
  console.log(Object.values(obj));
}
listarValores(lesson2);


// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
function agruparAulas() {
  allLessons = {};
  Object.assign(allLessons, {lesson1, lesson2, lesson3});
  return allLessons;
}
agruparAulas();


// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
function totalDeEstudantes() {
  const aulasAgrupadas = agruparAulas();
  const lession1 = aulasAgrupadas.lesson1.numeroEstudantes;
  const lession2 = aulasAgrupadas.lesson2.numeroEstudantes;
  const lession3 = aulasAgrupadas.lesson3.numeroEstudantes;
  return `${lession1 + lession2 + lession3}`;
}
totalDeEstudantes();


// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.



// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.