function piramide(tamanhoDaPiramide) {
  if (tamanhoDaPiramide > 1) {
    for (let linha = 0; linha <= tamanhoDaPiramide; linha += 1) {  
      let piramide = '';

      for (let index = tamanhoDaPiramide; index > linha; index -= 2) {
        piramide = piramide + ' ';
      }

      if (linha % 2 === 1) {
        for (let coluna = 1; coluna <= linha; coluna += 1) {
          piramide = piramide + '*';
        }
        console.log(piramide);
      }
    }
  }
}
piramide(5);
