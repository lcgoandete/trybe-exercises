function triangulo2(tamanhoDoTriangulo) {
  if (tamanhoDoTriangulo > 1) {
    let asteriscos = '';
    
    for (let linha = 0; linha < tamanhoDoTriangulo; linha += 1) {  
      let espacos = '';
      asteriscos = asteriscos + '* ';

      for (let coluna = 0; coluna < tamanhoDoTriangulo; coluna += 1) {     
        if (coluna < (tamanhoDoTriangulo - linha - 1)) {  
          espacos = espacos + '  ';
        }
      }
      console.log(espacos + asteriscos);
    }
  }
}
triangulo2(5);
