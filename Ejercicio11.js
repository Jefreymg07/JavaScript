function tablasDeMultiplicar(numeroDeTablas,multiplicacion) {

    for(i = 1; i <= numeroDeTablas; i++) {

        let saltoDeLinea = "";

        for(j = 1; j <= multiplicacion; j++) {
            saltoDeLinea += i * j + " ";
        }
        console.log(saltoDeLinea)       
    }
}

let cantidadDeTablas = 5, multiplicacion = 10;

tablasDeMultiplicar(cantidadDeTablas,multiplicacion);