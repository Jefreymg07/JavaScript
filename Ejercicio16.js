// Ejercicio para extraer los objetos del arreglo, luego se mandan a imprimir solo los que se necesitan

const estudiantes = [
  { id: 1, nombre: "Jefrey", email: "jefrey@code.com", nota: 9 },
  { id: 2, nombre: "Maria", email: "maria@code.com", nota: 10 },
  { id: 3, nombre: "Pedro", email: "pedro@code.com", nota: 6 },
];
console.log(estudiantes.length);
// Escribe tu bucle for aquí abajo 👇
for (i = 0; i < estudiantes.length; i++) {
  console.log(i)
  if (estudiantes[i].nota >= 7) {
    console.log(
      `Nombre: ${estudiantes[i].nombre} | Correo: ${estudiantes[i].email}`
    );
  }else{
    console.log(`Alumnos reprobados: ${estudiantes[i].nombre}`)
  }
}
let sumaTotal = 0;

for(i = 0; i < estudiantes.length; i++) {
  sumaTotal += estudiantes[i].nota;
}
let promedioNotas = sumaTotal / estudiantes.length; 
console.log(`El promedio de notas de los estudiantes: ${promedioNotas.toFixed(2)}}`);
