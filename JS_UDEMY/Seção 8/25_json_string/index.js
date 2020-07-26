let pessoa = {
    "nome" : "João",
    "idade" : 25,
    "signo" : "Gemeos",
    "cnh" : false,
    "proffisão": "desenvolvedor",
    "hobbies": ["programar", "series", "filmes", "ouvir musica"],
}

console.log(pessoa);


let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

//Para voltar a ser um JSON

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[1]);

