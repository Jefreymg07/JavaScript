// Ejercicio de Utilizacion de un metodo (funcion) dentro de un constructor

function Campeon(nombre, vida, mana, danioAtaque) {
  this.nombre = nombre;
  this.vida = vida;
  this.mana = mana;
  this.danioAtaque = danioAtaque;
  this.Fight = function (enemigo) {
    enemigo.vida -= this.danioAtaque;
  };
}

// Declare un array para que puediera contener varios objetos a la vez
let campeones = [];

// Se definieron los nuevos valores y se enviaron al constructor "Campeon" para volverlos un objeto nuevo
campeones.push(
  new Campeon("Renekton", 100, 200, 40),
  new Campeon("Mordekaiser", 200, 300, 10),
);

const noMostrarMetodos = (campeonIndividual) => {
  let informacionCampeon = ""; // Esta variable hace que se impriman de manera ordenada los objetos
  for (let propiedades in campeonIndividual) {
    if (typeof campeonIndividual[propiedades] === "function") {
      continue;
    } else {
      informacionCampeon += `${propiedades}: ${campeonIndividual[propiedades]} | `;
    }
  }
  console.log(informacionCampeon);
};
/* Se le hizo .forEach a campeones es decir al arrey [] para que este recorriera todos los valores
Para que?
Asi todos los objetos que contiene el array (campeones) son entregados uno por uno al parametro (campeonIndividual) de la funcion (noMostrarMetdos)
y esta funcion revisa si cada objeto contiene un metodo (function) en sus propiedades no lo imprime */
campeones.forEach((champion) => {
  noMostrarMetodos(champion);
});

/* ya por ultimo se finaliza el ejercicio llamando a la funcion del objeto .fight
en la cual se asignan las posiciones del metodo.

Ejemplo de como se leeria el siguiente codigo:
Renekton.Fight(Mordekaiser) */
campeones[0].Fight(campeones[1]);

// Luego se le paso el objeto afectado al parametro de la funcion (noMostrarMetodos) para volver a verlo impreso y ver su cambio.
noMostrarMetodos(campeones[1]);

/* Esta es una forma de mostrar un objeto sin que se vean las propiedades que contienen metodos (funciones).
console.log(JSON.stringify());
*/
