let div = 0;
let n = 41;

for(let i = 1; i <= n; i++){
    if( n % i == 0){
        div++;
    }
}

if(div == 2){
    console.log(`O número ${n} é primto`);
} else {
    console.log(`O número ${n} não é primo`);
}
