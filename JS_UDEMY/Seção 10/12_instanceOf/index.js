class Mamiferos {
    constructor(raca){
        this.raca = raca;
    }
}

let gato = new Mamiferos("felino");

console.log(gato.raca);

class Humano extends Mamiferos {
    constructor(raca, nicho) {
        super(raca);
        this.nicho = nicho;
    }
}

let homem = new Humano("humano", "terrestre");

console.log(homem);

console.log(new Humano instanceof Mamiferos);