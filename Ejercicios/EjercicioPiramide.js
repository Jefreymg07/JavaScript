let repeticionesReglones = 6;
for (i = 1; i <= repeticionesReglones; i++) {
  let saltoDeLinea = "";
  for (j = 1; j <= i; j++) {
    saltoDeLinea += "*";
  }
  console.log(saltoDeLinea);
}
