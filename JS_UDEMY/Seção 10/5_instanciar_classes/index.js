function criarCachorro(raca, patas, cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    return cachorro;
}

let doberman = criarCachorro("Doberman", 4, "preto");
let bulldog = criarCachorro("Bulldog", 4, "manchado");

console.log(bulldog);