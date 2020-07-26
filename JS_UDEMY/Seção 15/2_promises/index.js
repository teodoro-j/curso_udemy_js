let p = Promise.resolve(new Error("Nãi deu certo!"));

console.log("Código sendo executado");

p.then(value => console.log(value))
 .catch(reason => console.log("Falhou: " + reason));