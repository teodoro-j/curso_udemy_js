const marca = /Marca: (Nike|Adiddas|Puma|Asics)/;

console.log(marca.test("Marca: Nike"));
console.log(marca.test("Marca: Adidas"));
console.log(marca.test("Marca: 1234"));


