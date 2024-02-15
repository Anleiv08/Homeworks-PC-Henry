function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:

  var maximo = x;

  while (y > maximo){
    maximo = y;
  }
  return maximo;
}
module.exports = obtenerMayor;
