// Ejercicio el metodo de un constructor lo toma un objeto y es aplicado sobre otro objeto.

// Forma moderna de como declarar y definir una funcion constructora y sus metodos:

class Robot {
  constructor(nombre, vida, energia, fuerza) {
    this.nombre = nombre;
    this.vida = vida;
    this.energia = energia;
    this.fuerza = fuerza;
  }
  Disparar(objetivo) {
    objetivo.vida -= this.fuerza;

    console.log(this.nombre + " Ataco a " + objetivo.nombre);
  }
}

let robots = [];

robots.push(
  new Robot("Bastion", 300, 200, 500),
  new Robot("Ruckus", 500, 50, 20),
);

robots[0].Disparar(robots[1]);

console.log(robots);
