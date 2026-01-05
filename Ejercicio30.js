// Ejercicio hacer un objeto y sus filtraciones utilizando el metodo ".filter"

const heroes = [
  { nombre: "Reinhardt", rol: "Tank", vida: 625, dps: 85 },
  { nombre: "Tracer", rol: "Dmg", vida: 150, dps: 220 },
  { nombre: "Mercy", rol: "Healer", vida: 200, dps: 50 },
  { nombre: "D.Va", rol: "Tank", vida: 650, dps: 146 },
  { nombre: "Soldier: 76", rol: "Dmg", vida: 200, dps: 162 },
  { nombre: "Lucio", rol: "Healer", vida: 200, dps: 85 },
  { nombre: "Genji", rol: "Dmg", vida: 200, dps: 148 },
  { nombre: "Ana", rol: "Healer", vida: 200, dps: 87 },
];

// Aqui estoy mandando a filtrar los heroes por su rol con el metodo (.Filter), para ello utilice tres funciones.

// Funcion filtrar tanks
const soloTank = heroes.filter((heroe) => {
  return heroe.rol === "Tank";
});

// Funcion filtrar healers
const soloHealer = heroes.filter((heroe) => {
  return heroe.rol === "Healer";
});

// Funcion filtrar Dmgs
const soloDmg = heroes.filter((heroe) => {
  return heroe.rol === "Dmg";
});

console.log(soloTank);

console.log(soloHealer);

console.log(soloDmg);

// Esta funcion solo filtra los heroes menores a 200 hp
const cristalHP = heroes.filter((vidaHeroes) => {
  return vidaHeroes.vida < 200;
});

console.log(cristalHP);
