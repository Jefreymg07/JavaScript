// Manda a escribir las estadisticas del objeto utilizando el for in

const estadisticas = {
  kills: 32,
  deaths: 5,
  asistencias: 12,
  damage: 15000,
};

// Escribe tu for...in aquí abajo 👇

for (let datos in estadisticas) {
  console.log(`En la categoria de ${datos} quedaste: ${estadisticas[datos]}`);
}

// Ejercicio de suma utilizando for in

const billetera = {
    billetesDeUno: 5,
    billetesDeCinco: 15,
    billetesDeDiez: 20,
    billetesDeVeinte: 60
};

let TotalDinero = 0;


for(let dinero in billetera) {

    TotalDinero += billetera[dinero];

}

console.log(TotalDinero)


