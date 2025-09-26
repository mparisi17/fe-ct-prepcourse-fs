function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  // Si a es mayor que b, intercambiar los valores para asegurar que a <= b
  let inicio = Math.min(a, b);
  let fin = Math.max(a, b);
  
  // Verificar si hay un 0 en el rango, en cuyo caso el producto es 0
  if (inicio <= 0 && fin >= 0) {
    return 0;
  }
  
  // Inicializar el producto en 1
  let producto = 1;
  
  // Calcular el producto de todos los números en el rango [inicio, fin]
  for (let i = inicio; i <= fin; i++) {
    producto *= i;
  }
  
  return producto;
}

module.exports = productoEntreNúmeros;