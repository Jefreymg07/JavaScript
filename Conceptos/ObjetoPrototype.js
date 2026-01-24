function Soldado(nombre) {
  this.nombre = nombre;
}

// prototype hace una nueva propiedad externa para el constructor

Soldado.prototype.ejercito = "Rebeldes";

soldado1 = new Soldado("Soldier");

soldado2 = new Soldado("Viktor");

console.log(JSON.stringify(soldado1));

console.log(JSON.stringify(soldado2));

console.log(`El soldado Soldier pertenece a los "${soldado1.ejercito}"`);

console.log(`tambien Viktor pertenece a los "${soldado2.ejercito}"`);
