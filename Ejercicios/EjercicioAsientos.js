let salaL = [
  { asiento: "L1", disponible: true },
  { asiento: "L2", disponible: true },
  { asiento: "L3", disponible: true },
  { asiento: "L4", disponible: true },
  { asiento: "L5", disponible: true },
];

let salaR = [
  { asiento: "R1", disponible: true },
  { asiento: "R2", disponible: true },
  { asiento: "R3", disponible: true },
  { asiento: "R4", disponible: true },
  { asiento: "R5", disponible: true },
];

const gestionarReserva = (salaNombre, disponibilidad) => {
  /* Esta es una funcion que filtra primero la disponibilidad de los asientos del arreglo de objetos,
   luego imprime el array con .map de los asientos disponibles */
  let disponibilidadSala = disponibilidad
    .filter((asientos) => asientos.disponible === true)
    .map((asientos) => asientos.asiento)
    .join(", ");
  /* .join solo hizo que el array se viera ordenado agregandoles una coma al final de cada objeto entregado por el .map,
     pero la condicion es que agrega solo entre medio de dos objetos,
     por eso para el ultimo objeto no se le agrega coma. */

  if (disponibilidadSala) {
    let seleccion = prompt(`Sala ${salaNombre}
      Asientos disponibles:
      ${disponibilidadSala}
      
      Seleccione el asiento a reservar`);
    let asientoEncontrado = disponibilidad.find(
      (asiento) => asiento.asiento === seleccion.trim(),
    );
    if (asientoEncontrado) {
      asientoEncontrado.disponible = false;
      alert(`Ha reservado el asiento ${asientoEncontrado.asiento}`);
    }
  } else {
    alert(`No hay asientos disponibles`);
  }
};

let sala = parseFloat(
  prompt(`Ingrese el numero de la sala en la que desea reservar asiento

        1. Sala L
        2. Sala R`),
);

switch (sala) {
  case 1:
    gestionarReserva("Sala L", salaL);
    break;
  case 2:
    gestionarReserva("Sala R", salaR);
    break;
  default:
    alert("Numero invalido, intente de nuevo");
}
