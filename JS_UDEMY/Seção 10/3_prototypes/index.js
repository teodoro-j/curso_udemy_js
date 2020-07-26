const pessoa = {
    maos: 2,
    pes: 2,
    boca: 1, 
}

console.log(Object.getPrototypeOf(pessoa));
console.log(pessoa.hasOwnProperty("maos"));

const novaPessoa = Object.create(pessoa);

console.log(novaPessoa.maos);