function conection(status) {
  return status===1 ? "el usuario está Online": status===2 ? " el usuario está Away":
  "esta offline"
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
}

module.exports = conection;
