class Conta {
    constructor(saldoCC, saldoCP, juros){
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.juros = juros;
    }
    depositar(valor){
        this.saldoCC += valor;
    }
    sacar(valor) {
        this.saldoCC -= valor;
    }
    transferirCP(valor){
        this.saldoCC -= valor;
        this.saldoCP += valor;
    }
    transferirCC(valor){
        this.saldoCC += valor;
        this.saldoCP -= valor;
    }
    jurosAnual() {
        let juros = (this.saldoCP * this.juros) /100;
        this.saldoCP += juros;
    }
}

let conta = new Conta(1000, 100, 1);
console.log(conta);


class ContaEspecial extends Conta {
    constructor(saldoCC, saldoCP, juros){
        super(saldoCC, saldoCP, juros*2);
    }
}

let contaEspecial = new ContaEspecial(20000, 3000, 1);
console.log(contaEspecial);

conta.depositar(5000);
console.log(conta.saldoCC);

conta.sacar(200);
console.log(conta.saldoCC);

conta.transferirCP(2500);
console.log(conta);

conta.jurosAnual();
console.log(conta);

contaEspecial.jurosAnual();
console.log(contaEspecial);


