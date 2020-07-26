function detectarCaracteres(texto){
    if(texto.length > 10){
        return `Texto muito grande`;
    } else  {
        return `Texto dentro do limite`;
    }
};

console.log(detectarCaracteres('sahdiashduasd'));
console.log(detectarCaracteres('sah'));