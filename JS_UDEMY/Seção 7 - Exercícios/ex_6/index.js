function detectarNumber(num){
    console.log(typeof num);
};

detectarNumber(30);

function detectarBoolean(boolean){
    return boolean;
};

console.log(detectarBoolean(typeof 5 > 10));

function detectarDado(dado){
    if(typeof dado === 'string'){
        console.log(`É uma String`);
    } else if (typeof dado === 'boolean'){
        console.log(`É um boolean`);
    } else if (typeof dado === 'number') {
        console.log(`É um number`)
    }
}

detectarDado(true);
detectarDado(25);
detectarDado("João");


