let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum Texto");

novoElemento.appendChild(texto);

let p = document.querySelector(".textoDois");
let pai = p.parentNode;

pai.appendChild(novoElemento);

