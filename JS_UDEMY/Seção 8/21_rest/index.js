let num = 1;
let num1 = 5;
let num2 = 10;
let num3 = 7;

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[1]);
    }
}

imprimirNumeros(num,num1,num3);
console.log("fim");
imprimirNumeros(num,num1);
console.log("fim");
imprimirNumeros(1,4,2,5,4,6,2,7,4,9,8,6);