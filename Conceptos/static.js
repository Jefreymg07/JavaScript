class Soldado {
  static ejercito = "Rebeldes";
  constructor(nombre) {
    this.nombre = nombre;
  }
}

let soldado1 = new Soldado("Viktor");

let soldado2 = new Soldado("Soldier");

/* Aqui estamos llamando a la propiedad externa (ejercito) con static
pero de manera individual, no podremos ver su valor,
eso solo se puede con ".prototype". */

console.log(soldado1.ejercito); // aparecera undefined

/* Aqui estamos llamando a la clase con la propiedad "ejercito"
en este caso si podremos ver su valor.
Por que?
su valor queda en la clase, no en cada objeto que creemos. */

console.log(Soldado.ejercito);
