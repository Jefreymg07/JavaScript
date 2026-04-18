class AnilisisRailgun {
  constructor(historialDeBalas) {
    this._historialDeBalas = historialDeBalas;
  }
  set nuevoHistorial(nuevoArreglo) {
    if (nuevoArreglo.length === 0) {
      console.log("Error: el cargador esta vacio");
    } else {
      this._historialDeBalas = nuevoArreglo;
    }
  }
  get danioTotal() {
    const sumaDanio = this._historialDeBalas.reduce((acumulador, balas) => {
      return acumulador + balas;
    }, 0);
    return sumaDanio;
  }
}

const sojournBullets = new AnilisisRailgun([100, 20, 30, 2, 5]);

console.log(sojournBullets.danioTotal);
