function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  let resultado = "";
  let strings = [];

  if (str1 !==""){strings.push(str1)}
  if (str2 !==""){strings.push(str2)}
  if (str3 !==""){strings.push(str3)}

  let maxLength = 0;
  for (let i=0; i< strings.length; i++){
    if (strings[i].length>maxLength){
      maxLength = strings[i].length;
    }
  }
  for (let i = 0; i < maxLength; i++){
    for (let j=0;j<strings.length;j++){
      if(strings[j][i]){
        resultado += strings[j][i];
      }
    }
  }
  return resultado;

  }

module.exports = combine;