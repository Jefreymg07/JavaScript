// Funcion recursiva que multiplica los numeros que hayan en el rango inicial y el final.

const multiplicarRango = (inicio, fin) => {
  if (fin < inicio) {
    return 1;
  } else {
    let operacionRecursiva = multiplicarRango(inicio, fin - 1);

    console.log(fin);

    let resultado = fin * operacionRecursiva;

    return resultado;
  }
};

let numeroInicio = 2,
  numeroFin = 4;

let resultadoFuncion = multiplicarRango(numeroInicio, numeroFin);

console.log(resultadoFuncion);
