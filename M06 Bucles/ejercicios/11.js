function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:

  var rango = 0;
  while(num > rango){
    if(num < 50 && num > 20 ){
      return true
    }
    return false
  }
}

module.exports = estaEnRango;
