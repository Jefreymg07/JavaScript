let maestro = {
  nombre: "Yoda",
  arma: "Sable de luz",
  atacar: function () {
    return `${this.nombre} ataca con su ${this.arma}`;
  },
};

let aprendiz = {
  nombre: "Luke",
  arma: "Palo de madera",
};
/* Aqui el metodo call hizo el prestamo del metodo del objeto maestro
y dicho metodo se lo prestamos al objeto aprendiz */
console.log(maestro.atacar.call(aprendiz));
