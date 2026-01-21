function Bebidas(nombreRecibido, precioRecibido, tamanioRecibido) {
  this.nombre = nombreRecibido;
  this.precio = precioRecibido;
  this.tamanio = tamanioRecibido;
  this.esCaliente = true;
}

// Aqui creamos solamente una nuevo objeto para el constructor

let bebida1 = new Bebidas("Americano", 1.15, "8 onz");

console.log(bebida1);

// Aqui utilizamos un array para poder hacer varios objetos a la vez, sin tener que estar haciendo muchas variables por cada objeto.

let menuBebidas = [];

menuBebidas.push(
  new Bebidas("Latte", 2.75, "8 onz"),
  new Bebidas("Capuchino", 1.75, "8 onz"),
);

console.log(menuBebidas);

menuBebidas.forEach((Bebida) => {
  console.log(
    `Hoy le tenemos ${Bebida.nombre}, por $${Bebida.precio} de ${Bebida.tamanio}`,
  );
});

// Estas son las maneras para modificar los valores de los objetos:

// Esta es la manera para cambiarselo a un unico objeto creado

bebida1.nombre = "Vainilla Latte";

console.log(bebida1);

// Esta es la manera cuando los objetos estan en un array

menuBebidas[0].nombre = "Americano";

console.log(menuBebidas);

/* Por ultimo, no siempre sabremos exactamante la posicion de indice de un objeto para modificarlo, 
Que hacemos en ese caso?
Utilizamos .find encontrar el objeto segun su nombre:
*/

const encontrarObjeto = menuBebidas.find(
  (foundDrink) => foundDrink.nombre === "Americano",
);
if (encontrarObjeto) {
  console.log("Objeto encontrado", encontrarObjeto);

  // Luego procedemos a modificarlo

  encontrarObjeto.nombre = "Soda";
} else {
  console.log("No se encontro el objeto");
}

// Ya por ultimo podemos observar que si se modifico el nombre del objeto en el array principal almacenado

console.log(menuBebidas);

/* Ahora como hacemos para borrar un objeto?
Utilizamos .splice */

/* Se le indica primero el indice y luego la cantidad de elementos a cortar,
es como un cuchillo si le indicamos el indice 0 y la cantidad de elementos 2,
borrara desde el indice 0 a la derecha hasta cortar la cantidad de elementos seleccionada. */

menuBebidas.splice(0, 1);

console.log(menuBebidas);

/* Que pasa cuando no sabemos el indice del objeto a borrar? 
Utilizamos .findIndex para saber en cual indice se encuantra almacenado el objeto*/

const indiceParaBorrar = menuBebidas.findIndex(
  (drink) => drink.nombre === "Capuchino",
);

console.log(`Indice de objeto a borrar encontrado: ${indiceParaBorrar}`);

// Se pone -1 porque significa que si un indice no es encontrado este devolvera -1
if (indiceParaBorrar !== -1) {
  menuBebidas.splice(indiceParaBorrar, 1);
} else {
  console.log(indiceParaBorrar);
}

console.log(menuBebidas);
