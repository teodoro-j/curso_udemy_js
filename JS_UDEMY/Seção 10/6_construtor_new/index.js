function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.latir = function() {
        console.log("AuAu");
    }
};

let husky = new Cachorro("Husky", 4, "Branco");

husky.latir();