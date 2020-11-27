function quadrado(tamanhoDoQuadrado) {
  if (tamanhoDoQuadrado > 1) {
    let linhas = '';
    
    for (let linha = 0; linha < tamanhoDoQuadrado; linha += 1) {
      linhas = '';
      
      for (let coluna = 0; coluna < tamanhoDoQuadrado; coluna += 1) {
        linhas = linhas + ' * ';
      }      
      console.log(linhas);
    }
  }
}
quadrado(7);
