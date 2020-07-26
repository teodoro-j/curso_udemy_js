function checarNum(num){
    let number = Number(num);
    if(Number.isNaN(number)){
        alert("Por favor, digite um número");
    } else {
        return number;
    }
}

checarNum(2);
checarNum("cinco");
checarNum("fjdksf");

let number = prompt("Digite um número");

checarNum(number);