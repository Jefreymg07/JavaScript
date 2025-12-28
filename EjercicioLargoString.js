// Funcion recursiva que nos dicen cuantas veces fueron cortadas cada una de las letras de una palabra

const largoString = (palabra, cortador) => {
  if (palabra == "") {
    return 0;
  } else {
    let operacion = largoString(palabra.slice(cortador), cortador);

    let resultado = 1 + operacion;

    return resultado;
  }
};

let word = "Hola",
  cortador = 1;

let resultadoFuncion = largoString(word, cortador);

console.log(resultadoFuncion);
