// Ejemplo de que const no es inmutable, se pueden agregar valores y mas cosas

const equipo = ["Geraxh", "Dasheikah"];

console.log(equipo);

const newName = (lista, name) => {
  lista.push(name);
};

let nombreExtra = "Luiskikin";

newName(equipo, nombreExtra);

console.log(equipo);
