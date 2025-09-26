function tieneTresDigitos(num) {
  

  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  return Number.isInteger(num) && Math.abs(num) >= 100 && Math.abs(num) <= 999;
}

module.exports = tieneTresDigitos;
