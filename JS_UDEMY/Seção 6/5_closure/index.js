function lembrarSoma(x) {
    return function(y){
        return x + y;
    }
}

let soma1 = lembraSoma(2);

console.log(soma1(5));

function contador(i) {
    let cont = i;
    let somarContador = function() {
        console.log(cont);
        cont++;
    }
    return somarContador;
}

let meuContador = contador(5);
meuContador();
meuContador();
