function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  var diasPorMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var dias = 0;

  // Bucle do-while para validar el mes ingresado
  do {
    if (mes >= 1 && mes <= 12) {
      dias = diasPorMes[mes];
    } else {
      // Si el mes está fuera del rango, devolver 0
      return 0;
    }
  } while (dias === 0); // Repetir el ciclo mientras la cantidad de días es igual a 0

  return dias;
}

module.exports = diasEnMes;
