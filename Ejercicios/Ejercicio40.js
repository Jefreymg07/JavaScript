const genji = {
  nombre: "Genji",
  frase: "Ryujin no ken wo kurae!)",
  danioBase: 110,
};

const sojourn = {
    nombre: "Sojourn",
    frase: "Se acabo el recreo!",
    danioBase: 250,
};

const activarUltimate = function(enemigosGolpeados){

    let danioTotal = this.danioBase * enemigosGolpeados;

    console.log(`${this.nombre} dice ${this.frase}`);

    console.log(`${this.nombre} impacto a ${enemigosGolpeados} enemigos e hizo este danio total ${danioTotal}`);

}

activarUltimate.call(genji, 2);

