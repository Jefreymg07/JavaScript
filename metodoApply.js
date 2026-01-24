let chef = {
  nombre: "Gordon",
  cocinar: function (platillo) {
    return `${this.nombre} esta cocinando ${platillo}`;
  },
};

let novato = {
  nombre: "Pepe",
};

console.log(chef.cocinar.call(novato, "Tacos"));

/* Este es un metodo diferente pero que hace lo mismo que .call
su nombre es .apply
pero .apply no puede recibir un arguemento suelto,
tiene que recibir un array o algo en forma de lista por ejemplo ["Sushi"]*/
let platos = ["Pizza"];

console.log(chef.cocinar.apply(novato, platos));

// Usando un Array "literal" (al vuelo)
// No está guardado en variable, pero tiene los corchetes []
console.log(chef.cocinar.apply(novato, ["Hamburguesa"]));

/* Usando una expresión que devuelve un array 
Aqui estamos utilizando .slice
Esto regresara solamente desde la posicion indice 0 del array hasta la cantidad de elementos especificada a la derecha*/

console.log(chef.cocinar.apply(novato, ["Burritos", "Salsa"].slice(0, 1)));