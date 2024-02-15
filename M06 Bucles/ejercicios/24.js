function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  let newString = '';

  for (const char of [...texto]) {
    newString = char + newString
  }
  return newString
}  
// const text = ''
//  console.log(invertirTexto(text));

module.exports = invertirTexto;