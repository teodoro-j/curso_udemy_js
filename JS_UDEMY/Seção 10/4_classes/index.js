let cachorro = {
    patas: 4,
    raca: " ",
    latir: function(){
        console.log("Au Au");
    }
};

let labrador = Object.create(cachorro);

labrador.latir();

labrador.raca = "labrador";

console.log(labrador.patas);

let pastor = Object.create(cachorro);

pastor.raca = "Pastor Alemão";

console.log(pastor.raca);

