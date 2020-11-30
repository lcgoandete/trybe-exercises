let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

function mostrarChaves(info) {
  info.recorrente = 'Sim';
  
  for (const key in info) {
    console.log(key);
  }  
}
mostrarChaves(info);
