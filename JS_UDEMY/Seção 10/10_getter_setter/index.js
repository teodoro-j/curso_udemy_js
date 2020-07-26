class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    get getCor() {
        return this.cor;
    }

    set setCor(cor) {
        this.cor = cor;
    }
};

let pastor = new Cachorro("Pastor Alemão", "sem cor");

console.log(pastor);

pastor.setCor = "marrom";

console.log(pastor.getCor);
console.log(pastor);

