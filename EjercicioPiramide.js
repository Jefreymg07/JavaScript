let repeticionesReglones = 6;
let saltoDeLinea = "";
for (i = 1; i <= repeticionesReglones; i++) {
  for (j = 1; j <= i; j++) {
    console.log((saltoDeLinea += "*"));
  }
}
