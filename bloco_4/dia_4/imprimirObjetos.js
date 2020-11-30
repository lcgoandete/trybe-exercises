let infoMargarida = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let infoPatinhas = {
  personagem: 'Tio Patinhas',
  origem: `Christmas on Bear Mountain, Dell's Four Color Comics #178`,
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

function imprimirObjetos(infoMargarida, infoPatinhas) {
  console.log(`${infoMargarida.personagem} e ${infoPatinhas.personagem}`);
  console.log(`${infoMargarida.origem} e ${infoPatinhas.origem}`);
  console.log(`${infoMargarida.nota} e ${infoPatinhas.nota}`);
  console.log(`Recorrente ${infoMargarida.recorrente} e Recorrente ${infoPatinhas.recorrente}`);
}
imprimirObjetos(infoMargarida, infoPatinhas);