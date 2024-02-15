function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:
  while(a % 2 && a / 3){
    return false
  }
  return true
}

module.exports = esParYDivisiblePorTres;