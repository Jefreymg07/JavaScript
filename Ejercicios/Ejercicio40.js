  class celular {
    constructor(cargaInicial){
      this._cargaInicial = cargaInicial;
    }
    set cargar (porcentajeCargando){
      let cargaTotal = this._cargaInicial + porcentajeCargando;

      if (cargaTotal >= 100){
        this._cargaInicial = 100;
      }
    }

  }