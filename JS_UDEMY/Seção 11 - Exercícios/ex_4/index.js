class Carro {
    constructor(marca, cor, gasolinaRes, consumo){
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRes = gasolinaRes;
        this.consumo = consumo;
    }
    dirigirCarro(km){
        let litrosCons = km / this.consumo;
        this.gasolinaRes -= litrosCons;
    }

    abastecerCarro(litros){
        this.gasolinaRes += litros;
    }
}

let carro = new Carro("VW", "azul", 65, 14);

carro.dirigirCarro(100);
console.log(carro.gasolinaRes);

carro.abastecerCarro(10);
console.log(carro.gasolinaRes);

carro.dirigirCarro(20);
console.log(carro.gasolinaRes);
