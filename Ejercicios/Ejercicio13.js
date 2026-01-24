// Declare un arreglo y separe los elementos de este, almacenandolos en los otros dos arreglos correspondientes para cada valor.

let paquetes = [10, 65, 20, 5, 90, 50, 30, 105];

let livianos = [];

let pesados = [];

for (i = 0; i < paquetes.length; i++) {
  if (paquetes[i] < 50) {
    livianos.push(paquetes[i]);
  } else {
    pesados.push(paquetes[i]);
  }
}
console.log(`Los paquetes livianos son: ${livianos}`);
console.log(`Los paquetes pesasdos son: ${pesados}`);
