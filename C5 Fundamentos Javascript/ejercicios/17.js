function esPositivo(num) {
  // La función recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el número es positivo o negativo.
  // Por ejemplo: 
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  
  // Verifica si num es 0
  if (num === 0) {
    return false;
  }
  // Verifica si num es positivo
  if (num > 0) {
    return "Es positivo";
  }
  // Si no es 0 ni positivo, entonces es negativo
  return "Es negativo";
}


module.exports = esPositivo;