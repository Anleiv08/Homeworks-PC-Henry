function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
  for(let i = 0; i < 1; i++){
    if(1 === status){
      return 'Online'
    } 
    if(2 === status){
      return 'Away'
    } else {
      return 'Offline'
    }
  }
  
  return status
}

module.exports = conection;
