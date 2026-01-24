function operacionMatematica(a, b) {
  let resultado = a + b;

  // sin esto no regresaria el valor de la operacion
  return resultado;
}

// LLamada de la funcion (Programa principal)

let argumentoA = 10,
  argumentoB = 20;

let suma = operacionMatematica(argumentoA, argumentoB);

console.log(suma);
