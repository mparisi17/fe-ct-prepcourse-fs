function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  // Verificar si el número es menor o igual a 0 o no es entero
  if (numero <= 0 || !Number.isInteger(numero)) {
    return false;
  }
  
  // Dividir el número por 2 repetidamente mientras sea mayor que 1
  while (numero > 1) {
    // Si el número no es divisible por 2 (resto no es 0), no es potencia de 2
    if (numero % 2 !== 0) {
      return false;
    }
    // Dividir el número por 2
    numero = numero / 2;
  }
  
  // Si llegamos a 1, es una potencia de 2
  return numero === 1;

}

module.exports = esPotenciaDeDos;
