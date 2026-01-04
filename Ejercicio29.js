// Subcadenas JavaScript 

// Ejercicio substraer la segunda palabra

let palabra = "Hola Mundo";

// El metodo substring trae la letra del indice especificado hasta el final del otro indice especificaco

let substraer = palabra.substring(5, 10);

console.log(substraer);

// Ejercicio debe unir dos cadenas de texto utilizando substring

let cadena1 = "Mi nombre es";
let cadena2 = "Jefrey";

// Este seria el metodo tradicional:

console.log(cadena1 + " " + cadena2);

// Este seria utilizando substring:

// El espacio en blanco que se hace es por la separacion de ambas variables utilizando interpolation

console.log(`${cadena1} ${cadena2}`)