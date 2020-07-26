const valida = /www.\w+\.com.br|.com/;

console.log(valida.test("wwww.linkedin.com.br"));
console.log(valida.test("www.apple.com"));
console.log(valida.test("www.republicafederal.org"));
console.log(valida.test("apple.com.br")); //funciona normal

const validaEmail = /\w+\@\w+\.com|.com.br/;

console.log(validaEmail.test("jteodor@gmail.com"));
console.log(validaEmail.test("jteodoro@outlook.com.br"));
console.log(validaEmail.test("jteodoro@msn"));
