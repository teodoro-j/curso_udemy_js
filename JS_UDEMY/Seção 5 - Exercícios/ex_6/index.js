let nome = "João";
let cnh = false;
let idade = 25;

if(cnh == true && idade >= 18){
    console.log(`O Sr. ${nome} pode dirigir`);
} else if (cnh == false && idade >= 18){
    console.log(`O Sr. ${nome} não pode dirigir. Pois, ainda não tem CNH`);
} else {
    console.log(`O Sr. ${nome} não pode dirigir. Pois, não tem idade nem CNH`);
}