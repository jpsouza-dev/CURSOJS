const falar = {
    falar(){
        console.log('Esta Falando');
    }
};
const beber = {
    falar(){
        console.log('Esta Bebendo');
    }
};
const comer = {
    falar(){
        console.log('Esta Comendo');
    }
};
const pessoaPrototype = {...falar, ...beber, ...comer}

function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype,{
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}



//ESTRUTURA DE DADOS MAP 
const pessoas = [
    {id:3, nome: 'Joao'},
    {id:2, nome: 'Carlos'},
    {id:1, nome: 'Duda'}
];

/*const novasPessoas = {};
for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa};
}*/
const novasPessoas = new Map();
for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}
console.log(novasPessoas.get(2));