// Ejercicio para devolver el residuo de una divion con una funcion recursiva

const divisionResiduo = (dividendo, divisor) => {
  if (dividendo == 0) {
    return 0;
  } else if (dividendo < divisor) {
    return dividendo;
  } else {
    let operacion = divisionResiduo(dividendo - divisor, divisor);

    let resultado = operacion;

    console.log(resultado);

    return resultado;
  }
};

let monedas = 14,
  juguetes = 4;

let operationResult = divisionResiduo(monedas, juguetes);

console.log(operationResult);
