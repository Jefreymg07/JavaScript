// Declaro un arreglo con todos los productos a comprar (dicho arreglo tiene todos los objetos)

const carritoDeCompras = [
  { producto: "Laptop gamer", precio: 1250.5, cantidad: 1 },
  { producto: "Mouse Optico", precio: 25.0, cantidad: 3 },
  { producto: "Teclado Mecanico", precio: 80.0, cantidad: 2 },
  { producto: "Monitor 24p", precio: 250.0, cantidad: 2 },
];

// Declare esta variable para almacenar el monto a pagar de todos los articulos en el carrito.
let totalDeCompra = 0;

for (i = 0; i < carritoDeCompras.length; i++) {
  // Declare esta otra variable que sirve para ver el total a pagar de un producto individual (cantidad * precio).
  let totalProducto = 0;

  // Aqui almacenamos la cantidad del monto total (cantidad * precio) para todos los productos dentro del arreglo recorridos por el for.
  totalProducto =
    carritoDeCompras[i].cantidad * carritoDeCompras[i].precio;

  // Aqui es donde el monto se va almacenando, todo el total a cancelar de todos los productos.
  totalDeCompra += totalProducto;

  console.log(
    `Producto: ${carritoDeCompras[i].producto} | cantidad de producto: ${carritoDeCompras[i].cantidad}`
  );
  console.log(`Total a cancelar: ${totalCompraProductoIndividual.toFixed(2)}`);
}
if (totalCompra > 2000.0) {
  console.log("Envio gratis!");
} else {
  console.log("Costo de envio $15.00");
}
