// colchetes para array e chaves para objetos
/*const pessoa1 = {
nome:'luiz',
sobrenome:'Carlos',
idade:25
};
console.log(pessoa1);
function criarPessoa (nome,sobrenome,idade){
    return{
        nome,
        sobrenome,
        idade
    }
}
const pessoa1 = criarPessoa('Joao', 'Paulo',25);
console.log(pessoa1);*/
const pessoa1 = {
    nome:'luiz',
    sobrenome:'Carlos',
    idade:25,
    fala (){
        console.log(`${this.nome} ${this.sobrenome} e minha idade atual é ${this.idade} .`);
    },

    incremetaIdade(){
        this.idade++;
    }
    };
    pessoa1.fala();
    pessoa1.incremetaIdade();
    pessoa1.fala();
    pessoa1.incremetaIdade();
    pessoa1.fala();
    pessoa1.incremetaIdade();