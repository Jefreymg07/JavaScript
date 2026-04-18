const impactosRecibidos = [120, 300, 50, 40];

let indice = impactosRecibidos.length;

/* Siempre cuando trabajamos con .reduce
el primer parametro sera el acumulador, el cual se llenara en la segunda vuelta con el return del numero de la variable a la que retornamos,\
el segundo parametro recibe el valor uno por uno del array
el tercer valor (si agregamos) sera un indice de cada elemento del array
el cuarto parametro es el array completo para mostrar*/

const conteoImpactos = impactosRecibidos.reduce(
  (acumulador, impacto, indiceVuelta) => {
    const impactosTotales = acumulador + impacto;

    console.log(indiceVuelta);

    return impactosTotales;
  },
  0,
);

console.log(conteoImpactos);
