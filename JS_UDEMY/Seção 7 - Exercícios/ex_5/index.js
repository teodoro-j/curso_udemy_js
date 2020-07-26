let idade = 10;
let nome = "João";

function imprimirMensagem() {
    if (idade >= 18){
        console.log(`${nome}, você pode entrar!`)
    }
    else {
        console.log(`${nome}, você não pode entrar!`)
    }
}

imprimirMensagem();

function imprimirMensagem2(idade) {
    if (idade >= 18){
        return `${nome}, voce pode entrar`;
    }
    else {
        return `${nome}, voce não pode entrar`;
    }
}

console.log(imprimirMensagem2(18));
console.log(imprimirMensagem2(17));
