const telefone = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(telefone.test("(00)99999-9999"));
console.log(telefone.test("(00)1234-5678"));
console.log(telefone.test("(00)897-9003"));

const cep = /\d{5}-?\d{3}/;

console.log(cep.test("00000-000"));
console.log(cep.test("01010010"));