// Este ejercicio devuelve la suma de una mesa de platos de comida, la funcion sabe diferenciar si se esta sumando el dinero del valor de los platos sin cometer errores sumando datos del cliente.

const mesa = {
  pizza: 15,
  refresco: 3,
  postre: 5,
  cliente: "Jefrey",
  metodoPago: "Tarjeta",
  get totalCuenta() {
    let pagaTotal = 0;

    for (let orden in this) {
      if (orden === "totalCuenta") {
        continue;
      }
      let verificacionTipo = this[orden];

      if (typeof verificacionTipo === "number") {
        pagaTotal += verificacionTipo;
      }
    }
    return pagaTotal;
  },
};

console.log(mesa.totalCuenta);
