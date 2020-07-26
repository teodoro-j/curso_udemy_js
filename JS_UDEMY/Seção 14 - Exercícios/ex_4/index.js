const validaIp = /\d{1-3}\.\d{1-3}\.\d{1-3}\.\d{1-3}/;

console.log(validaIp.test("127.0.0.1"));
console.log(validaIp.test("17.0.0.j"));
console.log(validaIp.test("1270.0.0.1"));
console.log(validaIp.test("127.0.00.1"));
console.log(validaIp.test("127.00.0.1"));
console.log(validaIp.test("127.0.0.1"));