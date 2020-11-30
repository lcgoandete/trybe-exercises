function triangulo(tamanhoDoTriangulo) {
  if (tamanhoDoTriangulo > 1) {
    let linhas = '';
    
    for (let linha = 0; linha < tamanhoDoTriangulo; linha += 1) {
      linhas = linhas + ' * ';
      console.log(linhas);
    }
  }
}
triangulo(5);
