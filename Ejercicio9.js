function reporteDeAgotamiento(stockInicial) {

    for(i = stockInicial; i >= 1; i--){
        let saltoDeLinea = "";
        
        for(j = 1; j <= i; j++) {
            saltoDeLinea += "[X]";
        }
        console.log(saltoDeLinea);
    }
    
}

let stock = 5;

reporteDeAgotamiento(stock);

