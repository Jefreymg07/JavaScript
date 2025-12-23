// Escribe un código que use un ciclo for para calcular cuántos kilómetros llevas acumulados en total al final de cada día durante una semana (7 días).

let dias = 7;

let acumuladorKg = 0;

for (contador = 1; contador <= dias; contador++) {
  acumuladorKg += contador;

  console.log(`Dia ${contador} = ${acumuladorKg}kg`);
}
