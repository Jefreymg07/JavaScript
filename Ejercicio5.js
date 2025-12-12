// Realizar la suma de los primeros 5 numeros utilizando un ciclo while :

let repeticiones = 5;

let sumaDeNumeros = 0;

let contador = 1;

while(contador <= repeticiones) {

    let sumaAnterior = sumaDeNumeros;

    sumaDeNumeros += contador;

    contador++;

    console.log(`La suma de ${sumaAnterior} + ${contador} = ${sumaDeNumeros}`);

}