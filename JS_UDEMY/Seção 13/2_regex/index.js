const reg1 = /[]/;

console.log(reg1.test("Temos o número 6"));

console.log(reg1.test("Temos também o número 3"));

const reg2 = /[0-9]/;

console.log(reg2.test("Temos o número 746839"));

console.log(reg2.test("Temos o número um"));
