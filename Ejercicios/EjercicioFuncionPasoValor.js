function esEdadValida(edad) {
  if (edad < 18) {
    console.warn("El usuario es menor de edad");
    return false;
  } else if (edad < 1) {
    console.log("Ingrese una edad valida");
    return false;
  } else {
    console.log("Ingrese un dato valido");
    return false;
  }
}

let edadIngresada = 17;

let edadAprobada = esEdadValida(edadIngresada);

console.log(edadAprobada);
