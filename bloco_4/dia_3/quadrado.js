function quadrado(tamanhoDoQuadrado) {
  if (tamanhoDoQuadrado > 1) {
    let quadrado = '';
    
    for (let linha = 0; linha < tamanhoDoQuadrado; linha += 1) {
      quadrado = '';
      
      for (let coluna = 0; coluna < tamanhoDoQuadrado; coluna += 1) {
        quadrado = quadrado + ' * ';
      }      
      console.log(quadrado);
    }
  }
}
quadrado(5);
