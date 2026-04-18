class CassidyRevolver {
  constructor(numeroDeBalas) {
    this._numeroDeBalas = numeroDeBalas;
  }
  set municion(balas) {
    if (balas > 6) {
      this._numeroDeBalas = 6;
    } else if (balas < 0) {
      this._numeroDeBalas = 0;
    } else {
      this._numeroDeBalas = balas;
    }
  }
  get municion() {
    if (this._numeroDeBalas <= 0) {
      return `U need to reload: ${this._numeroDeBalas}`;
    } else {
      return `U have ${this._numeroDeBalas} bullets`;
    }
  }
}

const playerCassidy = new CassidyRevolver(3);

console.log(playerCassidy.municion);
