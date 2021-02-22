let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

function addChave(info) {
  info.recorrente = 'Sim';
  return info;
}
console.log(addChave(info));
