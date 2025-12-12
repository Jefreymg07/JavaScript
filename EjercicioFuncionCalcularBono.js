// ==========================================
// MÓDULO DE NÓMINA - EMPRESA TECH SOLUTIONS
// Desarrollador: Jefrey
// Fecha: 11/12/2025
// ==========================================

/**
 * Función que recibe el sueldo base y calcula el total con bono.
 * @param {number} sueldoBase - El salario mensual del empleado.
 * @returns {number} - El sueldo final con el bono aplicado.
 */
function calcularLiquidacion(sueldoBase) {
  // --- PASO 1: VALIDACIÓN DE SEGURIDAD ---
  // Aquí debes verificar si el sueldoBase es menor o igual a 0.
  // Si pasa eso, muestra un console.error y retorna 0.
  // (Escribe tu IF aquí abajo)

  if (sueldoBase <= 0) {
    console.error();
    return 0;
  }

  // --- PASO 2: LÓGICA DE NEGOCIO (Bonos) ---
  // Crea una variable local para el bono (ej: let bono = 0;)
  let bono = 0;

  // Aquí usa un IF/ELSE para decidir de cuánto es el bono
  // Regla: Menor a 1000 -> bono 200. Mayor o igual -> bono 500.
  // (Escribe tu IF/ELSE aquí abajo)
  if (sueldoBase < 1000) {
    bono = 200;
  } else if (sueldoBase >= 1000) {
    bono = 500;
  }

  // --- PASO 3: CÁLCULO FINAL ---
  // Suma el sueldoBase + bono y retorna el resultado.
  let total = sueldoBase + bono;
  return total;
}

// ==========================================
// PROGRAMA PRINCIPAL (Simulación del Sistema)
// ==========================================

// CASO 1: Un empleado con sueldo bajo
let sueldoJunior = 800;
console.log("--- Procesando Empleado Junior ---");
let pagoFinalJunior = calcularLiquidacion(sueldoJunior);
console.log("Sueldo Base: $" + sueldoJunior);
console.log("A Pagar: $" + pagoFinalJunior); // Debería salir 1000

console.log("--------------------------------");

// CASO 2: Un empleado con sueldo alto
let sueldoSenior = 2000;
console.log("--- Procesando Empleado Senior ---");
let pagoFinalSenior = calcularLiquidacion(sueldoSenior);
console.log("Sueldo Base: $" + sueldoSenior);
console.log("A Pagar: $" + pagoFinalSenior); // Debería salir 2500
