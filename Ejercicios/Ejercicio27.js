// Funcion recursiva que multiplica los elementos ("nuemeros") de un array.

const multiplicarArreglo = (numerosArreglo) => {
  if (numerosArreglo.length == 0) {
    return 1;
  }
  let operacionRecursiva = multiplicarArreglo(numerosArreglo.slice(1));

  console.log(operacionRecursiva);

  let resultado = numerosArreglo[0] * operacionRecursiva;

  return resultado;
};

let arreglo = [2, 3, 4];

let resultadoFuncion = multiplicarArreglo(arreglo);

console.log(resultadoFuncion);
