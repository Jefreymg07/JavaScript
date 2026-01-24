function calcularIVA(precio) {
    let resultado = precio * 0.13;

    return resultado;
}

let precioCamisa = 75.00;

calcularIVA(precioCamisa);

let ivaPrice = calcularIVA(precioCamisa);

console.log(ivaPrice)



