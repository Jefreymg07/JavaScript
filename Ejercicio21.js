// Ejercicio de "DIVISION" con una funcion recursiva

const dividir = (dividendo, divisor) => {
  if (dividendo == 0) {
    return 0;
  } else if (dividendo < divisor) {
    return 0;
  } else {
    let operacion = dividir(dividendo - divisor, divisor);

    console.log(dividendo);
    console.log(divisor);

    console.log(operacion);

    let resultado = 1 + operacion;

    console.log(resultado);

    return resultado;
  }
};

let numeroDividendo = 12,
  numeroDivisor = 4;

let resultadoFuncion = dividir(numeroDividendo, numeroDivisor);

console.log(resultadoFuncion);
