const cachorro = {
    raca: " ",
    latir: function(){
        console.log("Au Au");
    },
    rosnar: function(){
        console.log("Grrrrrrrrr");
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return `A raça é ${this.raca}`
    }
};

cachorro.setRaca("Husky");
console.log(cachorro.getRaca());