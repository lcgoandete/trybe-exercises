function verificarPalindromo(palavra) {
  for (let i = 0; i < palavra.length; i++) {
    if (palavra.length > 1) {
      if (palavra[0] === palavra[palavra.length -1]) {
        palavra = palavra.replace(palavra[0], "")
        palavra = palavra.replace(palavra[palavra.length -1], "")
        return true;

      } else {
        return false;
      }  
    }
  }
}
console.log(verificarPalindromo('arara'));
console.log(verificarPalindromo('desenvolvimento'));
