
let idade = 17;
let nome = "Pedro";
let velocidade = 100

if(velocidade > 80){
    console.log("Velocidade não permitida");
} else {
    console.log("Velocidade permitida");
}

if(idade >= 18){
    console.log("Maior de Idade");
} else {
    console.log("Menor de idade");
}

if(nome == "João" || idade >= 18){
    console.log("Pode entrar");
} else {
    console.log("Não pode entrar");
}

if(nome == "João" && idade > 16){
    console.log(`Pode Viajar Sr. ${nome}`);
} else {
    console.log(`Nãp pode viajar Sr. ${nome}`);
}