const reinhardt = {
    nombre: "Reinhardt",
    vida: 500
}

const echo = {
    nombre: "Echo",
    vida: 200
}

const recibirSanacion = function (cantidad, bono) {

    this.vida += cantidad + bono;

    console.log(`Healing ${this.nombre} recupero vida. Total: ${this.vida}`);
}

const paqueteCuracion = [50, 20];

recibirSanacion.apply(reinhardt, paqueteCuracion);