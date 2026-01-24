// Funcion para saber la distancia de un personaje con su enemigo (utilizando Math.abs)

// La clase Math.abs esta volteando el valor dado, es decir si la operacion diera un numero negativo con Math.abs el valor absoluto seria el valor positivo de dicho numero.

const metrosDistancia = (personaje, enemigo) => {
  let distanceOperation = Math.abs(personaje - enemigo);

  return distanceOperation;
};

let luigiDistancia = 40,
  BowserDistancia = 50;

let resultadoFuncion = metrosDistancia(luigiDistancia, BowserDistancia);

console.log(`Tu enemigo esta a ${resultadoFuncion} mts de distancia`);
