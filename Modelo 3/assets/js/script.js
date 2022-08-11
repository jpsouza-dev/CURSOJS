const elemetos = [
  {tag: 'p', texto: 'Frase 1'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'footer', texto: 'Frase 3'},
  {tag: 'section', texto: 'Frase 4'},
];


const container = document.querySelector(`.container`);
const div = document.createElement('div');

for (i = 0; i < elemetos.length; i++){
 
  let {tag, texto} = elemetos[i];
  let tagCriada = document.createElement(tag);
  //tagCriada.innerText = texto;
  let textoCriado = document.createTextNode(texto);

  tagCriada.appendChild(textoCriado);
  div.appendChild(tagCriada);
}
container.appendChild(div);
//console.log(elemetos);