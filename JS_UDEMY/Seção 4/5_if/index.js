
let idade = 18;
let nome = "João";
let passaport = true;

if(idade == 19){
    console.log("A idade é 19");
}

if(idade >= 18){
    console.log("Maior de Idade");
}

if(nome == "João" && idade >=18){
    console.log("Pode entrar");
}

if((nome == "João" && idade > 16) || passaport == true){
    console.log(`Pode Viajar Sr. ${nome}`);
}