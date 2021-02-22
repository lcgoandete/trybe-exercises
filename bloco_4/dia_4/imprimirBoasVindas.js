let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

function imprimirBoasVindas(info) {
  return `Bem-vinda ${info.personagem}!`
}

console.log(imprimirBoasVindas(info));
