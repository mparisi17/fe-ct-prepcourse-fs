function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  let array = [];

  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue; // salta la iteración número 5
    }
    num = num + 2;
    array.push(num);
  }

  return array;
}

module.exports = continueStatement;
