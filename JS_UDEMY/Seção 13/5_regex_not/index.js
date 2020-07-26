const notab =/[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const nottoaz = /[^a-z]/;

console.log(nottoaz.test("123 as"));

const az = /[a-z]/;

console.log(az.test("asgy12asgyash"));