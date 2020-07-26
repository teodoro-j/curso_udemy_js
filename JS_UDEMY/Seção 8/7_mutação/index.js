let pessoa = {
    nome: "João"
}

let pessoa2 = pessoa;

let pessoa3 = {
    nome: "João"
}

console.log(pessoa == pessoa2);
console.log(pessoa == pessoa3);
console.log(pessoa2 == pessoa3);

pessoa2.nome = "Matheus";

console.log(pessoa.nome);

// quando altera um dos parametros que estao interligados, ambos mudam
