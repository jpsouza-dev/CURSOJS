
//Criando datas

//Outro modo de fazer
/*
const h1 = document.querySelector(".container h1");
const data = new Date();
h1.innerHTML = "so pra voce ver";

function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      return diaSemanaTexto;

    case 1:
      diaSemanaTexto = "Segunda-feira";
      return diaSemanaTexto;

    case 2:
      diaSemanaTexto = "Terça-feira";
      return diaSemanaTexto;

    case 3:
      diaSemanaTexto = "Quarta-feira";
      return diaSemanaTexto;

    case 4:
      diaSemanaTexto = "Quinta-feira";
      return diaSemanaTexto;

    case 5:
      diaSemanaTexto = "Sexta-feira";
      return diaSemanaTexto;

    case 6:
      diaSemanaTexto = "Sabado";
      return diaSemanaTexto;

    default:
      diaSemanaTexto = "";
      return diaSemanaTexto;
  }
}

function zeroAEsquerda (num){
  return num >= 10 ? num : `0${num}`;
}
function getNomeMes(numMes) {
  let nomeMes;

  switch (numMes) {
    case 0:
      nomeMes = "Janeiro";
      return nomeMes;

    case 1:
      nomeMes = "Fevereiro";
      return nomeMes;
    case 2:
      nomeMes = "Março";
      return nomeMes;
    case 3:
      nomeMes = "Abril";
      return nomeMes;
    case 4:
      nomeMes = "Maio";
      return nomeMes;
    case 5:
      nomeMes = "Junho";
      return nomeMes;
    case 6:
      nomeMes = "Julho";
      return nomeMes;
    case 7:
      nomeMes = "Agosto";
      return nomeMes;
    case 8:
      nomeMes = "Setembro";
      return nomeMes;
    case 9:
      nomeMes = "Outubro";
      return nomeMes;
    case 10:
      nomeMes = "Novembro";
      return nomeMes;
    case 11:
      nomeMes = "Dezembro";
      return nomeMes;
  }
}
function createData(data){
const diaSemana = data.getDay();
const numMes = data.getMonth();

const nomeDia = getDiaSemanaTexto(diaSemana);
const nomeMes = getNomeMes(numMes);

return (`${nomeDia}, ${data.getDate()} 
 de   ${nomeMes} ` + 
`de ${data.getFullYear()} - 
${zeroAEsquerda(data.getHours())} :
 ${zeroAEsquerda(data.getMinutes())} 
: ${zeroAEsquerda(data.getSeconds())}`)
}
h1.innerHTML = createData(data);
*/

/*const h1 = document.querySelector(".container h1");
const data = new Date();
const opcoes = {
  dataStyle: 'full',
  timeStyle: 'short'
};
h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
*/
//!!!!!!UM modo de fazer
//const h1 = document.querySelector(".container h1");
//const data = new Date();
//h1.innerHTML = data.toLocaleDateString('pt-BR',{dateStyle: 'full'});


//Outro modo de fazer
const h1 = document.querySelector(".container h1");
const data = new Date();
function getNomeMes(numMes) {
  const meses = ['Janeiro', 'Fevereiro', 'Março','Abril','Maio',
'Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

return meses[numMes];
}
function getDiaSemanaTexto(diaSemana) {
  const diasSemana = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira',
'Quinta-feira','Sexta-feira','Sabado'];

return diasSemana[diaSemana];
}

function createData(data){
  const diaSemana = data.getDay();
  const numMes = data.getMonth();
  
  const nomeDia = getDiaSemanaTexto(diaSemana);
  const nomeMes = getNomeMes(numMes);
  
  return (`${nomeDia}, ${data.getDate()} 
   de   ${nomeMes} ` + 
  `de ${data.getFullYear()} - 
  ${zeroAEsquerda(data.getHours())} :
   ${zeroAEsquerda(data.getMinutes())} 
  : ${zeroAEsquerda(data.getSeconds())}`)
  }

  function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
  }
h1.innerHTML = createData(data);