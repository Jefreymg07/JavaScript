// Realizar la suma de los primeros 5 numeros utilizando un ciclo while :

let repeticiones = 5;

let sumaNumerosAcumulados = 0;

let contador = 1;

while (contador <= repeticiones) {
  let aumentoAnterior = sumaNumerosAcumulados;

  sumaNumerosAcumulados += contador;

  console.log(
    `La suma de ${aumentoAnterior} + ${contador} es = ${sumaNumerosAcumulados}`
  );

  contador++;
}
