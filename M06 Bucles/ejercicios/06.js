function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  let contador = 0;
  while(num >= 1 || num <= -1){
    num/= 10
    contador++;
  }
  return contador === 3
}

module.exports = tieneTresDigitos;
