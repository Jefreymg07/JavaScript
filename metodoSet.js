// Metodo set para comprobar el monto a depositar

const cuentaBancaria = {
  saldo: 0,
  set ingresarDinero(monto) {
    if (monto <= 0) {
      console.error("Ingrese una cantidad valida");
    } else {
      this.saldo += monto;
    }
  },
};

cuentaBancaria.ingresarDinero = 2;

console.log(cuentaBancaria.saldo);
