// Una funcion que muestra los numeros en aumento en forma de piramide, es decir para la primera iteracion en el primer reglon sera 1, el siguiente 12 y ase sucesivamente.

function escaleraNumerica(numeros) {
  for (i = 1; i <= numeros; i++) {
    let saltoDeLinea = "";

    for (j = 1; j <= i; j++) {
      saltoDeLinea += j + " ";
    }
    console.log(saltoDeLinea);
  }
}

let number = 5;

escaleraNumerica(number);
