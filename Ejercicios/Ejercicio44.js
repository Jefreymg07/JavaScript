class HabilidadesTracer {
    constructor(dashesIniciales){
        this._dashes = dashesIniciales;
    }
    set dashes(numeroDashes){
        if(numeroDashes < 0){
            this._dashes = 0;
        }else if(numeroDashes > 3){
            this._dashes = 3;
        }else{
            this._dashes = numeroDashes;
        }
    }
    get dashes(){
        return `Dash ready: ${this._dashes}`
    }
}

const newPlayer = new HabilidadesTracer(2);

console.log(newPlayer.dashes)