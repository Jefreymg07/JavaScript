// Ejercicio funcion recursiva para mandar a imprimir el numero base multiplicado por el exponente

const calcularPotencia = (base, exponente) => {
  if (exponente == 0) {
    return 1;
  } else {
    let operacion = calcularPotencia(base, exponente - 1);

    console.log(base);
    console.log(exponente);

    let resultado = base * operacion;

    console.log(`${base} x ${operacion} = ${resultado}`);

    return resultado;
  }
};

let numeroBase = 2,
  numeroExponente = 3;

let resualtadoOperacion = calcularPotencia(numeroBase, numeroExponente);

console.log(resualtadoOperacion);
