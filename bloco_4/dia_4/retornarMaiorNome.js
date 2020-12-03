let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function retornarMaiorNome(nomes) {
  let maiorNome = '';
  
  for (let index = 0; index < nomes.length; index += 1) {  
    nomeTemporario = nomes[index];

    if (maiorNome.length < nomeTemporario.length) {
      maiorNome = nomeTemporario;    
    }
  }
  return maiorNome;
}

console.log(retornarMaiorNome(nomes));
