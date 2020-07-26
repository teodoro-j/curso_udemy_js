const padrao = /menino?/;

console.log(padrao.test("menin"));
console.log(padrao.test("menina"));
console.log(padrao.test("menixo"));

const fruta = /ban?ana/;

console.log("----")
console.log(fruta.test("banana"));
console.log(fruta.test("bacana"));
console.log(fruta.test("baana"));
console.log(fruta.test("cabana"));