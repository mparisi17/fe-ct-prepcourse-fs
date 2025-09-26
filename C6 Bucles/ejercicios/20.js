function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   // Inicializar la suma en 0
  let suma = 0;
  
  // Iterar desde 1 hasta n
  for (let i = 1; i <= n; i++) {
    suma += i;
    // Detener el bucle si la suma supera 100
    if (suma > 100) {
      break;
    }
  }
  
  return suma;
}

module.exports = sumarHastaNConBreak;
