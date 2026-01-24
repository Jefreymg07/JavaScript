// Usando .filter y .map para saber a cuales alumnos se les dara certificado por aprobacion

const alumnos = [
  { nombre: "Jefrey", nota: 9 },
  { nombre: "Pedro", nota: 4 },
  { nombre: "Maria", nota: 10 },
  { nombre: "Juan", nota: 5 },
];

// Aqui use .filter primero para que filtrara solo los alumnos con nota mayor o igual a 6, luego .map agarra esos datos y los transforma en texto. 
const certificados = alumnos
  .filter((notas) => {
    return notas.nota >= 6;
  })
  .map((aprobados) => {
    return `Certificado para: ${aprobados.nombre}`;
  });

console.log(certificados);
