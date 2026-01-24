const personaje = {
  nombre: "Jefrey",
  vida: 50,
};

console.log(personaje.vida);

const curarPersonaje = (jugador) => {
  jugador.vida += 50;  
};

curarPersonaje(personaje);

console.log(personaje.vida);
