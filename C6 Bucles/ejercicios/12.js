function fizzBuzz(num) {
  
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
// Verificar si num es divisible por 3 y 5
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  }
  // Verificar si num es divisible por 3
  if (num % 3 === 0) {
    return "fizz";
  }
  // Verificar si num es divisible por 5
  if (num % 5 === 0) {
    return "buzz";
  }
  // Si no cumple ninguna condición, retornar false
  return false;
}

module.exports = fizzBuzz;
