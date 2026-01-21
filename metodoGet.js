const pcGamer = {
  procesador: 300,
  grafica: 600,
  fuente: 100,

  // TU MISIÓN AQUÍ 👇
  // Crea un getter llamado 'precioTotal' que sume los 3 componentes.

  get precioTotal() {
    return this.procesador + this.grafica + this.fuente;
  },
};

// PRUEBA DE FUEGO 🔥
console.log(pcGamer.precioTotal); // Debería imprimir 1000
