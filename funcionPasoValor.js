// Funcion paso por valor

function cambiarValor (parametro) {

    // Esta variable no se puede cambiar, ya que es una variable local en la funcion
    let imposibleCambiar = 10;
    
    // no cambio su valor a 50
    console.log(imposibleCambiar);

}

let argumento = 50;

// Aqui intentamos hacer el cambio pasandole el valor de la variable "argumento" a "parametro" de la funcion
cambiarValor(argumento);

console.log(argumento);
