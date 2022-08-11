//Array sao anexados diferentes das string
//Array e um objeto
//              0123456789
//const name = 'Luiz Carlos';

//                0        1        2
const alunos = ['Luiz', 'Maria', 'Joao'];
//console.log(alunos);
//console.log(alunos[0]);
//console.log(alunos[1]);
//console.log(alunos[2]);
//console.log(alunos.length); "VE O TAMANHO DO ARRAY"
//alunos.push('Carol');//Funcao push serve para adiconar no fim do array
console.log(alunos);
//alunos[3] = 'Eduardo'Adiciona no array
//alunos[0] = 'Eduardo' Altera o array
//alunos.unshift('Carol'); "Adiciona no comeco do array"
const removido = alunos.shift();
console.log(alunos);
//console.log(alunos.slice(0, 3)); serve para mostrar a array de uma posicao ate a outra
//console.log(alunos instanceof Array); Verifica se e um array
//delete alunos[1] "Deleta o elemento da posicao deixando-a vazia"