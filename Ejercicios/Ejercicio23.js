// Funcion recursiva que acorta una palabra en el orden que se indique en la variable "cortador"

const cortaLetra = (letras, cortador) => {
    if(letras == "") {
        return "";
    }else if (letras.length < cortador) {
        return letras;
    }else {
        let operacion = cortaLetra(letras.slice(cortador), cortador);

        let resultado = operacion;

        return resultado;
    }
}

let letters = "ABCDE", cortador = 2;

let resultadoFuncion = cortaLetra(letters, cortador);

console.log(resultadoFuncion);