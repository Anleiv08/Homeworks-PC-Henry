function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  var contador = 8;
  var resultado = 0;  

  do{
    resultado += 5
    contador -= 1
  } while(contador !== 0)

  return num + resultado
}

module.exports = doWhile;