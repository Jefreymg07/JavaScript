// Realizar la suma de los primeros 5 numeros utilizando un ciclo for :

let repeticiones = 5,
  acumuladorSuma = 0;

for (let contador = 1; contador <= repeticiones; contador++) {
  let sumaAnterior = acumuladorSuma;

  acumuladorSuma += contador;
  console.log(
    `La suma de ${sumaAnterior} + ${contador} es = ${acumuladorSuma}`
  );
}
