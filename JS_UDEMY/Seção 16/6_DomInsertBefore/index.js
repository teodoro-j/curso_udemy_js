let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum Texto");

novoElemento.appendChild(texto);

let elementoAlvo = document.querySelector("#titulo");
let elementoPai = document.querySelector("#containerPrincipal");

elementoPai.insertBefore(novoElemento, elementoAlvo);


