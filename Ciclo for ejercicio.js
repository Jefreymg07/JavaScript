// Realizar la suma de los primeros 5 numeros utilizando un ciclo for : 
let repeticiones = 5, acumuladorSuma = 0;

for (let contador = 1; contador <= repeticiones; contador++) {

    // Guarda el valor actual de acumuladorSuma en otra variable llamada sumaAnterior. Esto sirve solo para mostrar el valor antes de la suma, en el mensaje. 
    let sumaAnterior = acumuladorSuma;

    acumuladorSuma += contador;
    console.log(`La suma de ${sumaAnterior} + ${contador} es = ${acumuladorSuma}`)
}
