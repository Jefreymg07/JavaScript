let number = 8.5,
  redondeo,
  truncado;

// Math.round es un metodo que redondea el numero decimal (flotante), si esta en .5 o superior este lo redondea al numero mayor cercano, si es menos de .5, este se redondea al numero base (sin decimal).

redondeo = Math.round(number);

console.log(redondeo);

// Math.trunc es un metodo que quita el decimal

truncado = Math.trunc(number);

console.log(truncado);
