function accesoVIP(edad, membresia) {
  // TAREA:
  // Cambia el 'true' de abajo por la lógica correcta.
  // Tienes que verificar: edad >= 18  Y TAMBIÉN  membresia === "Gold"

  if (edad >= 18 && membresia === "Gold") {
    // <--- BORRA 'true' Y PON TU CODIGO CON && AQUI
    return "Adelante, pase a la zona VIP";
  } else {
    return "Acceso Denegado";
  }
}

// --- PRUEBAS ---
console.log(accesoVIP(20, "Gold")); // Debería dejar pasar
console.log(accesoVIP(17, "Gold")); // Denegado (es menor)
console.log(accesoVIP(25, "Plata")); // Denegado (no es Gold)
