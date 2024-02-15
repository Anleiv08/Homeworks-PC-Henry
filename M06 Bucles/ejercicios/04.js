function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Tu código:
  // Caso contrario: "Not allowed".
  var i = 18;
  while (i <= edad) {
    if (i === edad) {
      return "Allowed";
    }
    i++;
  }
  return "Not allowed";
}

module.exports = mayoriaDeEdad;
