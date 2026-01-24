// Usando .map para ver si es mayor de edad o no

const edades = [12, 25, 17, 30];

const esMayor = edades.map((edad) => {
  // Retorna la comparación directa
  return edad >= 18;
});

console.log(esMayor);
