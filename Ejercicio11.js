// Una funcion que permite ver la cantidad de tablas que tenga el argumento para despues pasar ese valor al parametro de la funcion, estas tablas de multiplicar van del 1 hasta la cantidad indicada.

function tablasDeMultiplicar(numeroDeTablas, multiplicacion) {
  for (i = 1; i <= numeroDeTablas; i++) {
    let saltoDeLinea = "";

    for (j = 1; j <= multiplicacion; j++) {
      saltoDeLinea += i * j + " ";
    }
    console.log(saltoDeLinea);
  }
}

let cantidadDeTablas = 50,
  multiplicacion = 10;

tablasDeMultiplicar(cantidadDeTablas, multiplicacion);
