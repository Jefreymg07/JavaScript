let repeticionesReglones = 6;
let linea = "";
for(i = 1; i <= repeticionesReglones; i++) {

    for(j = 1; j <= i; j++) {
        console.log(linea += "*");
    }
}