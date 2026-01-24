let matriz = [
  ["Jefrey", 21, 2004, "Male"],
  ["Esther", 19, 2006, "Female"],
];

// Nos preguntamos cuantos arreglos tiene la matriz haciendo uso de .length
console.log(matriz.length);

//Nuevamente, preguntamos cuantos elementos tiene el arreglo, hacemos uso de .length indicando el numero del arreglo [0], [1], [3], etc...
console.log(matriz[0].length);

console.log(matriz[1].length);

for (i = 0; i < matriz.length; i++) {
  console.log(matriz[i]);
  for (j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j]);
  }
}
