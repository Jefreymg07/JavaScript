const multiplicacion = (base, multiplicar) => {
  if (multiplicar == 0) {
    return 0;
  } else {
    let operacion = multiplicacion(base, multiplicar - 1);

    console.log(base);

    // Esto solo es visual ya que en si no es el valor que se multiplica sino el numero de vuelta recursiva
    console.log(multiplicar);

    let resultado = base + operacion;

    console.log(`${base} x ${multiplicar} = ${resultado}`);

    console.log(resultado);

    return resultado;
  }
};

let numeroBase = 5,
  numeroMultiplicar = 3;

multiplicacion(numeroBase, numeroMultiplicar);
