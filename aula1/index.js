// "..." = rest(pega o resto) spread (espalhar)
//DESESTRUTURACAO DE ARRAY
const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero,segundoNumero, ...resto] = numero;
console.log(primeiroNumero, segundoNumero);
console.log(resto);




//DESESTRUTURACAO DE OBJETOS
/*const pessoaUm = {
    nome: 'Joao',
    sobrenome: 'Paulo',
    idade: '24',
    ende: {
        rua:'Av Brasil',
        num: 320
    }
};*/
//Atribuicao via desestruturacao
//const {nome: n, sobrenome} = pessoa; == Esta atribuindo novo nome a variavel nome
//const {ende:{rua}} = pessoa; = Esta acesando o objeto dentro do outro objeto


// !!!!!!!!!!!!!!!!!! ESTRUTURA DE REPETICAO !!!!!!!!!!!!!!!!!


//for(let i = 0; i<= 5; i+= 10){ !!VAI IR DE 10 EM 10

for(let i = 0; i<= 5; i++){
    console.log(`Linha ${i}`);
}

//!!!!!!!!!!! for in -> Lê os indices ou chaves do objeto!!!!!!!!!!!

/*const frutas = ['Uva', 'Maça', 'Laranja','Pera'];


for (let i in frutas){
    console.log(frutas[i]);
}*/
/*const pessoa = {
    nome: 'Joao',
    sobrenome: 'Paulo',
    idade: '24'
};
for (let i in pessoa){
    console.log(pessoa[i]);
}*/

const nome = ['Joao Paulo', 'Carlos', 'Eduardo', 'Valeria'];

for(let i = 0; i<nome.length; i++){
    console.log(nome[i]);
}

for(let i in nome){
    console.log(nome[i]);
}
for(let valor of nome){
    console.log(valor);//"!!!!!Ele mostra o valor ao inves do indice "Serve somente para String"
}
nome.forEach(function(el){
    console.log(el)
});
//While e do While

let i = 0;
while(i <= 10){
    console.log(i);
    i++;
}

do{
    console.log(i);
    i++;
}while(i <= 10);