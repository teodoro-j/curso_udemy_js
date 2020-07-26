class Endereco{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua){ this.rua = novaRua; }

    get getRua(){ return this.rua; }
    
    set novoBairro(novoBairro){ this.bairro = novoBairro; }

    get getBairro(){ return this.bairro; }

    set novaCidade(novaCidade) { this.cidade = novaCidade; }

    get getCidade() { return this.cidade; }

    set novoEstado(novoEstado) { this.estado = novoEstado; }

    get getEstado() { return this.estado; }
}

let endereco = new Endereco("Oliveira Lima","Centro","Santo André","SP");

console.log(endereco);

endereco.novaRua = "Oliveiras";
console.log(endereco.getRua);
console.log(endereco);

endereco.novaCidade = "São Paulo";
console.log(endereco.getCidade);
console.log(endereco);


