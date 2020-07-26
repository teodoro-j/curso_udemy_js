let a = 3;
let b = 5;
let idade = 16;

if(a + b > 10){
    console.log(`1- A soma é ${a + b} `);
} else if (a + b < 5){
    console.log(`2 - A soma é ${a + b}`);
} else {
    console.log(`3 - A soma é ${a + b}`);
}

if(idade >= 18){
    console.log("Adulto");
}else if(idade <= 12){
    console.log("Uma criança ainda");
}else if (idade < 16){
    console.log("Adolescente");
}else {
    console.log("Já pode votar");
}
