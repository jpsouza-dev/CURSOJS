/*
Object.keys (RETORNA CHAVES DO OBJETO)
Object.freeze (CONGELA O OBJETO)
Object.defineProperties (DEFINE VARIAS PROPRIEDADES)
Object.defineProperty (DEFINE UMA PROPRIEDADE)
Object.entries (RETORNA CHAVE E VALOR)
Object.value (RETORNA O VALOR)
Object.definePropertyDescripton (RETONA O DESCRITOR DA PROPRIEDADE)
Object.assign (des, any) (SERVE PARA COPIAR O OBJETO DE DESTINO PARA OUTRO VAZIO)
Obejct.spread (ESPALHA OS VALORES DO OBJETO)
*/


//-----------------------------------------------------------
//TODAS FUNCOES COSNTRUTORAS TEM UM Object.prototype



function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};


function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}
function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(){
            if(typeof valor !== 'number')
            estoque = valor;
        }
    })

}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;


const caneca = new Caneca('caneca de cafe', 10, 'porcelana', 5);
const camiseta = new Camiseta('Regata', 8.5, 'Preta');
camiseta.aumento(10);
console.log(camiseta);

caneca.desconto(5);
console.log(caneca);

