// Idea de sistema de rankeds en los videojuegos

const sistemaRankeds = {
  rankedPoint: 0,
  get ligaActual() {
    if (this.rankedPoint < 100) {
      return "Bronce";
    } else if (this.rankedPoint >= 100 && this.rankedPoint < 200) {
      return "Plata";
    } else {
      return "Oro";
    }
  },
  set resultadoPartida(resultado) {
    if (resultado === "Victoria") {
      this.rankedPoint += 50;
    } else if (resultado === "Derrota") {
      this.rankedPoint -= 20;
    }
    // este if es clave porque va separado de los anterios, ya que si cae en unos de los dos if anteriores no pasara la revision si la puntuacion es menor a 0.
    if (this.rankedPoint < 0) {
      this.rankedPoint = 0;
    }
  },
};

for (i = 0; i < 4; i++) {
  console.log(
    `Partida ${i + 1}, ${(sistemaRankeds.resultadoPartida = "Victoria")}`,
  );
}

console.log(sistemaRankeds.rankedPoint);

console.log(sistemaRankeds.ligaActual);
