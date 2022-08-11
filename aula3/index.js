function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque',{
        enumerable: true, //MOSTRA CHAVE
        value: estoque,  //VALOR
        writable: false, //PODE ALTERAR SE FOR FALSE NAO PODE ALTERAR O VALOR

        configurable:true //CONFIGURAVEL SE FOR FALSE NAO PODE CONFIGUAR
    });
   /* Object.defineProperties(this,{
        nome:{
            enumerable: true, //MOSTRA CHAVE
            value: estoque,  //VALOR
            writable: false, //PODE ALTERAR SE FOR FALSE NAO PODE ALTERAR O VALOR
    
            configurable:true //CONFIGURAVEL SE FOR FALSE NAO PODE CONFIGUAR
        },
        preco:{
            enumerable: true, //MOSTRA CHAVE
            value: estoque,  //VALOR
            writable: false, //PODE ALTERAR SE FOR FALSE NAO PODE ALTERAR O VALOR
    
            configurable:true //CONFIGURAVEL SE FOR FALSE NAO PODE CONFIGUAR
        },
    })*/
}