function* criadorId() {
    let  id = 1500;

    while(true) {
        yield id++;
    }
}

let criaId = criadorId();

console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);