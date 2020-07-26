const dia = /\d{2}/;

console.log(dia.test("25"))

const data = /\d{2}\/\d{2}\/\d{4}/

// ou pode ser feito /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/
// ou também /[0-31]{2}[/][0-12]{2}[/][1900-2020]{4}/

console.log(data.test("25/05/1994"));
console.log(data.test("354/8/1998"));