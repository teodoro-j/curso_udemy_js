let elemento = document.querySelector('#titulo');

console.log("Largura: " + elemento.offsetWidth);
console.log("Altura: " + elemento.offsetHeight);

//desconsidera bordas
console.log("Largura: " + elemento.clientWidth);
console.log("Altura: " + elemento.clientHeight);
