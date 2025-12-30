const repetir = (palabra, veces) => {
  if (palabra == "") {
    return "";
  } else if (veces == 0) {
    return "";
  }
  let operacionRecursiva = repetir(palabra, veces - 1);

  let resultado = palabra + operacionRecursiva;

  return resultado;
};

let palabraRepetir = "Gol",
  vecesRepetir = 3;

let resultadoFuncion = repetir(palabraRepetir, vecesRepetir);

console.log(resultadoFuncion);
