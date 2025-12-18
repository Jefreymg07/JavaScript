// ==========================================
// MÓDULO DE LOGÍSTICA - CYBERSTORE
// ==========================================

/**
 * Calcula el costo de envío basado en el monto total de la compra.
 * Aplica la política de "Envío Gratis" para compras grandes.
 * * @param {number} totalCompra - El monto total de los productos en el carrito.
 * @returns {number} - El precio del envío (0 si es gratis, 150 si es estándar, o -1 si hay error).
 */
function calcularCostoEnvio(totalCompra) {
  // TODO: Implementar la validación y la lógica de negocio aquí.
  let precioEnvio;
  // 1. Validar si el total es negativo.
  if (totalCompra < 0) {
    console.error();
    return -1;
  }

  // 2. Determinar el costo (Gratis o $150).
  else if (totalCompra >= 2000) {
    precioEnvio = 0;
  } else {
    precioEnvio = 150.0;
  }

  // 3. Retornar el costo del envío.
  let costoEnvio = precioEnvio;
  return costoEnvio;
}

// ==========================================
// TEST UNITARIOS (Simulación de Pruebas)
// ==========================================

console.log("--- PRUEBA 1: Compra pequeña ($500) ---");
let costo1 = calcularCostoEnvio(500);
console.log("Costo de envío calculado: $" + costo1);
// Resultado esperado: 150

console.log(" "); // Espacio

console.log("--- PRUEBA 2: Compra grande ($3500) ---");
let costo2 = calcularCostoEnvio(3500);
console.log("Costo de envío calculado: $" + costo2);
// Resultado esperado: 0

console.log(" ");

console.log("--- PRUEBA 3: Error de sistema (-50) ---");
let costoError = calcularCostoEnvio(-50);
console.log("Código de retorno: " + costoError);
// Resultado esperado: -1
