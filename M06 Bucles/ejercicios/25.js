function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

var texto = string.toLowerCase().replace(/\s/g, '');

var longitud =  texto.length

  for(var i = 0; i < longitud / 2; i++){
    if (texto[i] !== texto[longitud - 1 - i]){
      return false
    }
  }
  return true
}

const string = ''
console.log(esPalindromo(string));

module.exports = esPalindromo;
