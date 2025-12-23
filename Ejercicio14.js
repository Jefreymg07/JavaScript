// Aqui declaramos un array y un objeto (la constante ESTUDIANTE) para asignar los valores del array donde corresponde en el objeto. 

let estudiante1 = ["Jefrey", 21, "Ingenieria", 9.5];

const ESTUDIANTE = {
  nombre: estudiante1[0],
  edad: estudiante1[1],
  carrera: estudiante1[2],
  materias: estudiante1[3],
};

console.log(ESTUDIANTE);
