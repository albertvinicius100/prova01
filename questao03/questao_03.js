class Venda {
    id;
    quantidade;
    preco;

    constructor (id, quantidade,preco){
        this.id = id;
        this.quantidade = quantidade;
        this.preco = preco;

        function set(id){
            return id;
        }
        function set(quantidade){
            return quantidade;
        }
        function set(preco){
            return preco;
        }
        function getValorTotal(quantidade,preco){
            return quantidade*preco;
        }

    }
}
