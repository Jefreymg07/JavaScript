const Cassidy = {
  nombre: "Cassidy",
  vida: 225,
  bala: 70,
};

const widowmaker = {
  nombre: "Widowmaker",
  vida: 175,
  bala: 120,
};

const aplicarParche = function (cambioVida, cambioDanio) {
  this.vida += cambioVida;
  this.bala += cambioDanio;
  console.log(
    `Parche aplicado a ${this.nombre}: Vida ${this.vida} | Danio ${this.bala}`,
  );
};

aplicarParche.call(Cassidy, 25, 30);