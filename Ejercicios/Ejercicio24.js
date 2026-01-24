// Funcion recursiva de cuenta regresiva del tiempo (como temporizador de despegue)

const cuentaRegresiva = (tiempo) => {
    if (tiempo == -1) {
        return 0;
    }else{
        console.log(tiempo)

        let recursividad = cuentaRegresiva(tiempo - 1);

        let resultado = recursividad;

        return resultado;
    }
}

let cuentaAtras = 5;

let resultadoFuncion = cuentaRegresiva(cuentaAtras);

console.log(resultadoFuncion);