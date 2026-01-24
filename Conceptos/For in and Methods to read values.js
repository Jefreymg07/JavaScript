// (For in) para mandar a imprimer las llaves y valores de un objeto

const heroe = {
  nombre: "Soldier",
  rol: "Dmg",
  dps: 162,
  vida: 200,
};

for (let datos in heroe) {
  console.log(datos);
  console.log(heroe[datos]);
}

// metodo para imprimir las llaves de un objeto como arreglo

console.log(Object.keys(heroe));

// metodos para imprimir los valores del objeto como arreglo

console.log(Object.values(heroe));

// metodo para imprimir las llaves y los valores de un abjeto

console.log(Object.entries(heroe));
