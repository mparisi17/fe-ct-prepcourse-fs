function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  // Inicializar un contador para las iteraciones
  let contador = 0;
  
  // Usar do-while para aumentar num en 5 hasta 8 veces
  do {
    num += 5;
    contador++;
  } while (contador < 8);
  
  // Retornar el valor final de num
  return num;
}

module.exports = doWhile;