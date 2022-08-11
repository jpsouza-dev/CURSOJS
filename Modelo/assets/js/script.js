const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");

  const inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  if (!peso) {
    setResultado("Peso invalido", false);
    return;
  }
  if (!altura) {
    setResultado("Altura invalida", false);
    return;
  }

  const imc = getImc(peso, altura);
  const getNivelImc = getNivel(imc);

  const msg = `Seu imc é ${imc}  (${getNivelImc})`;

  setResultado(msg, true);
});

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}
function getNivel(imc) {
  const nivel = [
    "SEU FRANGO FUDIDO",
    "JA É GOSTOSA MAS PODE FICAR MAIS",
    "VOCE TA BEM  GOSTOSA",
    "VAI PRA ACADEMIA SEU GORDO FUDIDO",
    "FUDIDO DEMAIS SÓ COM CIRURGIA",
    "PODE MATAR NAO TEM SOLUCAO PRA ESSE FUDIDO",
  ];

  if (imc <= 18.5) {
    return nivel[0];
  }
  if (imc <= 24.9) {
    return nivel[1];
  }
  if (imc <= 29.9) {
    return nivel[2];
  }
  if (imc <= 34.9) {
    return nivel[3];
  }
  if (imc <= 39.9) {
    return nivel[4];
  }
  if (imc > 39.9) {
    return nivel[5];
  }
}
function criaP() {
  const p = document.createElement("p");
  p.classList.add("paragrafo-resultado");
  return p;
}

function setResultado(msg, isvalid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = ``;
  const p = criaP();
  if (isvalid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }
  resultado.appendChild(p);
  p.innerHTML = msg;
}
