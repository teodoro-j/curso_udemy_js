const verId = /\d+ID\b/; // \b garante que termina com ID

console.log(verId.test("78439423ID"));
console.log(verId.test("23435"));
console.log(verId.test("ashdeu"));
console.log(verId.test("ID"));