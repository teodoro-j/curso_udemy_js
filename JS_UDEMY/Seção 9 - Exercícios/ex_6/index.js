let nomes = ["João", "Samuel", "Maria", "Lucas", "Vitória", "Laura"];

let cidades = ["Santo André", "Assis", "São Bernardo"];

function verificarArray(arr){
    if(arr.length >= 5){
        console.log("Muitos elementos");
    } else {
        console.log("Poucos elementos");
    }
};

verificarArray(nomes);
verificarArray(cidades);

