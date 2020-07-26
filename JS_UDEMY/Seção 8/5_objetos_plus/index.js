let pessoa = {
    nome: "João",
    idade: 25,
    signo: "Gemeos",
    sexo: "masculino",
    formado: true,
}

let endereço = {
    estado: "São Paulo",
    cidade: "Santo Andre",
}
console.log(pessoa);

Object.assign(pessoa, endereço)

console.log(pessoa);