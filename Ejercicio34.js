// Ejercicio para dominar el metodo get

const autoInteligente = {
  bateria: 25,
  cinturon: true,
  get sheckSistema() {
    let permisoMotor = undefined;

    if (this.bateria > 0 && this.cinturon === true) {
      permisoMotor = true;
    } else {
      permisoMotor = false;
    }
    return permisoMotor;
  },
};
console.log(autoInteligente.sheckSistema);


