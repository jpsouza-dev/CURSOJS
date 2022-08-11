function criaHoraDosSegundos(segundos) {
  let data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}
const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const zerar = document.querySelector(".zerar");
const parar = document.querySelector(".parar");

let segundos = 0;
let timer;

function iniciaRelogio() {
   timer = setInterval(function () {
    segundos ++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);
}
iniciar.addEventListener("click", function (event) {
    relogio.classList.add('iniciado');
    clearInterval(timer);
    iniciaRelogio();
});
zerar.addEventListener("click", function (event) {
    relogio.classList.remove('iniciado');
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});
parar.addEventListener("click", function (event) {
    relogio.classList.remove('iniciado');
    relogio.classList.add('pausado');
    clearInterval(timer);
});

//Outra forma de fazer

/*document.addEventListener('click', function(e){
    const el = e.target;
    
    if(el.classList.contains('iniciar')){
        relogio.classList.add('iniciado');
        clearInterval(timer);
        iniciaRelogio();
    }
    if(el.classList.contains('zerar')){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
    if(el.classList.contains('parar')){
        relogio.classList.remove('iniciado');
        relogio.classList.add('pausado');
        clearInterval(timer);
    }

})*/