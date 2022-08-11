const numero = Number(prompt('Digite um numero'));

const numeroTitle = document.getElementById('numero-title');
const texto = document.getElementById('texto');

numeroTitle.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p> Raiz quadrada  ${numero ** 0.5}. </p>`;
texto.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)}. </p>`;
texto.innerHTML += `<p> É NAN: ${Number.isNaN(numero)}. <br> </p>`;
texto.innerHTML += `<p> Arredondamento pra baixo: ${Math.floor(numero)}. </p>`;
texto.innerHTML += `<p> Arredondamento pra cima: ${Math.ceil(numero)}. </p>`;
texto.innerHTML += `<p> Com duas casas decimais ${numero.toFixed(2)}. </p>`;