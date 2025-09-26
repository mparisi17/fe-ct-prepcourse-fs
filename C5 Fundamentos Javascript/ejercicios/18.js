function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  // Verificar si letra es una cadena de un solo carácter
  if (typeof letra !== "string" || letra.length !== 1) {
    return "Dato incorrecto";
  }
  
  // Convertir letra a minúscula para comparación
  const letraMinuscula = letra.toLowerCase();
  
  // Verificar si es una vocal
  if (["a", "e", "i", "o", "u"].includes(letraMinuscula)) {
    return "Es vocal";
  }
  
  return "Dato incorrecto";

}

module.exports = esVocal;
