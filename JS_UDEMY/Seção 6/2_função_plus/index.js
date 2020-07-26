function multiplicar(x,y,z){
    return x * y * z;
}

console.log(multiplicar(10,5,7));

const mult = multiplicar(4,3,7);

console.log("O valor da multiplicação é :" + mult);

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("Pode Dirigir");
    } else{
        console.log("Não pode dirigir");
    }
}

console.log(podeDirigir(18, true));
console.log(podeDirigir(24, false));
console.log(podeDirigir(17, 0));
console.log(podeDirigir(22, 1));

