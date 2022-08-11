//Joao Souza tem 24 anos, pesa 86kg
//Tem 1.80 de altura e seu IMC é de
//Joao Nasceu no ano de 1998

const nome = "Joao";
const sobrenome = "Souza";
const idade = 24;
const peso = 86;
const altura = 1.8;
let imc;
let anoNascimento;
imc = peso / (altura * altura);
anoNascimento = 2022 - 24;
console.log(nome + ' ' + sobrenome + ' ' + "tem" + ' ' + idade + ' ' + "anos, pesa" + ' ' + peso + " kg");
console.log(`Tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(nome, "nasceu no ano de ", anoNascimento);
