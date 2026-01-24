// Ejercicio la suma acumulativa

const sumarHasta = (n) => {
  if (n == 1) {
    return 1;
  } else {
    let operacion = sumarHasta(n - 1);

    console.log(n);
    console.log(operacion);

    let resultado = n + operacion;

    console.log(`${n} + ${operacion} = ${resultado}`);

    return resultado;
  }
};

let numeroSuma = 5;

let resultOperation = sumarHasta(numeroSuma);

console.log(resultOperation);
