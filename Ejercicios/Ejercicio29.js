// Ejercicio de la creacion de un objeto y su funcion

let campeon = {
  nombre: "Yasuo",
  vida: 1000,
  ataque: 80,
  presentarse: function () {
    let presentacion = `Soy ${this.nombre} y tengo ${this.vida} de vida`;

    return presentacion;
  },
  golpear: function () {
    let danio = `${this.nombre} golpea infligiendo ${this.ataque}`;

    return danio;
  },
};

console.log(campeon.presentarse());

console.log(campeon.golpear());
