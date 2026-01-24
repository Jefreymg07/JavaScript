let saldoTotal = 1000.0;

let opcion = 0;

let salir = 4;

do {
  opcion = parseFloat(
    prompt(`Saldo actual: ${saldoTotal}
    
Seleccione el numero de la operacion que desea realizar

1. Ver saldo
2. Depositar
3. Retirar
4. Salir`)
  );

  switch (opcion) {
    case 1:
      alert(`Saldo disponible: ${saldoTotal}`);

      break;

    case 2:
      let saldoDepositado = parseFloat(prompt("Ingrese el monto a depositar"));

      saldoTotal += saldoDepositado;

      alert(`Su nuevo saldo es: ${saldoTotal}`);

      break;

    case 3:
      let saldoRetiro = parseFloat(prompt("Ingrese el monto a retirar"));

      if (saldoRetiro > saldoTotal) {
        alert("Saldo insuficiente");
      } else {
        saldoTotal -= saldoRetiro;
        alert(`Su nuevo saldo es: ${saldoTotal}`);
      }

      break;

    case 4:
      alert("Cerrando sistema");
      break;

    default:
      alert("Operacion seleccionada invalida");
      break;
  }
} while (opcion !== 4);
