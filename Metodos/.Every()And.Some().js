// Estos dos metodos solo devuelven valores booleanos (.every) (.some)

// Datos del equipo
const equipo = [
  { nombre: "Geraxh", nivel: 30, baneado: false },
  { nombre: "Dasheikah", nivel: 500, baneado: false },
  { nombre: "Troll", nivel: 30, baneado: true },
];

// --- TU MISIÓN ---

// 1. Usa .some() para ver si hay ALGUIEN baneado (debería dar true)

const baneado = equipo.some((bannedPlayer) => {
  return bannedPlayer.baneado;
});
console.log(`Hay algun player baneado?, ${baneado}`);
// 2. Usa .every() para ver si TODOS tienen nivel mayor o igual a 30 (debería dar true)
const playerLevel = equipo.every((level) => {
  return level.nivel >= 30;
});
console.log(`Todos los jugadores tienen el nivel suficiente?, ${playerLevel}`);
