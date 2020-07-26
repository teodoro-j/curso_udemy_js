const reg = /\w+: (Mathew|Ezra|Noah)/;

console.log(reg.test("Nome: Mathew"));
console.log(reg.test("Nome: José"));
console.log(reg.test("Nome: Ezra"));