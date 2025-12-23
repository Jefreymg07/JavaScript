// Esto sirve para saber el indice y el valor de cada indice en el arreglo.

let arregloSimplificado = [
  "Jefrey",
  21,
  "Anio de nacimiento " + 2004,
  50 + 50,
  ,
];

console.log(arregloSimplificado.length);

for (i = 0; i < arregloSimplificado.length; i++) {
  console.log(`El indice ${i} es = ${arregloSimplificado[i]}`);
}
