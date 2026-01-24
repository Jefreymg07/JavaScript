const tiendaSteam = [
  { id: 101, titulo: "Elden Ring", genero: "RPG", precio: 60 },
  { id: 102, titulo: "Hollow Knight", genero: "Metroidvania", precio: 15 },
  { id: 103, titulo: "The Witcher 3", genero: "RPG", precio: 30 },
  { id: 104, titulo: "Terraria", genero: "Sandbox", precio: 10 },
  { id: 105, titulo: "Cyberpunk 2077", genero: "RPG", precio: 50 },
];

// MISIÓN 1: .filter()
// Crea una variable 'ofertasRPG' que guarde los juegos que sean "RPG"
// Y QUE ADEMÁS (&&) cuesten menos de 40 dólares.

const offers = tiendaSteam.filter((ofertasRPG) => {
  return ofertasRPG.genero === "RPG" && ofertasRPG.precio < 40;
});

console.log(offers);

// MISIÓN 2: .find()
// Crea una variable 'juegoBuscado' que encuentre el juego con el id 104.

const buscar = tiendaSteam.find((buscador) => {
  return buscador.id === 104;
});

console.log(buscar);