function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
  // Si el número es negativo, lo convertimos a positivo
 
  num = num < 0 ? -num : num;

  if (num === 0) {
    return true;
  }

  for (let i = 0; i <= num; i++) {
    if(i == num){
      return true
    }
  }
  return false;
}


module.exports = esEntero;
