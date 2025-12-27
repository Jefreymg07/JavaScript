 // Ejercicio de funcion recursiva

// Esto es una function pero hecha de otra manera (Arrow function)

const calcularFactorial = (numero) => {
  if (numero == 1) {
    return 1;
  } else {
    let resultado = calcularFactorial(numero - 1);

    return numero * resultado;
  }
};

let numeroFactorizar = 5;

let resultOperation = calcularFactorial(numeroFactorizar);

console.log(resultOperation);
