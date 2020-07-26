class Carrinho {
    constructor(itens, qtd, total){
        this.itens = itens;
        this.qtd = qtd;
        this.total = total;
    }

    adicionar(item){
        let contador = 0;

        for(let i in this.itens){
            if(this.itens[i].id == item.id){
                this.itens[i].qtd += item.qtd;
                contador = 1;
            }
        }
        if(contador == 0){
            this.itens.push(item);
        }
        this.qtd += item.qtd;
        this.total += item.preco * item.qtd;''
    }

    remover(item) {

        for(let i in this.itens){
            if(this.itens[i].id == item.id){
                let obj = this.itens[i];
                let index = this.itens.findIndex(function(obj) {
                    return obj.id == item.id
                });

                this.qtd -= this.itens[i].qtd;
                this.total -= this.itens[i].preco * this.itens[i].qtd;

                this.itens.splice(index, 1);
            }
        }
    }
}

let carrinho = new Carrinho([
    {
        id: 01,
        nome: "notebook",
        qtd: 1,
        preco: 3000
    },
    {
        id: 02,
        nome: "pen drive",
        qtd: 4,
        preco: 50,
    }
], 5, 3200);

console.log(carrinho);

carrinho.adicionar({id: 01, nome:"notebook", qtd: 1, preco: 3000});
console.log(carrinho);

carrinho.adicionar({id: 03, nome:"hd", qtd: 1, preco: 500});
console.log(carrinho);

carrinho.remover({id: 02, nome: "pen drive", qtd: 4, preco: 50});
console.log(carrinho);