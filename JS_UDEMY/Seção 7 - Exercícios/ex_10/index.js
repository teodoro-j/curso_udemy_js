function decrementarPares(num){
    for(num = 10; num > 0 ;num--){
        if (num % 2 == 0){
            console.log(num);
        }
    }
}

decrementarPares();

function decrementarImpares(num){
    for(let n = num; n >= 0; n--){
        if (n % 2 == 1){
            console.log(n);
        }
    }
}

decrementarImpares(10);