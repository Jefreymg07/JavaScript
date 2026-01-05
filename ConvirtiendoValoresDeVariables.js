let numero1 = "10", numero2 = "20";

let operacion = numero1 + numero2;

// Esta suma solo concatena porque no se ha parseado a tipo int el numero, es decir las variables que se suman siguen siendo texto.

console.log(operacion);

// En esta ocasion a los valores de las variables se les hizo parseInt, es decir se volvieron de tipo int.

let operacionParse = parseInt(numero1) + parseInt(numero2);

console.log(operacionParse);

// Ahora se cambio el valor de tipo int a texto.

let number = 500, number2 = 400;

// Usamos ".toString()" despues de la variable a convertir a texto con.

let cambioTexto = number.toString() + number2.toString();

// Por eso ahora solo se concatenan los valores, son de tipo texto.

console.log(cambioTexto);