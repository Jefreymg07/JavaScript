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
