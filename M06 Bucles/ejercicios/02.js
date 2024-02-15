function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:
  var booleanos = [booleano1, booleano2];
  for (var i = 0; i < booleanos.length; i++) {
    if (!booleanos[i]) {
      return false;
    }
  }
  return true;
}

module.exports = esVerdaderoYFalso;
