estados = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"];

const uf = document.querySelector('#estado');

for (const estado of estados) {
  let option = document.createElement('option');
  option.innerText = estado;
  uf.appendChild(option);
}

function verificarData() {
  let data = document.querySelector('#data-inicio').value
  
}

document.querySelector("#btn-enviar").addEventListener("click", function(event) {
  event.preventDefault();
});



// Verificar o formato da data dd/mm/aaaa .
// O dia deve ser > 0 e <= 31.
// O mês deve ser > 0 e <= 12.
// O ano não pode ser negativo.
// Caso alguma das condições for inválida no momento do envio do formulário, exibir mensagem de erro contextualizada.