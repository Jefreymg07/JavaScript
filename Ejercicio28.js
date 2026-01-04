// Ejercicio de fibonacci, es una suma de ambos lados recursivos, uno baja de 1 en 1 y otro de 2 en 2, lueg ambos lados se suman al llegar a 0;

const fibonacci = (lado) => {
  if (lado < 2) {
    return lado;
  } else {
    let recursividad = fibonacci(lado - 1);

    let recursividad2 = fibonacci(lado - 2);

    let resultado = recursividad + recursividad2;

    return resultado;
  }
};

let numeroInicial = 4;

let resultadoFuncion = fibonacci(numeroInicial);

console.log(resultadoFuncion);
